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
        this.destinationX = this.x;
        this.destinationY = this.y;
        this.image = this.generateImage(this.IMAGE_SRC);
        this.inventory = ["candle"]
    }

    draw(ctx){
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

    update(input){
        //Update variables
        this.destinationX = input.x || this.x;
        this.destinationY = input.y || this.y;
        //Distancia desde la posicion actual hasta la posicion deseada
        //factor de velocidad = .125
        let dx = (this.destinationX - this.x) * .125;
        var dy = (this.destinationY - this.y) * .125;
        //Hipotenusa (distancia al punto)
        let distance = Math.sqrt(dx*dx + dy*dy);
        //Capamos la distancia de movimiento a 5px
        if(distance > 5){
            dx *= 5/distance;
            dy *= 5/distance;
        }

        if ( (this.x + dx) <= (this.game.width - this.width) ) this.x += dx;
        if ( (this.y + dy) <= (this.game.height - this.height) ) this.y += dy;
    }

    generateImage(src) {
        let img = new Image()
        img.src = src
        return img;
      }
    
    addItem(item){
        this.inventory.push(item)
    }

    removeItem(item){
        this.inventory = this.inventory.filter(i=>i !== item)
    }

    checkItem(item){
        return this.inventory.includes(item)
    }
    /* borrar() {
        ctx.clearRect(this.x, this.y, this.width, this.height);
    } */
}