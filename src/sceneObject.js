import { config } from "./config.js";

export class SceneObject{
    constructor(x,y,height,width,box,goTo,item,requiredItem,audio){
        this.debugMode = config.debugMode;
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.box = box;
        this.goTo = goTo;
        this.item = item;
        this.requiredItem = requiredItem;
        this.audio = audio;
        this.updateStyles();
    }

    updateStyles(){

        Object.assign(this.box.style,{
            cursor: "pointer",
            zIndex: "2",
            height: this.height+"px",
            width: this.width+"px",
            position: "absolute",
            background: this.debugMode ? "red" : "transparent",
            left: this.x+"px",
            top: this.y+"px"
         })
        
    }

    

    generateImage(src) {
        let img = new Image()
        img.src = src
        return img;
      }
}