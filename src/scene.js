import { SceneObject } from "./sceneObject.js"

export class Scene{
    objectInfo;
    constructor(background,objectArray,id,returnTo,condition){
        this.id = id;
        this.returnTo = returnTo;
        this.background = background;
        this.condition = condition;
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
            const {x,y,height,width,box,goTo,item,requiredItem} = obj;
            box.addEventListener("click",()=>{
                console.log("OBJECTTS",obj)
                this.handleObjectClick(this,obj)
            })
            return new SceneObject(x,y,height,width,box,goTo,item,requiredItem)
        });
    }

    getSceneInfo(){
        console.log("OBJETO clone",this.objectInfo) 
        return this.condition ? {...this.objectInfo,condition:this.condition} : this.objectInfo
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

    setKey(keyObject){
        const {x,y,height,width,box,goTo,item,requiredItem} = keyObject;
        this.objects.push(new SceneObject(x,y,height,width,box,goTo,item,requiredItem))
        box.addEventListener("click",()=>{
            this.handleObjectClick(this,{...keyObject})
        })
    }

    removeItem(item){
        let itemToRemove = this.objects.find(obj=>obj?.item === item)
        this.objects.pop(itemToRemove)
    }

    addItem(item){
        console.log("BOOX",this.objectInfo)
        //let itemToFind = this.objects.find(obj=>obj?.requiredItem === item)
        this.objectInfo.box = document.getElementById(item)
        this.objectInfo.box.style.display="block"
        this.objects.push(this.objectInfo)
    }
}