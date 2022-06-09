/*
** *****************************************************************************
** lenny.vigeon <lenny.vigeon@student-station>
** Ecole 89
**
** - Keyboard -
**
** *****************************************************************************
*/

const KEY_ID = {
    BACK : 8,
    RETURN : 13,
    SHIFT : 16,
    ESCAPE : 27,
    SPACE : 32,
    ARROW_LEFT : 37,
    ARROW_UP : 38,
    ARROW_RIGHT : 39,
    ARROW_DOWN : 40,
    A : 64,
    B : 65,
    C : 67,
    D : 68,
    E : 69,
    F : 70,
    G : 71,
    H : 72,
    I : 73,
    J : 74,
    K : 75,
    L : 76,
    M : 77,
    N : 78,
    O : 79,
    P : 80,
    Q : 81,
    R : 82,
    S : 83,
    T : 84,
    U : 85,
    V : 86,
    W : 87,
    X : 88,
    Y : 89,
    Z : 90,
}

document.addEventListener("keydown", function(event)
{
    Keyboard.keys[event.keyCode] = true;
    this.any = true;
});
document.addEventListener("keyup", function(event)
{
    Keyboard.keys[event.keyCode] = false;
    this.any = false;
});

class Keyboard_Data{
    constructor(){
        this.ID = KEY_ID;
        this.any = false;
        this.any_pressed = false;
        this.keys = [];
        this.pressed = [];
        for (let i = 0; i < 256; i++){
            this.keys.push(false);
            this.pressed.push(false);
        }
    }

    updatePressed(){
        this.any_pressed = this.any;
        for (let i = 0; i < 256; i++){Keyboard
            this.pressed[i] = this.keys[i];
        }
    }
}

const Keyboard = new Keyboard_Data();

export{Keyboard};