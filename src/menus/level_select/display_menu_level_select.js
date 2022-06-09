/*
** *****************************************************************************
** lenny.vigeon <lenny.vigeon@student-station>
** Ecole 89
**
** - Menu_Main -
**
** *****************************************************************************
*/

import {Menus, GlobalVar as GV, ColorPalette as CP} from "../../../include/struct.js";
import {canvas, ctx} from "../../../main.js"
import {Draw_button, Set_mouse_area} from "../../../include/tools.js";
import {Back_arrow} from "../../../include/gui.js";
import {DialogDay1} from "../../days/day_1.js";
import {DialogDay2} from "../../days/day_2.js";
import {DialogDay3} from "../../days/day_3.js";

function Display_menu_level_select()
{
	let button_data;

	if (GV.menu != GV.prev_menu)
	{
		GV.prev_menu = GV.menu;
	}
	Back_arrow(0, 0, 100, CP.white);
	if (Set_mouse_area(0, 0, 100, 100).Triggered) {
		GV.menu = Menus.MAIN;
	}
	ctx.font = 85+"px Consolas";
	ctx.fillStyle = CP.black;
	ctx.strokeStyle = CP.black;
	button_data = Draw_button("JOURNÉE 1", 0, 200,
		canvas.width, 150, 10, 100);
	if (button_data.Touched)
	{
		ctx.strokeStyle = CP.white;
		ctx.strokeRect(0, 200, canvas.width, 150)
	}
	if (button_data.Triggered)
	{
		GV.Dialog = DialogDay1;
		GV.menu = Menus.GAME;
	}
	ctx.strokeStyle = CP.black;
	button_data = Draw_button("JOURNÉE 2", 0, 400,
		canvas.width, 150, 10, 100);
	if (button_data.Touched)
	{
		ctx.strokeStyle = CP.white;
		ctx.strokeRect(0, 400, canvas.width, 150)
	}
	if (button_data.Triggered)
	{
		GV.Dialog = DialogDay2;
		GV.menu = Menus.GAME;
	}
	ctx.strokeStyle = CP.black;
	button_data = Draw_button("JOURNÉE 3", 0, 600,
		canvas.width, 150, 10, 100);
	if (button_data.Touched)
	{
		ctx.strokeStyle = CP.white;
		ctx.strokeRect(0, 600, canvas.width, 150)
	}
	if (button_data.Triggered)
	{
		GV.Dialog = DialogDay3;
		GV.menu = Menus.GAME;
	}
}

export {Display_menu_level_select};