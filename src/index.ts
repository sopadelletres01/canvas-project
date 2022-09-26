import Game from "./classes/Game/index"

window.addEventListener("load", () => {
  const main = document.getElementById("main") || new HTMLElement();

  const game = new Game(main);

  game.init();
});
