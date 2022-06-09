/*
** *****************************************************************************
** lenny.vigeon <lenny.vigeon@student-station>
** Ecole 89
**
** - load_image -
**
** *****************************************************************************
*/

function load_image(path)
{
    let texture = new Image();
    texture.src = path;
    return (texture);
}

export {load_image};