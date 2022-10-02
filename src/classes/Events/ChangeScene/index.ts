
export default class ChangeSceneEvent extends Event {
    sceneRef:string;
    constructor(sceneRef:string) {
        super("sceneChange",{ cancelable: true })
        this.sceneRef = sceneRef
    }
}