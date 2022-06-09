import { RigidBody } from "./rigidBody.js";

export class Player extends RigidBody{
    MAX_SPEED = 10;
    IMAGE_SRC = "https://media.moddb.com/images/games/1/45/44413/mega-man-sprite_c.1.png"
    constructor(game){
        super(0, game.height - 200, 200, 200, game)
        this.image = this.generateImage(this.IMAGE_SRC);
    }

    draw(ctx){
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

    update(input){
        //Update variables
        console.log(input)
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