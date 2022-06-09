/*
** *****************************************************************************
** lenny.vigeon <lenny.vigeon@student-station>
** Ecole 89
**
** - Split_str -
**
** *****************************************************************************
*/

function Split_str(str_src,
				   str_parser = " ")
{
	let k;
	let splitted;
	let start;
	let element;

	k = 0;
	splitted = []
	while (k < str_src.length) {
		element = "";
		while (str_src[k] === str_parser && k < str_src.length) {
			k++;
		}
		start = k;
		while (str_src[k] !== str_parser && k < str_src.length) {
			k++;
		}
		while (start < k) {
			element += str_src[start];
			start++;
		}
		splitted.push(element);
	}
	return (splitted);
}

export{Split_str};