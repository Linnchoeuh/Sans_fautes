/*
** *****************************************************************************
** lenny.vigeon <lenny.vigeon@student-station>
** Ecole 89
**
** - Menu_Main -
**
** *****************************************************************************
*/

import {ctx} from "../../main.js"

function Back_arrow(x,
					y,
					scale,
					color)
{
	var backup_color = ctx.fillStyle;
	ctx.fillStyle = color;
	ctx.beginPath();
	ctx.moveTo((x + 0.66) * scale, y);
	ctx.lineTo((x + 1) * scale, y);
	ctx.lineTo((x + 1) * scale, (y + 1) * scale);
	ctx.lineTo(x, (y + 1) * scale);
	ctx.lineTo((x + 0.33) * scale, (y + 0.33) * scale);
	ctx.lineTo((x + 0.33) * scale, (y + 0.66) * scale);
	ctx.lineTo((x + 0.66) * scale, (y + 0.66) * scale);
	ctx.closePath();
	ctx.fill();
	ctx.fillStyle = backup_color;
}

export {Back_arrow};