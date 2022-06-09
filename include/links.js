/*
** *****************************************************************************
** lenny.vigeon <lenny.vigeon@student-station>
** Ecole 89
**
** - link -
**
** *****************************************************************************
*/

import {canvas, ctx} from "../main.js"
import { ColorPalette as CP } from "./struct.js";
import { Draw_button} from "./tools.js";

class LinkClass
{
	constructor()
	{
		this.link_1_img = new Image();
		this.link_2_img = new Image();
		this.link_1_img.src = "graphics/gui/projet_voltaire.png";
		this.link_2_img.src = "graphics/gui/projet_voltaire_yt.png";
		this.link_1 = "https://www.projet-voltaire.fr/regles-orthographe/"
		this.link_2 = "https://www.youtube.com/c/ProjetVoltaireOrthographe";
	}

	displayLinks()
	{
		ctx.strokeStyle = CP.white;
		ctx.drawImage(this.link_1_img, canvas.width - 75, 5, 30, 30)
		if (Draw_button("", canvas.width - 75, 5, 30, 30).Triggered)
			window.open(this.link_1);
		ctx.drawImage(this.link_2_img, canvas.width - 115, 5, 30, 30)
		if (Draw_button("", canvas.width - 115, 5, 30, 30).Triggered)
			window.open(this.link_2);
	}
}

let Links = new LinkClass();

export {Links};