import { InputHandler } from "../input.js";
import { Player } from "./player.js";
import { SceneObject } from "./sceneObject.js";

export class Game {
    canvas;
    ctx;
    player;
    staticGame;
    width;
    height;
    input;
    IMAGE_SRC = "https://res.cloudinary.com/dhdbik42m/image/upload/v1654858143/Sprites/51d341b5a6001e5dea2a0ba08b175b60_jf8nfy.jpg"
    constructor(canvas,ctx){
      this.player = new Player(this)
      this.canvas = canvas;
      this.width = canvas.width;
      this.height = canvas.height;
      this.ctx = ctx;
      this.input = new InputHandler()
      this.image = document.getElementById("img")
      this.background = this.generateImage(this.IMAGE_SRC);
      this.sceneImages = this.generateSceneImages("posible array de objetos con sus propiedades y posicionamiento")
    }

    draw(ctx){
      let background = this.background || this.image
      ctx.drawImage(background,0,0,this.width,this.height);   
      this.player.draw(ctx)
    }

    update(){
      console.log(this.input)
      this.player.update(this.input)
    }

    generateImage(src) {
      let img = new Image()
      img.src = src
      console.dir(img)
      return img;
    }

    generateSceneImages(array){
      //array
      let door = document.getElementById("door");
      console.log("DOOR",door)
      let obj = new SceneObject(this.width/2,this.height/2,100,100,door)
      
    }
  }