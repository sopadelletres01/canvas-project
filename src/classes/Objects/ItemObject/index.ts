import PickItemEvent from "../../Events/PickItem";
import SceneObject from "../SceneObject/index";
import "./index.css"
export default class ItemObject extends SceneObject {
  readonly item: string;
  readonly img: string;
  constructor(x: number, y: number, width: number, height: number, item: string, img: string) {
    super(x, y, width, height);
    this.item = item;
    this.img = img;
  }

  setup(): void {
    //Styles
    this.htmlElement.style.position = "absolute";
    this.htmlElement.style.cursor = "pointer"
    this.htmlElement.style.right = `${this.x}%`;
    this.htmlElement.style.top = `${this.y}%`;
    this.htmlElement.style.width = `${this.width}vw`;
    this.htmlElement.style.height = `${this.height}vh`;
    this.htmlElement.style.backgroundImage = `url(${this.img})`;

    this.htmlElement.className = "itemObject"

    this.htmlElement.addEventListener("click", (e) => {
      e.preventDefault();
      //Event dispatch
      window.dispatchEvent(new PickItemEvent(this.item));
    });
  }
}
