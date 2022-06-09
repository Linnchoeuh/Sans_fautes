/*
** *****************************************************************************
** lenny.vigeon <lenny.vigeon@student-station>
** Ecole 89
**
** - Font -
**
** *****************************************************************************
*/

function Load_font(font_name,
				   font_path)
{
	var Consolas_font = new FontFace(font_name, "url("+font_path+")");
	Consolas_font.load().then(function(loaded_face) {
		document.fonts.add(loaded_face);
		document.body.style.fontFamily = font_name+", Arial";
	}).catch(function(error) {
		console.log("Unable to load "+font_name+".");
	});
}

export{Load_font}