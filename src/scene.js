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
        console.log("OBJECTO",objectArray)
        //se ejecuta siempre 
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
        console.log("OBJETO clone",this.objectInfo)
        return this.objectInfo;
    }

    draw(){
        this.objects.forEach(obj => {
            console.log("displayB",obj)
            obj.box.style.display = "block"
        });
    }

    clearSceneInfo(){
        this.objects.forEach(obj => {
            obj.box.style.display = "none"
        });
        this.objectInfo = null;
    }
}