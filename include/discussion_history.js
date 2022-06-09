/*
** *****************************************************************************
** lenny.vigeon <lenny.vigeon@student-station>
** Ecole 89
**
** - DiscussionHistory -
**
** *****************************************************************************
*/

import {Insert_text_in_rect, Arranging_to_message, font_char_size, Split_str} from "./tools.js";
import {Menus, GlobalVar as GV, ColorPalette as CP, Rect_Bound} from "./struct.js";
import {Keyboard} from "./keyboard.js";

const MsgData = {
	user1_offset : 25,
	user2_offset : 125,
	width : 300
}

const OFFSET_BETWEEN_MESSAGES = 40;

class DiscussionHistory
{
	constructor()
	{
		this.messages = [];
		this.user = [];
		this.header_offset = 50;
		this.discussion_offset = -this.header_offset;
		this.lowest_offset = 0;
		this.displayable_part = 450;
		this.conv_updated = false;
		this.letter_size = 20;
		this.line_margin = 0.5;
	}

	clearDiscussion()
	{
		this.messages = [];
		this.user = [];
		this.discussion_offset = -this.header_offset;
		this.lowest_offset = 0;
		this.conv_updated = false;
	}

	addMessage(message, user_id)
	{
		let tmp_str;
		let nb_char_in_line;

		this.lowest_offset = 0;
		this.messages.push(message);
		this.user.push(user_id);
		nb_char_in_line = Math.trunc(MsgData.width / (this.letter_size * font_char_size));
		for (let i = 0; i < this.messages.length; i++)
		{
			tmp_str = Arranging_to_message(Split_str(this.messages[i], " "), nb_char_in_line);
			this.lowest_offset += (this.letter_size + this.line_margin) * tmp_str.length - this.line_margin
			this.lowest_offset += OFFSET_BETWEEN_MESSAGES;
		}
		this.lowest_offset -= (OFFSET_BETWEEN_MESSAGES + this.displayable_part);
		if (this.lowest_offset > -this.header_offset)
			this.discussion_offset = this.lowest_offset;
	}

	displayDiscussion()
	{
		let rect;
		let initial_offset;

		initial_offset = -this.discussion_offset;

		for (let i = 0; i < this.messages.length; i++)
		{
			if (this.user[i] === 0)
				rect = new Rect_Bound(MsgData.user1_offset, initial_offset, MsgData.width, 0);
			else
				rect = new Rect_Bound(MsgData.user2_offset, initial_offset, MsgData.width, 0);

			initial_offset += Insert_text_in_rect(this.messages[i], rect, this.letter_size, false, this.line_margin);
			initial_offset += OFFSET_BETWEEN_MESSAGES;
		}

	}

	MoveDiscussion()
	{
		if (Keyboard.keys[Keyboard.ID.ARROW_DOWN] &&
			this.lowest_offset > this.discussion_offset)
			this.discussion_offset += 20;
		if (Keyboard.keys[Keyboard.ID.ARROW_UP])
			this.discussion_offset -= 20;
		if (this.discussion_offset < -this.header_offset)
			this.discussion_offset = -this.header_offset;
	}
}

export {DiscussionHistory};