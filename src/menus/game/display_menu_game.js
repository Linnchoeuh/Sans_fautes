/*
** *****************************************************************************
** lenny.vigeon <lenny.vigeon@student-station>
** Ecole 89
**
** - Menu_Main -
**
** *****************************************************************************
*/

import {Menus, GlobalVar as GV, ColorPalette as CP, Rect_Bound} from "../../../include/struct.js";
import {canvas, ctx} from "../../../main.js"
import {Draw_button, Set_mouse_area, load_image} from "../../../include/tools.js";
import { Audios } from "../../../include/audio.js";
import {Insert_text_in_rect} from "../../../include/tools.js";

let send_icon = load_image("graphics/gui/send_icon.png")
let Dialog;
let delay;

function draw_up_UI(Dialog, delay)
{
	let tmp_value;
	let button_data;

	tmp_value = Dialog.History.header_offset - 10;
	ctx.fillStyle = "#739b9b";
	ctx.strokeStyle = CP.black;
	ctx.fillRect(0, 0, canvas.width, tmp_value);
	ctx.lineWidth = 2;
	ctx.strokeRect(0, 0, canvas.width, tmp_value);
	button_data = Set_mouse_area(0, 0, tmp_value, tmp_value);
	if (button_data.Touched)
	{
		ctx.strokeStyle = CP.white;
		ctx.lineWidth = 5;
		ctx.beginPath();
		ctx.moveTo(25, 5);
		ctx.lineTo(10 ,tmp_value / 2);
		ctx.lineTo(25 ,tmp_value - 5);
		ctx.stroke();
	}
	ctx.strokeStyle = CP.black;
	ctx.lineWidth = 3;
	ctx.beginPath();
    ctx.moveTo(25, 5);
    ctx.lineTo(10 ,tmp_value / 2);
    ctx.lineTo(25 ,tmp_value - 5);
    ctx.stroke();
	if (button_data.Triggered && delay == -1)
		GV.menu = Menus.LEVEL_SELECT;
	ctx.lineWidth = 10;
	ctx.strokeStyle = CP.red.n;
	ctx.beginPath();
    ctx.moveTo(50, 20);
    ctx.lineTo(50 + (250 * (Dialog.hp / Dialog.max_hp)), 20);
    ctx.stroke();
}

function draw_down_UI()
{
	let tmp_value;
	let textbox_pos;

	tmp_value = Dialog.History.header_offset - 10;
	textbox_pos = Dialog.History.displayable_part + 10;
	ctx.lineWidth = 2;
	ctx.strokeStyle = CP.black;
	ctx.fillStyle = "#8c6464";
	ctx.fillRect(0, textbox_pos, canvas.width, canvas.height - textbox_pos);
	ctx.strokeRect(0, textbox_pos, canvas.width, canvas.height - textbox_pos);
	ctx.fillStyle = "#739b9b";
	ctx.fillRect(0, textbox_pos, canvas.width, tmp_value + 10);
	ctx.strokeRect(0, textbox_pos, canvas.width, tmp_value + 10);
	ctx.fillStyle = CP.white;
	ctx.fillRect(15, textbox_pos + 10, canvas.width - 100, tmp_value - 10);
	ctx.strokeRect(15, textbox_pos + 10, canvas.width - 100, tmp_value - 10);
	ctx.drawImage(send_icon, canvas.width - 50, textbox_pos + 5, 40, 40);
}

function draw_UI(Dialog, delay)
{
	draw_up_UI(Dialog, delay);
	draw_down_UI();
}

function display_win()
{
	let rect;

	ctx.fillStyle = CP.black;
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = CP.white;
	rect = new Rect_Bound(25, 50, canvas.width, canvas.height);
	Insert_text_in_rect("VOUS AVEZ RÉUSSI !", rect, 80)
	rect = new Rect_Bound(25, 250, 300, canvas.height);
	Insert_text_in_rect(
		"Et bien ! Vous semblez maitriser décemment la langue française !",
		rect, 30, false, 5)
	ctx.font = 20+"px Consolas";
	if (Draw_button("Retour à la selection des niveaux",
		0, 600, canvas.width, 30, 10, 22).Triggered)
		GV.menu = Menus.LEVEL_SELECT;
	if (Draw_button("Retour au menu principal",
		0, 700, canvas.width, 30, 10, 22).Triggered)
		GV.menu = Menus.MAIN;
}

function display_loose()
{
	let rect;

	Audios.play_loose = true;
	ctx.fillStyle = CP.black;
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = CP.white;
	rect = new Rect_Bound(25, 50, canvas.width, canvas.height);
	Insert_text_in_rect("VOUS AVEZ ÉCHOUÉ !", rect, 80)
	rect = new Rect_Bound(25, 250, 300, canvas.height);
	Insert_text_in_rect(
		"Vôtre niveau de français est si mauvais que la personne vous a bloqué.",
		rect, 30, false, 5)
	ctx.font = 20+"px Consolas";

	if (Draw_button("Réessayer",
		0, 500, canvas.width, 30, 10, 22).Triggered)
	{
		Audios.play_loose = false;
		GV.prev_menu = -1;
	}
	if (Draw_button("Retour à la selection des journées",
		0, 600, canvas.width, 30, 10, 22).Triggered)
	{
		Audios.play_loose = false;
		GV.menu = Menus.LEVEL_SELECT;
	}
	if (Draw_button("Retour au menu principal",
		0, 700, canvas.width, 30, 10, 22).Triggered)
	{
		Audios.play_loose = false;
		GV.menu = Menus.MAIN;
	}
}

function Display_menu_game()
{
	let rect;
	let dialog_success;

	if (GV.menu != GV.prev_menu)
	{
		Dialog = GV.Dialog;
		delay = -1;
		Dialog.ResetDialog();
		GV.prev_menu = GV.menu;
	}


	rect = new Rect_Bound(150, 150, 300, 400);
	dialog_success = Dialog.RunDialog();
	Dialog.History.MoveDiscussion();
	Dialog.History.displayDiscussion();

	draw_UI(Dialog, delay)
	if (Dialog.display_answer_box)
		Dialog.DisplayAnswerBox();
	if (delay === -1 &&
		(dialog_success === 0 || Dialog.hp === 0))
		delay = Date.now();
	if (delay !== -1 &&
		delay + 1000 < Date.now())
	{
		if (dialog_success === 0)
			display_win()
		else if (Dialog.hp === 0)
			display_loose();
	}
}

export {Display_menu_game};
