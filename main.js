/*
** *****************************************************************************
** lenny.vigeon <lenny.vigeon@student-station>
** Ecole 89
**
** - Main -
**
** *****************************************************************************
*/

//SYNTAXE :
//Variables  : two_words
//Constantes : TWO_WORDS
//Fonctions  : Two_words
//Classes    : Two_Words
//    Dans une variable : TwoWords
//Objets   : TwoWords

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d", { alpha: false });
canvas.width = 450;
canvas.height = 800;
export {ctx, canvas};

import {Menus, GlobalVar as GV, ColorPalette as CP} from "./include/struct.js";
import {Mouse} from "./include/mouse.js";
import {Keyboard} from "./include/keyboard.js";
import {Audios} from "./include/audio.js";
import { Links } from "./include/links.js";

import {Display_menu_main} from "./src/menus/main/display_menu_main.js";
import {Display_menu_instruction} from "./src/menus/instruction/display_menu_instruction.js";
import {Display_menu_level_select} from "./src/menus/level_select/display_menu_level_select.js";
import {Display_menu_game} from "./src/menus/game/display_menu_game.js";


import {DialogDay1} from "./src/days/day_1.js";
GV.Dialog = DialogDay1;

function Main()
{
	let test;
	requestAnimationFrame(Main);
	ctx.fillStyle = "#8c6464";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	switch (GV.menu) {
		case Menus.MAIN: // Main menu
			Display_menu_main();
			break;
		case Menus.INSTRUCTION: // Settings
			Display_menu_instruction();
			break;
		case Menus.LEVEL_SELECT: // Select Level
			Display_menu_level_select();
			break;
		case Menus.GAME: // Game
			Display_menu_game();
			break;
	}
	Audios.displayButton();
	Links.displayLinks();
	Keyboard.updatePressed();
	Mouse.updatePressed();
	Audios.updateAudio();
}

Main();