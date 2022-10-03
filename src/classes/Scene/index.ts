import ItemType from "../../types/ItemType";
import PathType from "../../types/PathType";
import ItemObject from "../Objects/ItemObject";
import PathObject from "../Objects/PathObject/index";

export default class Scene {
  //Readonly so we doesn't have to create a getter for each property
  readonly id: string;
  readonly background: string;
  readonly hint: string;
  readonly hintShouldBeDisplayed: boolean;
  readonly paths: PathType[];
  readonly items: ItemType[];
  #pathObjects: PathObject[];
  #itemObjects: ItemObject[];
  constructor(
    id: string,
    background: string,
    paths: PathType[],
    items: ItemType[],
    hint:string
  ) {
    this.id = id;
    this.background = background;
    this.paths = paths;
    this.items = items;
    this.hint = hint || ""
    this.hintShouldBeDisplayed = Boolean(hint)
    this.#pathObjects = this.#generatePathObjects();
    this.#itemObjects = this.#generateItemObjects();
  }

  removeItem(item: string, sceneContainer:HTMLElement): void {
    const itemObj = this.#itemObjects?.find((i) => i.item === item);

    if (!itemObj) return;

    //Clear DOM Element
    sceneContainer.removeChild(itemObj.htmlElement);

    const index = this.#itemObjects?.indexOf(itemObj);

    const clone:ItemObject[] = JSON.parse(JSON.stringify(this.#itemObjects))
    clone.splice(index, 1)

    this.#itemObjects = clone
  }

  #generatePathObjects(): PathObject[] {
    const newPaths: PathObject[] = [];
    this.paths.forEach((path) => {
      const pathObject = new PathObject(
        path.x,
        path.y,
        path.width,
        path.height,
        path.to
      );
      pathObject.setup();
      newPaths.push(pathObject);
    });
    return newPaths;
  }

  checkItemArrayEmpty(array: ItemObject[] | ItemType[]): boolean {
    return !array || array.length <= 0;
  }

  #generateItemObjects(): ItemObject[] {
    if (this.checkItemArrayEmpty(this.items)) return [];
    console.log("items", this.items);
    const newItems: ItemObject[] = [];
    this.items.forEach((item) => {
      const itemObject = new ItemObject(
        item.x,
        item.y,
        item.width,
        item.height,
        item.item,
        item.img
      );
      itemObject.setup();
      newItems.push(itemObject);
    });
    console.log("newItems", { ...newItems });
    return newItems;
  }

  clear(sceneContainer: HTMLElement) {
    this.#pathObjects.forEach((obj) => {
      obj.clear(sceneContainer);
    });
    if (this.checkItemArrayEmpty(this.#itemObjects)) return;
    this.#itemObjects.forEach((obj) => {
      console.log(obj);
      if(!sceneContainer.contains(obj.htmlElement)) return
      obj.clear(sceneContainer);
    });
  }

  draw(sceneContainer: HTMLElement): void {
    this.#pathObjects.forEach((obj) => {
      sceneContainer.appendChild(obj.htmlElement);
    });

    //If array is empty, return
    if (!this.#itemObjects) return;

    this.#itemObjects.forEach((obj) => {
      sceneContainer.appendChild(obj.htmlElement);
    });
  }
}
