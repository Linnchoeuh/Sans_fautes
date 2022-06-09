/*
** *****************************************************************************
** lenny.vigeon <lenny.vigeon@student-station>
** Ecole 89
**
** - Audio -
**
** *****************************************************************************
*/

import {canvas, ctx} from "../main.js"
import { Set_mouse_area } from "./tools.js";

class AudioClass
{
	constructor()
	{
		this.Main = new Audio("../audio/main_music.mp3");
		this.Loose = new Audio("../audio/loose_music.mp3");
		this.play_loose = false;
		this.play = true;
		this.unmuted_icon = new Image()
		this.unmuted_icon.src = "../graphics/gui/unmuted_icon.png"
		this.muted_icon = new Image()
		this.muted_icon.src = "../graphics/gui/muted_icon.png"
	}

	updateAudio()
	{
		if (this.play)
		{
			if (this.play_loose)
			{
				this.Main.pause();
				this.Main.currentTime = 0;
				this.Loose.play();
			}
			else
			{
				this.Loose.pause();
				this.Loose.currentTime = 0;
				this.Main.play();
			}
		}
		else
		{
			this.Main.pause();
			this.Main.currentTime = 0;
			this.Loose.pause();
			this.Loose.currentTime = 0;
		}
	}

	displayButton()
	{
		if (Set_mouse_area(canvas.width - 35, 5, 30, 30).Triggered)
		{
			if (this.play)
				this.play = false;
			else
				this.play = true;
		}
		/*
		if (this.play)
			ctx.drawImage(this.unmuted_icon, canvas.width - 35, 5, 30, 30)
		else
			ctx.drawImage(this.muted_icon, canvas.width - 35, 5, 30, 30)
		*/
	}
}

let Audios = new AudioClass();

export {Audios};
