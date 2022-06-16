import { SceneObject } from "./sceneObject.js"

const keyPositions =[
    {
        id:"stairs2l",
        x:200,
        y:200
    },
    {
        id:"stairs2",
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
        this.width=50;
        this.height=50;
        this.box = document.getElementById("keySocket");
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