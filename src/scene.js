import { SceneObject } from "./sceneObject.js"

export class Scene{
    objectInfo;
    constructor(background,objectArray){
        this.background = background;
        this.objects = this.generateSceneImages(objectArray)
    }

    handleObjectClick(e){
        alert("Entras a la mansión sigilosamente...")
        //this.background = document.getElementById("statue") || this.generateImage("https://res.cloudinary.com/dhdbik42m/image/upload/v1654857011/Sprites/casa-miedo-escaleras-fantasmas-puertas-calabazas-ilustracion-vector-dibujos-animados-halloween_273525-49_dokndu.jpg")
        this.objectInfo = e;
    }

    generateSceneImages(objectArray){
        return objectArray.map(obj => {
            const {x,y,height,width,box} = obj;
            box.addEventListener("click",this.handleObjectClick.bind(this))
            return new SceneObject(x,y,height,width,box)
        });
    }

    getSceneInfo(){
        return this.objectInfo;
    }
}