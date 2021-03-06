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

const message = `Tras mucho meditarlo sigues dudando porqué estás aquí.
Finalmente te has decidido a hacer caso a la nota que encontraste en el piso de tu
amigo desaparecido.
En ella, constaba esta dirección como su última ubicación.
Ahora ya estás aquí y no hay vuelta atrás:`
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
    gameOverText;
    constructor(canvas,ctx){
      this.player = new Player(this)
      this.canvas = canvas;
      this.width = canvas.width;
      this.height = canvas.height;
      this.ctx = ctx;
      this.input = new InputHandler(canvas)
      this.gameOver = false;
      this.gameWin = false;
      this.secondsToEnd = 300
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
      this.setupKeyInScene()
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
      if(this.player.inventory.includes("letter")) {
        this.gameWin = true
        this.stop()
      }
      let previousScene = this.currentScene;
      let info = this.currentScene.getSceneInfo()
      if ( info ){
        if ( info.goTo ){
          let scene = this.scenes.find(scn => scn.id == info.goTo)
          if(scene.id === "jumpscare2") {
            console.log("scene",this.currentScene)
            setTimeout(()=>{
              this.currentScene = this.scenes[0]
              this.mainAudio.play()
            },2000)
          }

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
            /* if (newInfo.condition === "goldenkey") {
              this.gameWin = true;
              this.stop()
            } */
            let scene = this.scenes.find(scn => scn.id == info.goTo)
            this.handleSceneChange(this.currentScene,scene,()=>{
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
          this.showKeyInScene()

        }
      }
      //this.player.update(this.input)
    }

    playAudio(audio){
      if(config.audioPlay) audio.play()
    }

    setupKeyInScene(){
      let scene = this.scenes.find(scn=>scn.id === this.key.scene)
      scene.setupKey(this.key)
      scene.hint = "Hay un brillo en la columna pero no puedo alcanzar, seguramente necesite activar algo antes"
    }

    showKeyInScene(){
      let scene = this.scenes.find(scn=>scn.id === this.key.scene)
      scene.showKey(this.key)
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
      this.gameOverText = document.getElementById("gameover")
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
      this.message.editMessage(`Querido amigo, sabia que vendrias. Esto es solo el principio, has sido elegido para ser uno de los 'vigilantes'
      ellas nos ayudaran, me han contado todo sobre este mundo y sobre el 'otro'. No tengas miedo, cruza la puerta conmigo`)
      this.message.button.innerText = "Ir con tu amigo..."
      this.message.container.addEventListener("click",()=>{
        this.clearScreen()
        const video = document.getElementById("win")
        const winalert = document.getElementById("winalert")
        video.style.display = "block"
        winalert.style.display = "block"
        video.play()
      })
      this.message.show()
      
    }

    clearScreen(){
      this.mainAudio.pause()
      this.returnButton.style.display = "none"
      this.timer.container.style.display = "none"
      this.hint.container.style.display = "none"
      console.log(this.currentScene)
      this.currentScene.objects.forEach(element => {
        element.box.remove()
      });
      this.message.handleClose()
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
      this.gameOverText.style.display = "block"
      
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