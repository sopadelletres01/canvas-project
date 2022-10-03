
export default class PickItemEvent extends Event {
    itemRef:string;
    constructor(itemRef:string) {
        super("itemPick",{ cancelable: true })
        this.itemRef = itemRef
    }
}