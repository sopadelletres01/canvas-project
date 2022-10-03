import ChangeSceneEvent from "../Events/ChangeScene/index";
import Player from "../Player/index";
import Scene from "../Scene/index";
import "./index.css";

export default class SceneHandler {
  #player: Player;
  #currentScene: Scene;
  #prevScene: Scene;
  #scenes: Array<Scene>;
  #mainContainer: HTMLElement;
  #sceneContainer: HTMLElement;
  constructor(
    mainContainer: HTMLElement,
    player: Player,
    scenes: Scene[]
  ) {
    this.#scenes = scenes;
    this.#currentScene = scenes[0]
    this.#prevScene = scenes[0]
    this.#player = player;
    this.#mainContainer = mainContainer;
    this.#sceneContainer = document.createElement("div");
    this.#player = player;
  }


  start(): void {
    this.setup();
    this.#renderCurrentScene();
  }

  setup(): void {
    this.#sceneContainer.className = "sceneHandlerContainer";

    //Custom event
    window.addEventListener("sceneChange", ((e: ChangeSceneEvent) => {
      //Arrow functions doesn't create new "this"
      console.log("changeScene", e);
      const newScene = this.#scenes.find(scene=>scene.id === e.sceneRef) || this.#currentScene
      this.#changeScene(newScene);
    }) as EventListener);
  }

  #changeScene(scene: Scene): void {
    //Previous scene will be the currentScene (before the change)
    this.#prevScene = this.#currentScene;
    console.log("currentScene",this.#currentScene);
    console.log("prevScene",this.#prevScene);
    //Current scene is the new scene we are changing 
    this.#currentScene = scene;
    console.log("currentSceneAfter",this.#currentScene);
    //Clear the previous scene
    this.#prevScene.clear(this.#sceneContainer)
    //Render the current scene
    this.#renderCurrentScene();
  }

  #renderCurrentScene(): void {
    const bg =
      `url(${this.#currentScene?.background})` ||
      'url("https://res.cloudinary.com/dcgbmo9ov/image/upload/v1664213751/EnterDarknessGallery/Scenes/hall5_m4cgzc.jpg")';

    this.#sceneContainer.style.setProperty("background-image", bg);
    this.#sceneContainer.style.setProperty("background-repeat", "no-repeat");

    //Setup current scene
    this.#currentScene.setup()
    //Draw current scene
    this.#currentScene.draw(this.#sceneContainer)

    this.#mainContainer.appendChild(this.#sceneContainer);
  }
}
