export default class Scene {
  //Readonly so we doesn't have to create a getter for each property
  readonly name: string;
  readonly background: string;
  constructor(name: string, background: string) {
    this.name = name;
    this.background = background;
  }

  draw(sceneContainer:HTMLElement):void{

  }
}
