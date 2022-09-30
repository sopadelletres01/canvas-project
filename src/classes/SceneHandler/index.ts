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
    scenes?: Array<Scene>
  ) {
    this.#player = player;
    this.#scenes = scenes || [];
    this.#mainContainer = mainContainer;
    this.#sceneContainer = document.createElement("div");
    this.#currentScene = this.#scenes[0];
    this.#prevScene = this.#scenes[0];
    this.#player = player;
  }

  start(): void {
    this.setup();
    this.#renderCurrentScene();
  }

  setup(): void {
    this.#sceneContainer.className = "sceneHandlerContainer";

    window.addEventListener("sceneChange", ((e: ChangeSceneEvent) => {
      //Arrow functions doesn't create new "this"
      this.#changeScene(e.scene);
    }) as EventListener);
  }

  #changeScene(scene: Scene): void {
    this.#prevScene = this.#currentScene;
    this.#currentScene = scene;
    this.#renderCurrentScene();
  }

  #renderCurrentScene(): void {
    console.log(this.#mainContainer);
    const bg =
      this.#currentScene?.background ||
      'url("https://res.cloudinary.com/dcgbmo9ov/image/upload/v1664213751/EnterDarknessGallery/Scenes/hall5_m4cgzc.jpg")';

    this.#sceneContainer.style.setProperty("background-image", bg);
    this.#sceneContainer.style.setProperty("background-repeat", "no-repeat");

    //Test

    // const test = document.createElement("div")
    // test.innerHTML="tusa"
    // test.style.color = "red"
    // test.className="test"
    // this.#sceneContainer.appendChild(test)

    //Test

    this.#mainContainer.appendChild(this.#sceneContainer);
    console.log("Render");
  }
}
