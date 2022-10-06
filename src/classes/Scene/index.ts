import ActionType from "../../types/ActionType";
import ItemType from "../../types/ItemType";
import PathType from "../../types/PathType";
import ActionObject from "../Objects/ActionObject";
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
  readonly actions: ActionType[];
  #pathObjects: PathObject[];
  #itemObjects: ItemObject[];
  #actionObjects: ActionObject[];
  constructor(
    id: string,
    background: string,
    paths: PathType[],
    items: ItemType[],
    actions: ActionType[],
    hint: string
  ) {
    this.id = id;
    this.background = background;
    this.paths = paths;
    this.items = items;
    this.actions = actions;
    this.hint = hint || "";
    this.hintShouldBeDisplayed = Boolean(hint);
    this.#pathObjects = this.#generatePathObjects();
    this.#itemObjects = this.#generateItemObjects();
    this.#actionObjects = this.#generateActionObjects();
  }

  removeItem(item: string, sceneContainer: HTMLElement): void {
    const itemObj = this.#itemObjects?.find((i) => i.item === item);

    if (!itemObj) return;

    //Clear DOM Element
    sceneContainer.removeChild(itemObj.htmlElement);

    const index = this.#itemObjects?.indexOf(itemObj);

    const clone: ItemObject[] = JSON.parse(JSON.stringify(this.#itemObjects));
    clone.splice(index, 1);

    this.#itemObjects = clone;
  }

  #generateActionObjects(): ActionObject[] {
    if (this.checkArrayEmpty(this.actions)) return [];

    const newActions: ActionObject[] = [];
    this.actions.forEach((action) => {
      const actionObject = new ActionObject(
        action.x,
        action.y,
        action.width,
        action.height,
        action.condition,
        action.id
      );
      actionObject.setup();
      newActions.push(actionObject);
    });
    return newActions;
  }

  #generatePathObjects(): PathObject[] {
    if (this.checkArrayEmpty(this.paths)) return [];

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

  #generateItemObjects(): ItemObject[] {
    if (this.checkArrayEmpty(this.items)) return [];

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

  checkArrayEmpty(array: Array<any>): boolean {
    return !array || array.length <= 0;
  }

  clear(sceneContainer: HTMLElement) {
    this.#pathObjects.forEach((obj) => {
      obj.clear(sceneContainer);
    });
    if (this.checkArrayEmpty(this.#itemObjects)) return;
    this.#itemObjects.forEach((obj) => {
      console.log(obj);
      if (!sceneContainer.contains(obj.htmlElement)) return;
      obj.clear(sceneContainer);
    });
  }

  draw(sceneContainer: HTMLElement): void {
    this.#drawObjects(this.#pathObjects,sceneContainer)
    this.#drawObjects(this.#itemObjects,sceneContainer)
    this.#drawObjects(this.#actionObjects,sceneContainer)

  }

  #drawObjects(array:Array<ItemObject|PathObject|ActionObject>,container:HTMLElement){
    //If array is empty, return
    if (!array || array.length<=0) return;

    array.forEach((obj) => {
        container.appendChild(obj.htmlElement);
      });
    }
}

