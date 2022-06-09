import { Game } from "../src/game.js";

window.addEventListener("load", () => {
  const canvas = document.querySelector("#canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  const game = new Game(canvas,ctx)
  game.start()
  window.addEventListener('resize',()=>{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  })

});