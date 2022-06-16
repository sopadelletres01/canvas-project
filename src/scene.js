import { Hint } from "./hint.js";
import { SceneObject } from "./sceneObject.js"
//import { Message } from "./writer.js";

export class Scene{
    objectInfo;
    key;
    constructor(background,objectArray,id,returnTo,condition,audio,hint){
        this.id = id;
        this.audio = audio;
        this.hint = hint;
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
            const {x,y,height,width,box,goTo,item,requiredItem,audio} = obj;
            box.addEventListener("click",()=>{
                this.handleObjectClick(this,obj)
            })
            return new SceneObject(x,y,height,width,box,goTo,item,requiredItem,audio)
        });
    }

    getSceneInfo(){
        return this.condition ? {...this.objectInfo,condition:this.condition} : this.objectInfo
    }


    draw(){
        if(this.audio) {
            if(this.audio.id === "secret") this.audio.volume = 0.1
            this.audio.play()
        }
        this.objects.forEach(obj => {
            obj.box.style.display = "block"
        });
    }

    stopAudio(){
        this.audio.currentTime = 0
        this.audio.pause()
        this.audio = ""
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

    setupKey(keyObject){
        const {x,y,height,width,box,goTo,item,requiredItem} = keyObject;
        this.key = new SceneObject(x,y,height,width,box,goTo,item,requiredItem)
        this.objects.push(this.key)
    }

    showKey(){
        let key = this.objects.find(obj=>obj===this.key)
        key.box = document.getElementById("key")
        key.width = 90;
        key.height = 40
        key.updateStyles()
        key.box.addEventListener("click",()=>{
            this.handleObjectClick(this,{...this.key})
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