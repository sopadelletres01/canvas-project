import MessageBox from "../Message/index";
import "./index.css";

export default class StartMenu {
  #sceneContainer: HTMLElement;
  #parentContainer: HTMLElement;
  #url: string;
  #messageBox: MessageBox;
  constructor(url: string, message: string, parentContainer: HTMLElement) {
    this.#parentContainer = parentContainer;
    this.#url = url;
    this.#sceneContainer = document.createElement("div");
    this.#messageBox = new MessageBox(message, this.#sceneContainer);
  }

  #setupElements(): void {
    //Setup container to position the message box
    this.#sceneContainer.className = "startContainer"

    //Setup background
    const bg ='url("https://res.cloudinary.com/dcgbmo9ov/image/upload/v1664213892/EnterDarknessGallery/Backgrounds/forestmansion2_tlze3v.jpg")';
    this.#sceneContainer.style.setProperty("background-image", bg);
    this.#sceneContainer.style.setProperty("background-repeat", "no-repeat");

    //Setup messageBox content
    this.#messageBox.setup();
  }

  draw(): void {
    //Setup elements
    this.#setupElements();
    //Append scene to the parent container
    this.#parentContainer.appendChild(this.#sceneContainer)
    this.#messageBox.draw();
  }

  clear(): void {
    this.#parentContainer.replaceChildren();
  }
}
