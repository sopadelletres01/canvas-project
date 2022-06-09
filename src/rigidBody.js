export class RigidBody {
    constructor(x, y, width, height, game) {
        this.game = game
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.ctx = this.game.ctx;
    }
  
    detectarColision (otroObjeto) {
      if (otroObjeto.y + otroObjeto.height < this.y) {
        return "";
      }
      if (otroObjeto.x + otroObjeto.width < this.x) {
        return "";
      }
      if (this.y + this.height < otroObjeto.y) {
        return "";
      }
      if (this.x + this.width < otroObjeto.x) {
        return "";
      }
  
      if (otroObjeto.y + otroObjeto.height === this.y) {
        return "colision-superior";
      }
  
      if (otroObjeto.x + otroObjeto.width === this.x) {
        return "colision-izquierda";
      }
  
      if (otroObjeto.x === this.x + this.width) {
        return "colision-derecha";
      }
  
      if (this.y + this.height === otroObjeto.y) {
        //Por probar
        return "colision-inferior";
      }
  
      return "colision";
    };
  
    comprobarPosicionEnCanvas() {
      if (this.x >= ctx.canvas.width - this.width) {
        return "derecha";
      }
      if (this.x <= 0) {
        return "izquierda";
      }
      if (this.y <= 0) {
        return "arriba";
      }
      if (this.y >= ctx.canvas.width - this.width) {
        return "abajo";
      }
      return "dentro";
    }
  }