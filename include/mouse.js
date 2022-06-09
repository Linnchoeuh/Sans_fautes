/*
** *****************************************************************************
** lenny.vigeon <lenny.vigeon@student-station>
** Ecole 89
**
** - Mouse -
**
** *****************************************************************************
*/

canvas.addEventListener("mousemove", function(event){
    Mouse.x = event.clientX - canvas.offsetLeft;
    Mouse.y = event.clientY - canvas.offsetTop;
});

canvas.addEventListener("mousedown", function(event){
    Mouse.Click.any = true;
    switch(event.button){
        case 0:
            Mouse.Click.left = true;
        case 1:
            Mouse.Click.middle = true;
        case 2:
            Mouse.Click.right = true;
    }
});

canvas.addEventListener("mouseup", function(event){
    Mouse.Click.any = false;
    switch(event.button){
        case 0:
            Mouse.Click.left = false;
        case 1:
            Mouse.Click.middle = false;
        case 2:
            Mouse.Click.right = false;
    }
});

class Mouse_Data
{
    constructor(){
        this.x = 0;
	    this.y = 0;
        this.wheel = 0;
	    this.Click = {
		    any : false,
		    left : false,
		    middle : false,
		    right : false
	    };
	    this.Pressed = {
		    any : false,
		    left : false,
		    middle : false,
		    right : false
	    };
    }

    updatePressed(){
        this.Pressed.any    = this.Click.any;
        this.Pressed.left   = this.Click.left;
        this.Pressed.middle = this.Click.middle;
        this.Pressed.right  = this.Click.right;
    }
};

const Mouse = new Mouse_Data();

export{Mouse};