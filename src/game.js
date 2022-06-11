import { InputHandler } from "../input.js";
import { Player } from "./player.js";
import { Scene } from "./scene.js";
//Importamos array de escenas
const arrayDeEscenas = [
  {
    id: "hall",
    background : document.getElementById("hall"),
    objectArray : [
      {
        x : 200,
        y : 300,
        height : 100,
        width : 100,
        box : document.getElementById("door"),
      }
    ]
  },
  {
    id:"statue",
    background : document.getElementById("statue"),
    objectArray : [
      {
        x : 400,
        y : 600,
        height : 100,
        width : 100,
        box : document.getElementById("door2"),
      }
    ]
  }
]

export class Game {
    canvas;
    ctx;
    player;
    width;
    height;
    input;
    currentScene;
    constructor(canvas,ctx){
      this.player = new Player(this)
      this.canvas = canvas;
      this.width = canvas.width;
      this.height = canvas.height;
      this.ctx = ctx;
      this.input = new InputHandler(canvas)
      //Array de escenas (Objetos) con su background y objetos
      this.scenes = this.loadScenes(arrayDeEscenas);
      //Current scene sera la escena actual (con el boton de return volvemos a la escena donde estabamos anteriormente)
      this.currentScene = this.scenes[0]
      this.background = this.currentScene.background || document.getElementById("hall") || this.generateImage(this.IMAGE_SRC);
    }

    draw(ctx){
      let background = this.currentScene.background || this.background || this.image
      ctx.drawImage(background,0,0,this.width,this.height);   
      this.player.draw(ctx)
    }

    update(){
      let info = this.currentScene.getSceneInfo()
      console.log(info)
      this.player.update(this.input)
    }

    generateImage(src) {
      let img = new Image()
      img.src = src
      console.dir("img",img)
      return img;
    }

    loadScenes(array){
      return array.map(scene => {
        const {background,objectArray} = scene;
        return new Scene(background,objectArray)
      });
    }

}