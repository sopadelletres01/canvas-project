export class SceneObject{
    constructor(x,y,width,height,box){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.box = box;
        this.updateStyles();
        this.box.addEventListener("click",this.handleClick)
    }

    updateStyles(){
        console.log("BOX",this.box)

        Object.assign(this.box.style,{
            cursor: "pointer",
            zIndex: "2",
            width: "200px",
            height: "200px",
            position: "absolute",
            background: "red",
            left: "50%",
            top: "50%"
         })
        
    }

    handleClick(){
        alert("tusa")
    }

    generateImage(src) {
        let img = new Image()
        img.src = src
        console.dir(img)
        return img;
      }
}