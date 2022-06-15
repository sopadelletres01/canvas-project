export class Hint{
    constructor(message){
        this.message = message
        this.container = document.getElementById("hint")
        this.textContainer = this.container.querySelector("p")
        //this.index = 0
    }

    show(){
        this.container.style.display = "flex"
        this.textContainer.style.display = "block"
        this.write()
    }

    handleClose(){
        this.container.style.display = "none"
    }

    editMessage(message){
        this.message = message
    }
    
    write(){
        //let index = this.index ? this.index : 0;
        let textContainer = this.textContainer;
        let message = this.message;
        //console.log("message",message)
        (function writer(i){
            if(message.length <= i++){
            textContainer.innerText = message;
            return;
            }
            textContainer.innerText = message.substring(0,i);
            var rand = Math.floor(Math.random() * (100)) + 20;
            setTimeout(function(){writer(i);},rand);
        })(0)
    }
}