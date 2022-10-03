import "./index.css"
export default class HintBox{
    #hint:string
    #speed:number;
    className?:string
    #boxContainer:HTMLElement;
    #textContainer:HTMLParagraphElement;
    constructor(){
        this.#hint = ""
        this.#speed = 1 
        this.#boxContainer = document.createElement("div")
        this.#textContainer = document.createElement("p")
    }

    setup(parentElement:HTMLElement):void{
        this.#boxContainer.className = "hintBoxContainer"
        this.#textContainer.className = "hintTextContainer"
        this.#boxContainer.appendChild(this.#textContainer)
        parentElement.appendChild(this.#boxContainer)
    }

    setHint(hint:string):void{
        this.#hint = hint
    }

    draw():void{
        console.log("hint",this.#hint)
        this.#textContainer.innerHTML=this.#hint
        this.#boxContainer.style.display = "block"
    }

    clear():void{
        this.#boxContainer.style.display = "none"
    }
}