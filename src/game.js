import { InputHandler } from "../input.js";
import { Player } from "./player.js";
import { Scene } from "./scene.js";
//Importamos array de escenas
import { arrayDeEscenas } from "./data.js";
import { Key } from "./key.js";
import { Countdown } from "./countdown.js";

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
      this.gameOver = false;
      this.gameWin = false;
      //Array de escenas (Objetos) con su background y objetos
      this.scenes = this.loadScenes(arrayDeEscenas);
      //Current scene sera la escena actual (con el boton de return volvemos a la escena donde estabamos anteriormente)
      this.currentScene = this.scenes[0]
      this.key = new Key()
      //this.timer = new Countdown(this.stop.bind(this),60)
      
      this.init()
    }

    init(){
      this.background = this.currentScene.background || document.getElementById("hall") || this.generateImage(this.IMAGE_SRC);
      this.setupReturnButton()
    }

    draw(ctx){
      let background = this.currentScene.background || this.background || this.image
      ctx.drawImage(background,0,0,this.width,this.height);   
      //this.player.draw(ctx)
      this.currentScene.draw()
    }

    update(){
      //Comprobar que la info se elimine una vez que se cambia de escena (evitar bucle de cambio de escenas)
      //Intentar refactorizar el if statement
      //Variable temporal para no perder la escena anterior
      let previousScene = this.currentScene;
      let info = this.currentScene.getSceneInfo()
      console.log("INFO",info)
      if ( info ){
        if ( info.goTo ){
          let scene = this.scenes.find(scn => scn.id == info.goTo)
          this.handleSceneChange(this.currentScene,scene,()=>{
            this.currentScene = scene
          })
          //Una vez cambiamos de escena, antes de renderizarla, comprobamos que la condicion se cumpla
          //Si no se cumple, volvemos a la escena anterior
          let newInfo = this.currentScene.getSceneInfo()
          if ( newInfo?.condition && !this.checkSceneCondition(newInfo?.condition)){
            this.handleSceneChange(this.currentScene,previousScene,()=>{
              this.currentScene = previousScene
            })
            console.log("CAGASTE")
          }
          else if ( this.checkSceneCondition(newInfo?.condition) ){
            //Condicion victoria
            if (newInfo.condition === "goldenkey") {
              this.gameWin = true;
              this.stop()
            }
            this.handleSceneChange(this.currentScene,this.currentScene,()=>{
              console.log("tusa, usando... ",newInfo.condition)
            })
          }
        }
        if ( info.item ){
          this.handleSceneChange(this.currentScene,this.currentScene,()=>{
            this.player.addItem(info.item)
            this.currentScene.removeItem(info.item)
          })
        }
        console.log("REQUIRED",info?.requiredItem)
        console.log("Check",this.player.checkItem(info?.requiredItem))
        if ( info?.requiredItem && this.player.checkItem(info.requiredItem) ){
          console.log("GUcci")
          console.log("infoitem",info)
          this.player.removeItem(info.item)
          this.currentScene.addItem(info.requiredItem)
          this.currentScene.clearSceneInfo()
          this.setKeyScene()

        }
      }
      //this.player.update(this.input)
    }

    setKeyScene(){
      let scene = this.scenes.find(scn=>scn.id === this.key.scene)
      scene.setKey(this.key)
      console.log("scenerand",scene)
      console.log("scenekey",this.key)
    }

    checkSceneCondition(condition){
      console.log("condition",condition)
      let check = this.player.inventory.includes(condition)
      console.log("check",check)
      return check
    }

    generateImage(src) {
      let img = new Image()
      img.src = src
      console.dir("img",img)
      return img;
    }

    loadScenes(array){
      return array.map(scene => {
        const {background,objectArray,id,returnTo,condition,audio} = scene;
        return new Scene(background,objectArray,id,returnTo,condition,audio)
      });
    }

    setupReturnButton(){
      this.returnButton = document.getElementById("return")
      this.returnButton.addEventListener("click",(e)=>{
        let index = this.scenes.indexOf(this.currentScene)
        if (index <= 0) return
        
        let scene = this.scenes[index-1]

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

    checkEnd(){
      return this.gameOver || this.gameWin;
    }

    stop(){
      if ( this.gameWin ) {
        alert("Te sacaste la vergota mirey")
        return
      }
      this.gameOver = true
      alert("Cagaste bien fuerte")
    }

}