import { InputHandler } from "../input.js";
import { Player } from "./player.js";
import { Scene } from "./scene.js";
//Importamos array de escenas
import { arrayDeEscenas } from "./data.js";
import { Key } from "./key.js";
import { Countdown } from "./countdown.js";
import { Message } from "./writer.js";
import { config } from "./config.js";
import { Hint } from "./hint.js";

const a = `Es de noche y estabas de vuelta de tu largo viaje. 
Tu coche se ha quedado sin combustible y no hay ninguna gasolinera cerca.
Hay una fuente de luz cerca de ti, te fijas y parece una antigua mansión.
 Parece que hay gente dentro, puede que tengan combustible...`

const message = `Tras mucho meditarlo sigues dudando de porque estas aqui, 
pero te has decidido a hacer caso a la nota que encontraste en el piso de tu mejor 
amigo desaparecido en la que constaba esta direccion como su ultima ubicación.
La principal razón de tu incertidumbre era la descripcion de la mansion que tu amigo mencionaba en la nota:
 `
export class Game {
    canvas;
    ctx;
    player;
    width;
    height;
    input;
    currentScene;
    returnButton;
    timer;
    constructor(canvas,ctx){
      this.player = new Player(this)
      this.canvas = canvas;
      this.width = canvas.width;
      this.height = canvas.height;
      this.ctx = ctx;
      this.input = new InputHandler(canvas)
      this.gameOver = false;
      this.gameWin = false;
      this.secondsToEnd = config.quickGame ? 5 : 60 * 5
      //Array de escenas (Objetos) con su background y objetos
      //Current scene sera la escena actual (con el boton de return volvemos a la escena donde estabamos anteriormente)
      this.key = new Key()
      this.mainAudio = document.getElementById("main")
      this.message = new Message(message)
      this.hint = new Hint()
      this.introScene()
    }

    introScene(){
      this.message.container.addEventListener("click",()=>{
        this.playAudio(this.mainAudio)
        this.message.handleClose()
        this.init()
      })
      this.ctx.drawImage(document.getElementById("forest"),0,0,this.width,this.height)
      this.message.show()
    }

    init(){
      
      this.scenes = this.loadScenes(arrayDeEscenas);
      this.currentScene = this.scenes[0]
      this.background = this.currentScene.background || document.getElementById("hall") || this.generateImage(this.IMAGE_SRC);
      this.setupUI()
      this.hint.show(this.currentScene.hint,this.currentScene)
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
      if ( info ){
        if ( info.goTo ){
          let scene = this.scenes.find(scn => scn.id == info.goTo)
          this.handleSceneChange(this.currentScene,scene,()=>{
            if(scene.audio) this.mainAudio.pause()
            this.currentScene = scene
          })
          //Una vez cambiamos de escena, antes de renderizarla, comprobamos que la condicion se cumpla
          //Si no se cumple, volvemos a la escena anterior
          let newInfo = this.currentScene.getSceneInfo()
          if ( newInfo?.condition && !this.checkSceneCondition(newInfo?.condition)){
            this.handleSceneChange(this.currentScene,previousScene,()=>{
              this.currentScene = previousScene
            })
          }
          else if ( this.checkSceneCondition(newInfo?.condition) ){
            //Condicion victoria
            if (newInfo.condition === "goldenkey") {
              this.gameWin = true;
              this.stop()
            }
            this.handleSceneChange(this.currentScene,this.currentScene,()=>{
            })
          }
        }
        if ( info.item ){
          this.handleSceneChange(this.currentScene,this.currentScene,()=>{
            this.player.addItem(info.item)
            this.currentScene.removeItem(info.item)
          })
        }
        if ( info?.requiredItem && this.player.checkItem(info.requiredItem) ){
          this.player.removeItem(info.item)
          this.currentScene.addItem(info.requiredItem)
          this.currentScene.stopAudio()
          if ( info?.audio ) {
              console.log(this.currentScene)
              this.currentScene.clearSceneInfo()
              info.audio.play()
          }
          this.setKeyScene()

        }
      }
      //this.player.update(this.input)
    }

    playAudio(audio){
      if(config.audioPlay) audio.play()
    }

    setKeyScene(){
      let scene = this.scenes.find(scn=>scn.id === this.key.scene)
      scene.setKey(this.key)
    }

    checkSceneCondition(condition){
      let check = this.player.inventory.includes(condition)
      return check
    }

    generateImage(src) {
      let img = new Image()
      img.src = src
      return img;
    }

    loadScenes(array){
      return array.map(scene => {
        const {background,objectArray,id,returnTo,condition,audio,hint} = scene;
        return new Scene(background,objectArray,id,returnTo,condition,audio,hint)
      });
    }

    setupUI(){
      let seconds = this.secondsToEnd
      this.returnButton = document.getElementById("return")
      this.restartButton = document.getElementById("restart")
      this.timer = new Countdown(this.stop.bind(this),seconds || 60)
      this.returnButton.style.display = "block"
      this.timer.container.style.display = "block"
      this.restartButton.addEventListener("click",()=>{
        window.location.reload()
      })
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
      this.playAudio(this.mainAudio)
      console.log("onscreen1",this.hint.onScreen)
      this.hint.hide()
      prevScene.clearSceneInfo()
      action()
      nextScene.clearSceneInfo()
      this.hint.show(nextScene?.hint,nextScene)
      console.log("onscreen2",this.hint.onScreen)

    }

    checkEnd(){
      return this.gameOver || this.gameWin;
    }

    win(){

      alert("Te sacaste la vergota mirey")
    }

    lose(){
      this.mainAudio.pause()
      this.currentScene.background = document.getElementById("lose")
      this.mainAudio = document.getElementById("jumpscare2audio")
      this.mainAudio.play()
      this.returnButton.style.display = "none"
      this.timer.container.style.display = "none"
      this.hint.container.style.display = "none"
      console.log(this.currentScene)
      this.currentScene.objects.forEach(element => {
        element.box.remove()
      });
      this.restartButton.style.display = "block"
      this.gameOver = true
    }

    stop(){
      if ( this.gameWin ) {
        this.win()
        return
      }
      this.lose()
    }

}