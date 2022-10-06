import ActionType from "./ActionType";
import ItemType from "./ItemType";
import PathType from "./PathType";

export default interface SceneType {
    id: string,
    background: string,
    paths: PathType[],
    actions?: ActionType[],
    items?: ItemType[],
    return?: string,
    hint?: string,
    condition?: "goldenKey" | "other"
  }