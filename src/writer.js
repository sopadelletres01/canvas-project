export class Message{
    constructor(message){
        this.message = message
        this.container = document.getElementById("message")
        this.textContainer = this.container.querySelector("p")
        this.container.addEventListener("click",this.handleClose)
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
        console.log("text",textContainer)
        let message = this.message;
        (function writer(i){
            if(message.length <= i++){
            textContainer.innerText = message;
            return;
            }
            textContainer.innerText = message.substring(0,i);
            var rand = Math.floor(Math.random() * (100)) + 40;
            setTimeout(function(){writer(i);},rand);
        })(10)
    }


} 
/* var element = document.querySelector('#test');
var string = "asdasdasdasdasfsafasfas"

function type(string, index){
  index = index ? index : 0;
  (function writer(i){
    if(string.length <= i++){
      element.innerText = string;
      return;
    }
    element.innerText = string.substring(0,i);
    var rand = Math.floor(Math.random() * (100)) + 140;
    setTimeout(function(){writer(i);},rand);
  })(0)
}



type(string); */