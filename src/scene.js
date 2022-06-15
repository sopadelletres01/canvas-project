import { SceneObject } from "./sceneObject.js"

export class Scene{
    objectInfo;
    constructor(background,objectArray,id,returnTo,condition,audio){
        this.id = id;
        this.audio = audio;
        this.returnTo = returnTo;
        this.background = background;
        this.condition = condition;
        this.objects = this.generateSceneImages(objectArray)
    }

    handleObjectClick(scene,obj){
        this.objectInfo = obj;
    }

    generateSceneImages(objectArray){
        //se ejecuta siempre 
        return objectArray.map(obj => {
            const {x,y,height,width,box,goTo,item,requiredItem} = obj;
            box.addEventListener("click",()=>{
                this.handleObjectClick(this,obj)
            })
            return new SceneObject(x,y,height,width,box,goTo,item,requiredItem)
        });
    }

    getSceneInfo(){
        return this.condition ? {...this.objectInfo,condition:this.condition} : this.objectInfo
    }

    draw(){
        if(this.audio) this.audio.play()

        this.objects.forEach(obj => {
            obj.box.style.display = "block"
        });
    }

    clearSceneInfo(){
        if(this.audio) {
            this.audio.currentTime = 0
            this.audio.pause()
        }
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
        //let itemToFind = this.objects.find(obj=>obj?.requiredItem === item)
        this.objectInfo.box = document.getElementById(item)
        this.objectInfo.box.style.display="block"
        this.objects.push(this.objectInfo)
    }
}