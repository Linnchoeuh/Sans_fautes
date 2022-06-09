/*
** *****************************************************************************
** lenny.vigeon <lenny.vigeon@student-station>
** Ecole 89
**
** - Set_Mouse_Area -
**
** *****************************************************************************
*/

import {Mouse} from "../../include/mouse.js";

function Set_mouse_area(x, y, width, height)
{
	const Area = {
		Touched : false,
		Triggered : false
	}
	if (Mouse.x >= x && Mouse.x < x + width &&
		Mouse.y >= y && Mouse.y < y + height)
	{
		Area.Touched = true;
		if (Mouse.Click.left && !Mouse.Pressed.left)
		{
			Area.Triggered = true;
		}
	}
	return (Area);
}

export {Set_mouse_area};