
const paintCanvas = document.querySelector(".paint-canvas")
const context = paintCanvas.getContext("2d")
context.lineCap ="";

const colourPicker = document.querySelector(".color-picker")
colourPicker.addEventListener("change", event=>{
    context.strokeStyle = event.target.value;
})


const lineWidthRange = document.querySelector(".line-range")
const lineWidthLabel = document.querySelector(".range-value")


lineWidthRange.addEventListener("input",event=>{

   const width = event.target.value;
    lineWidthLabel.innerHTML = width;
    context.lineWidth = width;
})

let x=0,y=0;
let isMouseDown = false;

const startDrawing =(event)=>{
    isMouseDown = true;
    [x,y]=[event.offsetX,event.offsetY]
}

const stopDrawing =(event)=>{
    isMouseDown = false;
}

const drawLine =(event)=>{
    if(isMouseDown){
    const newX = event.offsetX;
    const newY = event.offsetY
    context.beginPath();
    context.moveTo(x,y);
    context.lineTo(newX,newY)
    context.stroke();
    x = newX;
    y = newY
    }


}

paintCanvas.addEventListener("mousedown",startDrawing);
paintCanvas.addEventListener("mousemove",drawLine);
paintCanvas.addEventListener("mouseup",stopDrawing);
paintCanvas.addEventListener("mouseout",stopDrawing);

