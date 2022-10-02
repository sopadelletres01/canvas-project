import Game from "./classes/Game/index";
import { getElements, setupGame } from "./utils/index";

window.addEventListener("load", () => {
  //Get main and overlay elements from HTML
  const [main,overlay] = getElements()

  //Create the game
  let game: Game = new Game(main);

  //Setup the game and initialize it
  setupGame(game, overlay);
});

