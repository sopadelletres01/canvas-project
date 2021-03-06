export class Hint{
    message;
    scene;
    timeoutId;
    constructor(){
        this.message = ""
        this.container = document.getElementById("hint")
        this.textContainer = this.container.querySelector("p")
        this.onScreen = false;
        //this.index = 0
    }


    show(message,scene){
        if(!scene.hint || !message) {
            this.hide()
            return    
        }
        this.scene = scene
        console.log("message",message)
        this.message = message
        this.container.style.display = "flex"
        this.textContainer.style.display = "block"
        this.onScreen = true
        this.write(this.message)
    }

    hide(){
        this.container.style.display = "none"
        this.innerText = ""
        this.message = ""
        this.onScreen = false
        this.clearTimeoutId()
    }

    
    clearTimeoutId(){
        window.clearTimeout(this.timeoutId)

    }

    checkScreen(){
        return this.onScreen
    }

    write(message){
        //let index = this.index ? this.index : 0;
        let textContainer = this.textContainer;
        let self = this;
        //console.log("message",message)
        (function writer(i){
            if(message.length <= i++){
            textContainer.innerText = message;
            setTimeout(function(){self.hide()},3000)
                return;
            }
            textContainer.innerText = message.substring(0,i);
            var rand = Math.floor(Math.random() * (100)) + 10;
            self.timeoutId = setTimeout(function(){writer(i);},rand);
        })(0)
        console.log("end")
    }
}