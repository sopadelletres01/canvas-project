import ElementType from "./ElementType";

export default interface ActionType extends ElementType{
    condition:string,
    id:string
}