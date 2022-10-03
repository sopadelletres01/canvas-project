import ItemType from "../../types/ItemType";
import PathType from "../../types/PathType";
import PathObject from "../Objects/PathObject/index";

export default class Scene {
  //Readonly so we doesn't have to create a getter for each property
  readonly id: string;
  readonly background: string;
  readonly paths: PathType[];
  readonly items?: ItemType[];
  #pathObjects: PathObject[];
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
    this.#pathObjects = [];
  }


  #setPathObjects(pathObjects:PathObject[] | []):void {
    this.#pathObjects = pathObjects

  }

  setup(): void {
    const newPaths: PathObject[] = []
    this.paths.forEach((path) => {
      const pathObject = new PathObject(path.x, path.y,path.width, path.height, path.to)
      pathObject.setup()
      newPaths.push(pathObject);
    });
    this.#setPathObjects(newPaths);
  }

  clear(sceneContainer:HTMLElement){
    this.#pathObjects.forEach(obj=>{
      obj.clear(sceneContainer)
      
    })
    
    //Clear the pathObject array after the clear of the DOM:
    this.#setPathObjects([]);

  }

  draw(sceneContainer: HTMLElement): void {
    //Test
    this.#pathObjects.forEach((obj)=>{
      
      sceneContainer.appendChild(obj.htmlElement);
    })


    //Test
  }
}
