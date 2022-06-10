export class InputHandler {
    x;
    y;

    constructor(){
        
        window.addEventListener('click', e=>{
            this.x = e.clientX;
            this.y = e.clientY;
        })

    }
}