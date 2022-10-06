import ActionEvent from "../../Events/Action";
import SceneObject from "../SceneObject/index";
import "./index.css";
export default class ActionObject extends SceneObject {
  readonly condition: string;
  readonly id: string;
  constructor(
    x: number,
    y: number,
    width: number,
    height: number,
    condition: string,
    id: string
  ) {
    super(x, y, width, height);
    this.condition = condition;
    this.id = id;
  }

  setup(): void {
    //Styles
    this.htmlElement.style.position = "absolute";
    this.htmlElement.style.cursor = "pointer";
    this.htmlElement.style.right = `${this.x}%`;
    this.htmlElement.style.top = `${this.y}%`;
    this.htmlElement.style.width = `${this.width}vw`;
    this.htmlElement.style.height = `${this.height}vh`;

    this.htmlElement.className = "pathObject"; //actionObject

    this.htmlElement.addEventListener("click", (e) => {
      e.preventDefault();
      //Event dispatch
      window.dispatchEvent(
        new ActionEvent({
          condition: this.condition,
          id: this.id,
        })
      );
    });
  }
}
