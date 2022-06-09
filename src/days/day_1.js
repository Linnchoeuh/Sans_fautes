/*
** *****************************************************************************
** lenny.vigeon <lenny.vigeon@student-station>
** Ecole 89
**
** - Day_1 -
**
** *****************************************************************************
*/

import {DialogStruct, DialogData} from "../../include/struct.js";

const DialogDay1 = new DialogData()

DialogDay1.AddDialog(new DialogStruct(
	[
		"Salut, désolé c'est la première fois que je suis sur ce genre de site."
	],
	[
		"Bonjour, pas de soucis 😉. De plus, moi aussi je suis nouveau sur ce site.",
		"Bonjour, pas de soucis 😉. De plus, moi aussi je suis nouveau sur se site.",
		"Bonjour, pas de soussis 😉. De plus, moi aussi je suis nouveau sur ce site.",
		"Bonjour, pas de soucis 😉. De plus, moi aussi je suis nouveau sûr ce site."
	],
	0)
)
DialogDay1.AddDialog(new DialogStruct(
	[
		"C'est déjà un point commun en plus alors. 😂."
	],
	[
		"Du cou oui. 😂.",
		"Ducoup oui. 😂.",
		"Du coup oui. 😂.",
		"Ducou oui. 😂."
	],
	2, [], 2, 1,
	"Tu feras attention, tu as fait une faute d'inattention.")
)
DialogDay1.AddDialog(new DialogStruct(
	[
		"Je viens de voir que tu aimais beaucoup la musique, tu préfères quel style de musique ?"
	],
	[
		"Tous à fait, j'aime beaucoup de styles différents part contre. 😅",
		"Tout à fait, j'aime beaucoup de styles différents par contre. 😅",
		"Tout à fait, j'aimes beaucoup de style différents par contre. 😅",
		"Tout a fait, j'aime beaucoup de styles différents par contre. 😅"
	],
	1,
	[
		"Le style de musique que j'écoute le plus est le style Rock."
	])
)
DialogDay1.AddDialog(new DialogStruct(
	[
		"Vraiment !? C'est aussi le style que j'écoute. 🤩🤘"
	],
	[
		"J'avou que c'est surprenant, désolé je vais devoir y aller.",
		"J'avoue que c'est surprenant, désolé je vait devoir y aller.",
		"J'avoue que c'est surprenant, désolé je vais devoir y aller.",
		"J'avoue que c'est surprenant, désolé je vais devoir y allez."
	],
	2,
	[
		"J'ai beaucoup de travail en ce moment. 😅"
	])
)
DialogDay1.AddDialog(new DialogStruct(
	[
		"Pas de soucis je te dis à bientôt."
	],
	[],
	0,
	[
		"A très bientôt."
	])
)
export {DialogDay1};

