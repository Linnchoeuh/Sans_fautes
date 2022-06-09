/*
** *****************************************************************************
** lenny.vigeon <lenny.vigeon@student-station>
** Ecole 89
**
** - Draw_Button -
**
** *****************************************************************************
*/

import {ColorPalette as CP} from "../../include/struct.js";
import {Set_mouse_area} from "../../include/tools.js";
import {ctx} from "../../main.js";

function Draw_button(message,
						x,
						y,
						width,
						height,
						offset_x = 0,
						offset_y = 0)
{
	ctx.fillText(message, x + offset_x, y + offset_y);
	ctx.strokeRect(x, y, width, height);
	return (Set_mouse_area(x, y, width, height));
}

export {Draw_button};