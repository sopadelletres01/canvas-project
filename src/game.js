import { InputHandler } from "../input.js";
import { Player } from "./player.js";
import { Scene } from "./scene.js";
//Importamos array de escenas
import { arrayDeEscenas } from "./data.js";

export class Game {
    canvas;
    ctx;
    player;
    width;
    height;
    input;
    currentScene;
    returnButton;
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
      this.setupReturnButton()
    }

    draw(ctx){
      let background = this.currentScene.background || this.background || this.image
      console.log("BACKGROUND",background)
      ctx.drawImage(background,0,0,this.width,this.height);   
      this.player.draw(ctx)
      this.currentScene.draw()
    }

    update(){
      //Comprobar que la info se elimine una vez que se cambia de escena (evitar bucle de cambio de escenas)
      let info = this.currentScene.getSceneInfo()
      console.log("INFO",info)
      if ( info ){
        if ( info.goTo ){
          let scene = this.scenes.find(scn => scn.id == info.goTo)
          console.log("escena",scene)
          this.handleSceneChange(this.currentScene,scene,()=>{
            this.currentScene = scene
          })
        }
        if ( info.item ){
          this.handleSceneChange(this.currentScene,this.currentScene,()=>{
            this.player.addItem(info.item)
            this.currentScene.removeItem(info.item)
          })
        }
      }
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
        const {background,objectArray,id,returnTo} = scene;
        return new Scene(background,objectArray,id,returnTo)
      });
    }

    setupReturnButton(){
      this.returnButton = document.getElementById("return")
      this.returnButton.addEventListener("click",(e)=>{
        let index = this.scenes.indexOf(this.currentScene)
        if (index <= 0) return
        
        let scene = this.scenes[index-1]

        console.log("actual",this.currentScene)
        if ( this.currentScene.returnTo ){
          scene = this.scenes.find(scn => scn.id == this.currentScene.returnTo)
        }
        this.handleSceneChange(this.currentScene,scene,()=>{
          this.currentScene = scene
        })
      })
    }

    handleSceneChange(prevScene,nextScene,action){
      prevScene.clearSceneInfo()
      action()
      nextScene.clearSceneInfo()
    }

}