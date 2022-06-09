/*
** *****************************************************************************
** lenny.vigeon <lenny.vigeon@student-station>
** Ecole 89
**
** - Struct -
**
** *****************************************************************************
*/

import {DiscussionHistory} from "./discussion_history.js"
import {canvas, ctx} from "../main.js"
import { Insert_text_in_rect, Set_mouse_area } from "./tools.js";

const Menus = {
    MAIN : 0,
	INSTRUCTION : 1,
	LEVEL_SELECT : 2,
    GAME : 3
}
export {Menus};

const ColorPalette = {
	white : "#ffffff", // (255,255,255)
	black : "#000000", // (0  ,0  ,0  )
	gray : {
		l : "#e1e1e1", // (225,225,225)
		n : "#969696", // (150,150,150)
		a : "#646464", // (100,100,100)
		d : "#4b4b4b", // (75 ,75 ,75 )
	},
	red : {
		l : "#ff324b", // (255,50 ,75 )
		n : "#ff0000", // (255,0  ,0  )
		d : "#640000", // (100,0  ,0  )
	},
	green : {
		l : "#64c832", // (100,200,50 )
		n : "#00ff00", // (0  ,255,0  )
		d : "#006400", // (0  ,100,0  )
	},
	blue : {
		l : "#324bff", // (50 ,75 ,255)
		n : "#0000ff", // (0  ,0  ,255)
		d : "#000064", // (0  ,0  ,100)
	},
	yellow : {
		n : "#ffff00", // (255,255,0  )
		d : "#646400", // (100,100,0  )
	},
	cyan : {
		n : "#00ffff", // (0,255  ,255)
		d : "#006464", // (0,100  ,100)
	},
	purple : {
		n : "#ff00ff", // (255,0  ,255)
		d : "#640064", // (100,0  ,100)
	}
}
export {ColorPalette};

const GlobalVar = {
	menu : Menus.MAIN,
	prev_menu : -1,
	BackupColor : {
		fill : ColorPalette.white,
		stroke : ColorPalette.white
	},
	Dialog : 0
}
export {GlobalVar};

class DialogStruct
{
	constructor(array_messages,
				array_4answers,
				right_answer_id,
				array_extra_messages = [],
				wrong_answer_damage = 2,
				right_answer_heal = 1,
				wrong_answer_message = "Ah, tu as fait une faute, mais...")
	{
		this.arr_messages = array_messages;
		this.arr_answers = array_4answers;
		this.arr_extra_messages = array_extra_messages;
		this.right_answer_id = right_answer_id;
		this.right_answer_heal = right_answer_heal;
		this.wrong_answer_damage = wrong_answer_damage;
		this.wrong_answer_message = wrong_answer_message;
	}
}

export {DialogStruct}

class DialogData
{
	constructor()
	{
		this.time_elapsed = -1;
		this.time_ms_interval = 1000;
		this.current_dialog_bloc = 0;
		this.message_pos = 0;
		this.answer_box_passed = false;
		this.display_answer_box = false;
		this.selected_answer = -1;
		this.extra_message_pos = 0;
		this.dialogs = []
		this.History = new DiscussionHistory();
		this.max_hp = 6;
		this.hp = 6;
	}

	AddDialog(dialog_struct)
	{
		this.dialogs.push(dialog_struct);
	}

	ResetDialog()
	{
		this.time_elapsed = -1;
		this.current_dialog_bloc = 0;
		this.message_pos = 0;
		this.answer_box_passed = false;
		this.display_answer_box = false;
		this.selected_answer = -1;
		this.extra_message_pos = 0;
		this.hp = this.max_hp;
		this.History.clearDiscussion();
	}

	OpenAnswerBox(dialog_bloc)
	{

		let tmp_value = this.History.header_offset +
		this.History.displayable_part;
		if (this.answer_box_passed === false)
			this.display_answer_box = true;
		if (this.display_answer_box === false)
		{
			this.History.addMessage(dialog_bloc.arr_answers[dialog_bloc.right_answer_id], 1);
			this.answer_box_passed = true;
			this.display_answer_box = false;
		}
	}

	AddNextMessage()
	{
		let dialog_bloc = this.dialogs[this.current_dialog_bloc];

		if (this.message_pos < dialog_bloc.arr_messages.length)
		{
			this.History.addMessage(dialog_bloc.arr_messages[this.message_pos], 0);
			this.message_pos++;
			return (0);
		}
		if (dialog_bloc.arr_answers.length !== 0 &&
			this.answer_box_passed === false)
		{
			this.OpenAnswerBox(dialog_bloc);
			return (0);
		}
		if (this.extra_message_pos < dialog_bloc.arr_extra_messages.length)
		{
			if (dialog_bloc.arr_extra_messages[this.extra_message_pos] === -1)
			{
				this.History.clearDiscussion();
				return (1);
			}
			this.History.addMessage(dialog_bloc.arr_extra_messages[this.extra_message_pos], 1);
			this.extra_message_pos++;
			return (0);
		}
		return (1);
	}

	RunDialog()
	{
		if (this.current_dialog_bloc >= this.dialogs.length)
			return (0);
		if (this.hp <= 0)
			return (-1);
		if (this.time_elapsed === -1)
			this.time_elapsed = Date.now();
		if (this.time_elapsed + this.time_ms_interval < Date.now())
		{
			if (!this.display_answer_box)
				this.time_elapsed = Date.now();
			if (this.AddNextMessage() === 1)
			{
				this.current_dialog_bloc++;
				this.message_pos = 0;
				this.answer_box_passed = false;
				this.extra_message_pos = 0;
			}
		}
		return (1);
	}

	DisplayAnswerBox()
	{
		let i;
		let dialog = this.dialogs[this.current_dialog_bloc];
		let top_box = this.History.displayable_part +
						this.History.header_offset + 10;
		let height_box = canvas.height - top_box;
		let rect;
		let button_data;
		let color;

		rect = [
			new Rect_Bound(10, top_box + 10,
				canvas.width / 2 - 20, height_box / 2 - 20),
			new Rect_Bound(10 + canvas.width / 2, top_box + 10,
				canvas.width / 2 - 20, height_box / 2 - 20),
			new Rect_Bound(10, top_box + height_box / 2 + 10,
				canvas.width / 2 - 20, height_box / 2 - 20),
			new Rect_Bound(10 + canvas.width / 2, top_box + height_box / 2 + 10,
				canvas.width / 2 - 20, height_box / 2 - 20)
			]
		i = 0;
		if (this.selected_answer === -1)
		{
			while (i < dialog.arr_answers.length)
			{
				button_data = Set_mouse_area(rect[i].x, rect[i].y, rect[i].width, rect[i].height);
				color = ColorPalette.black;
				if (button_data.Touched)
				{
					color = ColorPalette.white;
					if (button_data.Triggered)
						this.selected_answer = i;
				}
				Insert_text_in_rect(dialog.arr_answers[i], rect[i], 15, false, 0, color);
				i++;
			}
		}
		else
		{
			while (i < dialog.arr_answers.length)
			{
				color = ColorPalette.red.n;
				if (i == dialog.right_answer_id)
					color = ColorPalette.green.n;
				Insert_text_in_rect(dialog.arr_answers[i],
					rect[i], 15, false, 0, color);
				i++;
			}
			if (this.selected_answer >= 0)
			{
				this.History.addMessage(dialog.arr_answers[this.selected_answer], 1)
				this.time_elapsed = Date.now();
				if (this.selected_answer === dialog.right_answer_id)
					this.selected_answer = -2;
				else
					this.selected_answer = -3;
			}
			else if (this.time_elapsed + this.time_ms_interval < Date.now())
			{
				if (this.selected_answer === -2)
				{
					this.selected_answer = -1;
					this.display_answer_box = false;
					this.answer_box_passed = true;
					this.hp += dialog.right_answer_heal;
					if (this.hp > this.max_hp)
						this.hp = this.max_hp;
				}
				if (this.selected_answer === -3)
				{
					this.time_elapsed = Date.now();
					this.History.addMessage(dialog.wrong_answer_message, 0)
					this.selected_answer = -1;
					this.display_answer_box = false;
					this.answer_box_passed = true;
					this.hp -= dialog.wrong_answer_damage;
					if (this.hp < 0)
						this.hp = 0;
				}
			}

		}
	}
}

export {DialogData}

class Rect_Bound
{
    constructor(x = 0,
				y = 0,
				w = 0,
				h = 0){
        this.x = x;
	    this.y = y;
	    this.width = w;
	    this.height = h;
    }

	setBound(x = 0,
			 y = 0,
			 w = 0,
			 h = 0)
	{
		this.x = x;
	    this.y = y;
	    this.width = w;
	    this.height = h;
	}
}
export{Rect_Bound};