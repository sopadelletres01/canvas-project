import { SceneObject } from "./sceneObject.js"

const keyPositions =[
    {
        id:"stairs1l",
        x:200,
        y:200
    },
    {
        id:"stairs1",
        x:200,
        y:200
    },
    
    /* {
        id:"stairsl",
        x:200,
        y:200
    },
    {
        id:"stairsl",
        x:200,
        y:200
    },
    {
        id:"stairsl",
        x:200,
        y:200
    },
    {
        id:"stairsl",
        x:200,
        y:200
    } */
]


export class Key {
    x;
    y;
    scene; 
    constructor(){
        this.width=90;
        this.height=40;
        this.box = document.getElementById("key");
        this.item = "goldenkey"
        this.getRandom()
    }

    getRandom(){
        let random = keyPositions[Math.floor(Math.random() * keyPositions.length)];
        this.x = random.x
        this.y = random.y
        this.scene = random.id

    }
}