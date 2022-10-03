
export default abstract class SceneObject {
  protected x: number;
  protected y: number;
  protected width: number;
  protected height: number;
  readonly htmlElement: HTMLElement;
  constructor(x: number, y: number, width: number, height: number) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.htmlElement = document.createElement("div");
  }

  abstract setup(): void;

  draw(container: HTMLElement): void {
    container.appendChild(this.htmlElement);
  }

  clear(container:HTMLElement):void{
    container.removeChild(this.htmlElement);
  }
}
