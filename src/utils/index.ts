import Game from "../classes/Game/index";

function getElements(): [HTMLElement, HTMLElement] {
  //Main container
  const main =
    document.getElementById("main") || document.createElement("main");
  //If the element is created, add the id "main" to apply css
  if (main.id !== "main") main.id = "main";

  //Overlay
  const overlay =
    document.getElementById("overlay") || document.createElement("div");
  if (overlay.id !== "overlay") overlay.id = "overlay";

  return [main, overlay];
}

function setupGame(game: Game, overlay: HTMLElement) {
  const isPortrait = window.innerHeight > window.innerWidth;

  let gameHasStarted: boolean = false;

  //Check orientation at start
  if (isPortrait) {
    //Portrait, show message
    overlay?.style.setProperty("display", "block");
  } else {
    //Landscape, hide message, init game
    overlay?.style.setProperty("display", "none");
    game.init();
    gameHasStarted = true;
  }

  window.addEventListener("resize", (e) => {
    //Portrait mode, show even if the game is on
    if (window.innerHeight > window.innerWidth) {
      overlay?.style.setProperty("display", "block");
      return;
    }
    //Landscape mode, hide the message
    overlay?.style.setProperty("display", "none");

    //If the game haven't started yet, start it
    if (!gameHasStarted) {
      game.init();
      gameHasStarted = true;
    }
  });
}

export { getElements, setupGame };
