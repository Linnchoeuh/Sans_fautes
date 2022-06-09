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
import {ctx} from "../../../main.js"
import {Draw_button, Set_mouse_area} from "../../../include/tools.js";

var bonk = new Audio("./audio/bonk.mp3");

function Display_menu_main()
{
	let button_data;

	if (GV.menu != GV.prev_menu)
	{
		GV.prev_menu = GV.menu;
	}

	ctx.font = "70px arial";
	ctx.fillStyle = CP.white;
	ctx.fillText("Sans", 75, 100);
	ctx.fillText("fautes", 150, 175);
	ctx.lineWidth = 1;

	ctx.strokeStyle = CP.black;
	button_data = Draw_button("Jouer", 0, 399, canvas.width, 200,
		130, 120);
	if (button_data.Touched)
	{
		ctx.strokeStyle = CP.white;
		ctx.strokeRect(0, 399, canvas.width, 200)
	}
	if (button_data.Triggered)
		GV.menu = Menus.LEVEL_SELECT;

		ctx.strokeStyle = CP.black;
	button_data = Draw_button("Instruction", 0, 600, canvas.width, 200,
		60, 120);
	if (button_data.Touched)
	{
		ctx.strokeStyle = CP.white;
		ctx.strokeRect(0, 600, canvas.width, 200)
	}
	if (button_data.Triggered)
		GV.menu = Menus.INSTRUCTION;
	if (Set_mouse_area(130, 80, 20, 15).Triggered)
		bonk.play();
}

export {Display_menu_main};