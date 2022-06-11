import { config } from "./config.js";

export class SceneObject{
    constructor(x,y,width,height,box,goTo){
        this.debugMode = config.debugMode;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.box = box;
        this.goTo = goTo;
        this.updateStyles();
    }

    updateStyles(){
        console.log("BOX",this.box)

        Object.assign(this.box.style,{
            cursor: "pointer",
            zIndex: "2",
            width: this.width+"px",
            height: this.height+"px",
            position: "absolute",
            background: this.debugMode ? "red" : "transparent",
            left: this.x+"px",
            top: this.y+"px"
         })
        
    }

    

    generateImage(src) {
        let img = new Image()
        img.src = src
        console.dir(img)
        return img;
      }
}