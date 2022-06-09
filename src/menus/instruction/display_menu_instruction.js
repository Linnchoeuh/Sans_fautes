/*
** *****************************************************************************
** lenny.vigeon <lenny.vigeon@student-station>
** Ecole 89
**
** - Display_menu_instruction -
**
** *****************************************************************************
*/

import {Menus, GlobalVar as GV, ColorPalette as CP} from "../../../include/struct.js";
import {canvas, ctx} from "../../../main.js"
import {Draw_button} from "../../../include/tools.js";
import {Back_arrow} from "../../../include/gui.js";
import {DiscussionHistory} from "../../../include/discussion_history.js"

let HistoryInstruction = new DiscussionHistory();
HistoryInstruction.header_offset = 50;
HistoryInstruction.displayable_part = 800;

HistoryInstruction.addMessage("INSTRUCTIONS", 1);
HistoryInstruction.addMessage("NAVIGATION", 0);
HistoryInstruction.addMessage("Utilisez les flèches du clavier pour vous balader dans ce menu mais aussi pendant le jeu pour vous balader dans la conversation", 1);
HistoryInstruction.addMessage("BUT DU JEU", 0);
HistoryInstruction.addMessage("Pour gagner vous devez choisir parmis 4 choix de réponse. Seul l'une des quatres possède la bonne orthographe. C'est celle-ci que vous devez choisir.", 1);
HistoryInstruction.addMessage("VIE", 0);
HistoryInstruction.addMessage("Vous possèdez d'une barre de vie que vous pourrez voir en haut en rouge, à chaque mauvaise réponse celle-ci diminuera. Si elle disparait complètement vous perdrez.", 1);
HistoryInstruction.addMessage("EXTRA", 0);
HistoryInstruction.addMessage("Vous pouvez quittez une partie à tout avec la flèche se situant en haut à gauche. Cependant votre progression ne sera pas sauvegardé.", 1)
HistoryInstruction.addMessage("Vous avez accès aux différents liens du projet voltaire en haut a droite.", 1);
HistoryInstruction.addMessage("Vous pouvez couper le son en cliquant en haut à droite.", 1)

HistoryInstruction.discussion_offset = -HistoryInstruction.header_offset;

function Display_menu_instruction()
{
	HistoryInstruction.MoveDiscussion();
	HistoryInstruction.displayDiscussion();
	ctx.font = "70px arial";
	ctx.fillStyle = CP.white;
	ctx.strokeStyle = CP.white;
	Back_arrow(0, 0, 100, CP.white);
	if (Draw_button("", 0, 0, 100, 100, 130, 120).Triggered)
	{
		GV.menu = Menus.MAIN;
	}
}

export {Display_menu_instruction};
