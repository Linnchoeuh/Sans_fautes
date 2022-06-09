/*
** *****************************************************************************
** lenny.vigeon <lenny.vigeon@student-station>
** Ecole 89
**
** - Insert_text_in_rect -
**
** *****************************************************************************
*/

import {ctx} from "../../main.js"
import {Menus, GlobalVar as GV, ColorPalette as CP} from "../../include/struct.js";
import {Load_font} from "../../include/font.js";
import {Split_str} from "../../include/tools.js";

Load_font("Consolas", "graphics/fonts/CONSOLA.TTF");

const font_char_size = 0.55;

function Arranging_to_message(str_split,
							  nb_char_in_line)
{
	let i;
	let msg_arrangement;
	let line;

	i = 0;
	line = "";
	msg_arrangement = [];
	while (i < str_split.length) {
		if ((line.length + str_split[i].length) > nb_char_in_line) {
			msg_arrangement.push(line);
			line = "";
		}
		line += str_split[i] + " ";
		i++;
	}
	msg_arrangement.push(line);
	return (msg_arrangement);
}

function Insert_text_in_rect(text,
						   rect,
						   size,
						   reverse,
						   margin = 0,
						   color = "#000000")
{
	let i;
	let split;
	let nb_char_in_line;

	if (size <= 0)
		return;
	if (reverse === true) {
		rect.x -= rect.width;
	}
	ctx.strokeStyle = color;
	ctx.strokeRect(rect.x, rect.y, rect.width, rect.height);
	ctx.font = size+"px Consolas";
	ctx.fillStyle = CP.white;
	ctx.strokeStyle = CP.white;
	nb_char_in_line = Math.trunc(rect.width / (size * font_char_size));
	split = Arranging_to_message(Split_str(text, " "), nb_char_in_line);
	i = 0;
	rect.y += size;
	while (i < split.length) {
		ctx.fillText(split[i], rect.x, rect.y + (size + margin) * i);
		i++;
	}
	rect.y -= size;
	return ((size + margin) * i - margin);
}

export {Insert_text_in_rect, Arranging_to_message, font_char_size};