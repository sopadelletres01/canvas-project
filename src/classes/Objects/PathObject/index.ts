import ChangeSceneEvent from "../../Events/ChangeScene/index";
import SceneObject from "../SceneObject/index";
import "./index.css"
export default class PathObject extends SceneObject {
  readonly to: string;
  constructor(x: number, y: number, width: number, height: number, to: string) {
    super(x, y, width, height);
    this.to = to;
  }

  setup(): void {
    //Styles
    this.htmlElement.style.position = "absolute";
    this.htmlElement.style.cursor = "pointer"
    this.htmlElement.style.right = `${this.x}%`;
    this.htmlElement.style.top = `${this.y}%`;
    this.htmlElement.style.width = `${this.width}vw`;
    this.htmlElement.style.height = `${this.height}vh`;

    this.htmlElement.className = "pathObject"

    this.htmlElement.addEventListener("click", (e) => {
      e.preventDefault();
      //Event dispatch
      window.dispatchEvent(new ChangeSceneEvent(this.to));
    });
  }
}
