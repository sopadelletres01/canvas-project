import Player from "../Player/index";
import StartMenu from "../StartMenu/index";

const url = "https://img.freepik.com/free-vector/colorful-palm-silhouettes-background_23-2148541792.jpg?w=2000"

export default class Game {
  #player: Player;
  #container: HTMLElement;
  // The non-null assertion operator(!) tells the compiler that this property will be initialized somewhere but not necessarily in the constructor
  #startMenu!: StartMenu;
  constructor(container: HTMLElement) {
    this.#player = new Player("Marc");
    this.#container = container;
  }

  init(): void {
    console.log("player", this.#player);
    this.#loadStartMenu()
    
  }

  #loadStartMenu(): void {
    this.#startMenu = new StartMenu(url, this.#container);
    this.#startMenu.draw()
  }
}
