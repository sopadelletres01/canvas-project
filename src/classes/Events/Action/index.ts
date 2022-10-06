import ActionType from "../../../types/ActionType";


type Action ={
    id:string;
    condition:string;
}
export default class ActionEvent extends Event {
    action:Action;
    constructor(action:Action) {
        super("action",{ cancelable: true })
        this.action = action
    }
}