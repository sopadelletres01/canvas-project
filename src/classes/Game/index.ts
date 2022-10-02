import GameStartEvent from "../Events/GameStart/index";
import Player from "../Player/index";
import SceneHandler from "../SceneHandler/index";
import StartMenu from "../StartMenu/index";
import {scenes} from "../../data/data.json"
import Scene from "../Scene/index";
import SceneType from "../../types/SceneType";

const url = "https://img.freepik.com/free-vector/colorful-palm-silhouettes-background_23-2148541792.jpg?w=2000"


export default class Game {
  #player: Player;
  #mainContainer: HTMLElement;
  #sceneHandler: SceneHandler;
  // The non-null assertion operator(!) tells the compiler that this property will be initialized somewhere but not necessarily in the constructor
  #startMenu!: StartMenu;
  constructor(mainContainer: HTMLElement) {
    this.#player = new Player("Marc");
    this.#mainContainer = mainContainer;
    this.#sceneHandler = new SceneHandler(mainContainer,this.#player,this.#createScenes());
  }


  #createScenes():Scene[]{
    return scenes.map((scene:SceneType)=>{
      return new Scene(scene.id,scene.background,scene.paths)
    })
  }

  init(): void {
    console.log("player", this.#player);
    console.log("data", scenes);
    //Load the initial menu/intro
    this.#loadStartMenu()

    //Catches de event that is fired with the onClick event of the startButton
    window.addEventListener("gameStart",(e:GameStartEvent)=>{
      //Arrow functions doesn't create new "this"
      e.preventDefault()
      this.#startMenu.clear()

      //Start game
      this.#start();
    })

  }

  #loadStartMenu(): void {
    //Loads menu and draws the HTML elements

    this.#startMenu = new StartMenu(url, "Test Message" ,this.#mainContainer);
    this.#startMenu.draw()
  }

  #start():void{
    this.#sceneHandler.start()
  }
}
