import ItemType from "../../types/ItemType";
import PathType from "../../types/PathType";
import PathObject from "../Objects/PathObject/index";

export default class Scene {
  //Readonly so we doesn't have to create a getter for each property
  readonly id: string;
  readonly background: string;
  readonly paths: PathType[];
  readonly items?: ItemType[];
  readonly pathObjects: PathObject[];
  constructor(
    id: string,
    background: string,
    paths: PathType[],
    items?: ItemType[]
  ) {
    this.id = id;
    this.background = background;
    this.paths = paths;
    this.items = items;
    this.pathObjects = [];
  }

  setup(): void {
    this.paths.forEach((path) => {
      const pathObject = new PathObject(path.x, path.y,path.width, path.height, path.to)
      pathObject.setup()
      this.pathObjects.push(pathObject);
    });
  }

  clear(){
    this.pathObjects.forEach(obj=>{
      obj.htmlElement.remove()

    })
  }

  draw(sceneContainer: HTMLElement): void {
    //Test
    this.pathObjects.forEach((obj)=>{
      
      sceneContainer.appendChild(obj.htmlElement);
    })


    //Test
  }
}
