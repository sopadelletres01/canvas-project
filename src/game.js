import { Player } from "./player.js";

export class Game {
    canvas;
    ctx;
    player;
    staticGame;
    width;
    height;
    input;
    constructor(canvas,ctx){
      this.player = new Player(this)
      this.staticGame = true;
      this.canvas = canvas;
      this.width = canvas.width;
      this.height = canvas.height;
      this.ctx = ctx;
      this.input = "mouse"
    }

    draw(){
      this.player.draw(this.ctx)
      console.log(this.player.x, this.player.y)
    }

    update(){
      this.player.update(this.input)
    }

    animate(){
      this.ctx.clearRect(0,0,this.width,this.height)
      this.draw()
      this.update()
      if (!this.staticGame) requestAnimationFrame(this.animate())
    }

    start () {
      this.canvas.style.backgroundColor = "lightgray";
      this.animate()
    }


    
  }