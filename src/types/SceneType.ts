import ItemType from "./ItemType";
import PathType from "./PathType";

export default interface SceneType {
    id: string,
    background: string,
    paths: PathType[],
    objects?: ItemType[],
    return?: string,
    hint?: string,
    condition?: "goldenKey" | "other"
  }