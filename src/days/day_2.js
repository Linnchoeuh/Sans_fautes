/*
** *****************************************************************************
** lenny.vigeon <lenny.vigeon@student-station>
** Ecole 89
**
** - Day_2 -
**
** *****************************************************************************
*/

import {DialogStruct, DialogData} from "../../include/struct.js";

const DialogDay2 = new DialogData()

DialogDay2.AddDialog(new DialogStruct(
	[
		"Bonjour, comment vas-tu ?"
	],
	[
		"Hey, je vais bien, je viens juste de terminer le travail qui m'a été demandée.",
		"Hey, je vais bien, je viens juste de terminer le travail qui ma été demandé.",
		"Hey, je vais bien, je viens juste de terminer le travaille qui m'a été demandéé.",
		"Hey, je vais bien, je viens juste de terminer le travail qui m'a été demandé."
	],
	3, [], 3)
)
DialogDay2.AddDialog(new DialogStruct(
	[
		"Tu travailles dans quoi ?"
	],
	[
		"Je travaille dans un restaurant, son nom est \"La Piazza\", et toi, tu travailles ou ?",
		"Je travaille dans un restaurant, son nom est \"La Piazza\", et toi, tu travailles où ?",
		"Je travail dans un restaurant, son nom est \"La Piazza\", et toi, tu travailles où ?",
		"Je travaille dans un restaurant, sont nom est \"La Piazza\", et toi, tu travailles où ?"
	],
	1, [], 3)
)
DialogDay2.AddDialog(new DialogStruct(
	[
		"Je travaille dans un centre spatial, il est situé à Toulouse."
	],
	[
		"Oh ! Impressionnant ! Ça fait combien de temps que tu es là-bas ?",
		"Oh ! Impressionnant ! Ça fait combien de temp que tu es là bas ?",
		"Oh ! Impressionnant ! Ça fait combien de temps que tu ai là-bas ?",
		"Oh ! Impressionnant ! Ça fait combien de temps que tu est là bas ?"
	],
	0, [], 3)
)
DialogDay2.AddDialog(new DialogStruct(
	[
		"Je suis là-bas depuis plus de 5 ans maintenant."
	],
	[
		"Personnellement, je travaille dans la pizzeria depuis 2 ans.",
		"Personnellement, je travaille dans la pizzeria depuis 2 ans.",
		"Personnellement, je travaille dans la pizzeria depuis 2 ans.",
		"Personnellement, je travaille dans la pizzeria depuis 2 ans."
	],
	2, [-1], 3)
)
DialogDay2.AddDialog(new DialogStruct(
	[
		"Hey j'ai vu qu'il y avait un concert dans ma ville dans 1 semaine d'un groupe d'artistes de Rock."
	],
	[
		"Quel groupe est-se ?",
		"Quel groupe est-ce ?",
		"Quels groupes est-se ?",
		"Quelle groupe est-ce ?"
	],
	1, [], 3)
)
DialogDay2.AddDialog(new DialogStruct(
	[
		"Ce sont les ACDC. 🎸"
	],
	[
		"C'est vraiment eux qui jouent ?",
		"C'est vraiment eux qui joues ?",
		"C'est vraiment eu qui joue ?",
		"S'est vraiment eux qui jouent ?"
	],
	0, [], 3)
)
DialogDay2.AddDialog(new DialogStruct(
	[
		"Oui, il y a un souci ?"
	],
	[
		"C'est un de mes groupe préféré ! 🤩 🤘",
		"C'est un de met groupes préférés ! 🤩 🤘",
		"C'est un de met groupe préféré ! 🤩 🤘",
		"C'est un de mes groupes préférés ! 🤩 🤘"
	],
	3, [], 3)
)
DialogDay2.AddDialog(new DialogStruct(
	[
		"Cela te tenterait de venir avec moi pour aller au concert ensemble ?"
	],
	[
		"Avec grend plaisir. 😁 😊",
		"Avec grand plésir. 😁 😊",
		"Avec grand plèsir. 😁 😊",
		"Avec grand plaisir. 😁 😊"
	],
	3, [], 6)
)
DialogDay2.AddDialog(new DialogStruct(
	[
		"Ça marche, je commande les places, on se tient au courant pour le jour J."
	],
	[], 0, [], 0)
)
export {DialogDay2};
