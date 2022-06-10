import { RigidBody } from "./rigidBody.js";

export class Player{
    MAX_SPEED = 10;
    IMAGE_SRC = "https://media.moddb.com/images/games/1/45/44413/mega-man-sprite_c.1.png"
    constructor(game){
        this.game = game
        this.width = 200;
        this.height = 200;
        this.x = 0;
        this.y = 100;
        this.image = this.generateImage(this.IMAGE_SRC);
    }

    draw(ctx){
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

    update(input){
        //Update variables
        console.log(this.game.width)
        console.log(this.game.height)
        console.log("X",input.destinationX)
        console.log("Y",input.destinationY)
        if ( input.destinationX <= (this.game.width - this.width) ) this.x = input.destinationX;
        else this.x = this.game.width - this.width;
        if ( input.destinationY <= (this.game.height - this.height) ) this.y = input.destinationY;
        else this.y = this.game.height - this.height;

        
    }

    generateImage(src) {
        let img = new Image()
        img.src = src
        console.dir(img)
        return img;
      }
    
    /* borrar() {
        ctx.clearRect(this.x, this.y, this.width, this.height);
    } */
}