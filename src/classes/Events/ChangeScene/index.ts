import Scene from "../../Scene/index";

export default class ChangeSceneEvent extends Event {
    scene:Scene;
    constructor(scene:Scene) {
        super("sceneChange",{ cancelable: true })
        this.scene = scene
    }
}