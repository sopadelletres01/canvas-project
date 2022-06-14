export class Message{
    constructor(){
        
    }
} 
var element = document.querySelector('#test');
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



type(string);