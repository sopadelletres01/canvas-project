export class InputHandler {
    x;
    y;

    constructor(canvas){
        
        canvas.addEventListener('click', e=>{
            this.x = e.clientX;
            this.y = e.clientY;
        })

    }
}