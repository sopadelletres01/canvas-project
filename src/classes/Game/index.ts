import GameStartEvent from "../Events/GameStart/index";
import Player from "../Player/index";
import StartMenu from "../StartMenu/index";

const url = "https://img.freepik.com/free-vector/colorful-palm-silhouettes-background_23-2148541792.jpg?w=2000"

export default class Game {
  #player: Player;
  #mainContainer: HTMLElement;
  // The non-null assertion operator(!) tells the compiler that this property will be initialized somewhere but not necessarily in the constructor
  #startMenu!: StartMenu;
  constructor(mainContainer: HTMLElement) {
    this.#player = new Player("Marc");
    this.#mainContainer = mainContainer;
  }

  init(): void {
    console.log("player", this.#player);
    //Load the initial menu/intro
    this.#loadStartMenu()

    //Catches de event that is fired with the onClick event of the startButton
    window.addEventListener("gameStarted",(e:GameStartEvent)=>{
      e.preventDefault()
      this.#startMenu.clear()
    })
  }

  #loadStartMenu(): void {
    //Loads menu and draws the HTML elements

    this.#startMenu = new StartMenu(url, "Test Message" ,this.#mainContainer);
    this.#startMenu.draw()
  }
}
