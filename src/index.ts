type Draggable = {
    drag: () => void
}

type Resizable = {
    resize: () => void
}

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}

type Quantity = 50 | 100
type Metric = "cm" | "inch"

let measure: `${Quantity}|${Metric}`= "100|cm"


let customer:{
    age:number
}={
    age:15
}

console.log(customer?.age)