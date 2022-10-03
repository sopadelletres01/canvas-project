import ChangeSceneEvent from "../Events/ChangeScene/index";
import PickItemEvent from "../Events/PickItem";
import HintBox from "../HintBox";
import Player from "../Player/index";
import Scene from "../Scene/index";
import "./index.css";

export default class SceneHandler {
  #player: Player;
  #currentScene: Scene;
  #prevScene: Scene;
  #hintBox: HintBox;
  #scenes: Array<Scene>;
  #mainContainer: HTMLElement;
  #sceneContainer: HTMLElement;
  constructor(mainContainer: HTMLElement, player: Player, scenes: Scene[]) {
    this.#scenes = scenes;
    this.#currentScene = scenes[0];
    this.#prevScene = scenes[0];
    this.#player = player;
    this.#hintBox = new HintBox();
    this.#mainContainer = mainContainer;
    this.#sceneContainer = document.createElement("div");
  }

  start(): void {
    this.setup();
    this.#renderCurrentScene();
  }

  checkHintShouldBeDisplayed(): boolean {
    return this.#currentScene.hintShouldBeDisplayed;
  }

  setup(): void {
    this.#sceneContainer.className = "sceneHandlerContainer";

    //Setup hintBox
    this.#hintBox.setup(this.#sceneContainer);
    this.#hintBox.setHint(this.#currentScene.hint);

    //Scene Change Custom Event
    window.addEventListener("sceneChange", ((e: ChangeSceneEvent) => {
      //Arrow functions doesn't create new "this"
      console.log("changeScene", e);
      const newScene =
        this.#scenes.find((scene) => scene.id === e.sceneRef) ||
        this.#currentScene;
      this.#changeScene(newScene);
    }) as EventListener);

    //PickUp Item Custom Event
    window.addEventListener("itemPick", ((e: PickItemEvent) => {
      //Arrow functions doesn't create new "this"
      console.log("itemPicked", e);
      this.#handleItemPick(e.itemRef);
    }) as EventListener);
  }

  #handleItemPick(item: string): void {
    //Clear DOM Element
    this.#currentScene.removeItem(item, this.#sceneContainer);
    this.#player.addItem(item);
  }

  #changeScene(scene: Scene): void {
    //Previous scene will be the currentScene (before the change)
    this.#prevScene = this.#currentScene;
    //Current scene is the new scene we are changing
    this.#currentScene = scene;
    //Clear the previous hint
    this.#hintBox.clear();
    //Clear the previous scene
    this.#prevScene.clear(this.#sceneContainer);
    //Render the current scene
    this.#renderCurrentScene();
  }

  #renderCurrentScene(): void {
    const bg = `url(${this.#currentScene?.background})`;

    this.#sceneContainer.style.setProperty("background-image", bg);
    this.#sceneContainer.style.setProperty("background-repeat", "no-repeat");

    //Draw current scene
    this.#currentScene.draw(this.#sceneContainer);

    //Show hint
    if (this.checkHintShouldBeDisplayed()) {
      this.#hintBox.draw();
    }

    this.#mainContainer.appendChild(this.#sceneContainer);
  }
}
