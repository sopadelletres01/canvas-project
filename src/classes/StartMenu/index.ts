import MessageBox from "../Message/index";
import "./index.css";

export default class StartMenu {
  #backgroundElement: HTMLImageElement;
  #sceneContainer: HTMLElement;
  #parentContainer: HTMLElement;
  #url: string;
  #messageBox: MessageBox;
  constructor(url: string, message: string, parentContainer: HTMLElement) {
    this.#parentContainer = parentContainer;
    this.#url = url;
    this.#backgroundElement = document.createElement("img");
    this.#sceneContainer = document.createElement("div");
    this.#messageBox = new MessageBox(message, this.#sceneContainer);
  }

  #setupElements(): void {
    //Setup container to position the message box
    this.#sceneContainer.className = "startContainer"

    //Setup background
    this.#backgroundElement.src = this.#url;
    this.#backgroundElement.className = "startBackground";

    //Setup messageBox content
    this.#messageBox.setup();
  }

  draw(): void {
    //Setup elements
    this.#setupElements();
    //Append background to the scene
    this.#sceneContainer.appendChild(this.#backgroundElement);
    //Append scene to the parent container
    this.#parentContainer.appendChild(this.#sceneContainer)
    this.#messageBox.draw();
  }

  clear(): void {
    this.#sceneContainer.replaceChildren();
  }
}
