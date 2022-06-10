export class InputHandler {
    destinationX;
    destinationY;

    constructor(){
        
        window.addEventListener('click', e=>{
            this.destinationX = e.clientX;
            this.destinationY = e.clientY;
            console.log(this)
           
        })

    }
}