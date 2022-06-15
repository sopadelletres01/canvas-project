import { Game } from "../src/game.js";
import {config} from "./config.js"

window.addEventListener("load", () => {
  const canvas = document.querySelector("#canvas");
  const ctx = canvas.getContext("2d");
  let staticGame = config.staticGame;
  let myReq;
  
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  const game = new Game(canvas,ctx)
  
  function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    game.draw(ctx)
    game.update()
    if(!staticGame && !game.checkEnd()) requestAnimationFrame(animate)
    
  }
  game.message.container.addEventListener("click",()=>{
    animate()
  })

  window.addEventListener('resize',()=>{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    game.width = window.innerWidth;
    game.height = window.innerHeight;
  })
  
});