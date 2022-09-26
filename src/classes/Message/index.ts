import GameStartEvent from "../Events/GameStart/index";
import "./index.css";

export default class MessageBox {
  #message: string;
  #container: HTMLElement;
  #messageContainer: HTMLElement;
  #messageContent: HTMLParagraphElement;
  #button: HTMLButtonElement;

  constructor(message: string, container: HTMLElement) {
    //Init every HTML element
    this.#message = message;
    this.#container = container;
    this.#messageContainer = document.createElement("div");
    this.#messageContent = document.createElement("p");
    this.#button = document.createElement("button");
  }

  setup(): void {
    //Message paragraph
    this.#messageContent.className = "startMessageContent";
    this.#messageContent.innerHTML = this.#message;

    //Message container
    this.#messageContainer.className = "startMessageContainer";

    //Message button
    this.#button.className = "startButton";
    this.#button.innerHTML = "Enter the Darkness";

    //Event listener to start the game
    this.#button.addEventListener("click", () => {
      window.dispatchEvent(new GameStartEvent());
    });
  }

  draw(): void {
    //Append all elements to the messageContainer
    this.#messageContainer.appendChild(this.#messageContent);
    this.#messageContainer.appendChild(this.#button);

    //Append all elements to the container
    this.#container.appendChild(this.#messageContainer);
  }
}
