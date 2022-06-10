import { Game } from "../src/game.js";

window.addEventListener("load", () => {
  const canvas = document.querySelector("#canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  const game = new Game(canvas,ctx)

  function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    game.draw(ctx)
    game.update()
    requestAnimationFrame(animate)
  }
  animate()
  
  window.addEventListener('resize',()=>{
    game.width = window.innerWidth;
    game.height = window.innerHeight;
  })
  
});