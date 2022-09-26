import "./index.css";

export default class StartMenu {
  #backgroundElement: HTMLImageElement;
  #container: HTMLElement;
  #url: string;
  constructor(url: string, container: HTMLElement) {
    this.#backgroundElement = document.createElement("img");
    this.#container = container;
    this.#url = url;
  }

  draw(): void {
    this.#backgroundElement.src = this.#url;
    this.#backgroundElement.className = "startBackground";
    this.#container.appendChild(this.#backgroundElement);
  }

  clear(): void {}
}
