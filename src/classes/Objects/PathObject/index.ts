import ChangeSceneEvent from "../../Events/ChangeScene/index";
import Scene from "../../Scene/index";
import SceneObject from "../SceneObject/index";

export default class PathObject extends SceneObject {
  readonly to: string;
  constructor(x: number, y: number, width: number, height: number, to: string) {
    super(x, y, width, height);
    this.to = to;
  }

  setup(): void {
    this.htmlElement.style.backgroundColor = "red";
    this.htmlElement.style.position = "absolute";
    this.htmlElement.style.cursor = "pointer"
    this.htmlElement.style.right = `${this.x}%`;
    this.htmlElement.style.top = `${this.y}%`;
    this.htmlElement.style.width = `${this.width}vw`;
    this.htmlElement.style.height = `${this.height}vh`;
    this.htmlElement.addEventListener("click", (e) => {
      e.preventDefault();
      window.dispatchEvent(new ChangeSceneEvent(this.to));
    });
  }
}
