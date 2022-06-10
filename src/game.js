import { InputHandler } from "../input.js";
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
      this.staticGame = false;
      this.canvas = canvas;
      this.width = canvas.width;
      this.height = canvas.height;
      this.ctx = ctx;
      this.input = new InputHandler()

    }

    draw(ctx){
      this.player.draw(ctx)
    }

    update(){
      this.player.update(this.input)
    }

  }