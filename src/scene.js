import { SceneObject } from "./sceneObject.js"

export class Scene{
    objectInfo;
    constructor(background,objectArray,id){
        this.id = id;
        this.background = background;
        this.objects = this.generateSceneImages(objectArray)
    }

    handleObjectClick(scene,obj){
        console.log("OBJETO DE ESCENA",obj)
        this.objectInfo = obj;
    }

    generateSceneImages(objectArray){
        return objectArray.map(obj => {
            const {x,y,height,width,box,goTo} = obj;
            box.addEventListener("click",()=>{
                console.log("OBJECTTS",obj)
                this.handleObjectClick(this,obj)
            })
            return new SceneObject(x,y,height,width,box,goTo)
        });
    }

    getSceneInfo(){
        return this.objectInfo;
    }
}