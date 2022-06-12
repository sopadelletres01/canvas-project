import { SceneObject } from "./sceneObject.js"

export class Scene{
    objectInfo;
    constructor(background,objectArray,id,returnTo){
        this.id = id;
        this.returnTo = returnTo;
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
            const {x,y,height,width,box,goTo,item} = obj;
            box.addEventListener("click",()=>{
                console.log("OBJECTTS",obj)
                this.handleObjectClick(this,obj)
            })
            return new SceneObject(x,y,height,width,box,goTo,item)
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

    changeDisplay(property){

    }

    removeItem(item){
        let itemToRemove = this.objects.find(obj=>obj?.item === item)
        this.objects.pop(itemToRemove)
    }
}