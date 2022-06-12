import { config } from "./config.js";

export class SceneObject{
    constructor(x,y,height,width,box,goTo,item){
        this.debugMode = config.debugMode;
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.box = box;
        this.goTo = goTo;
        this.item = item;
        this.updateStyles();
    }

    updateStyles(){
        console.log("BOX",this.box)

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
        console.dir(img)
        return img;
      }
}