
let color = 'black';
const pixel = document.querySelector('.sketchPad').children;
const sketchPad = document.querySelector('.sketchPad');
const clearBtn = document.querySelector('.clearButton')

function divCreator(e) {
let divBlock
    sketchPad.innerHTML="";
    for (let i = 1; i <= e; i++) {
        divBlock = document.createElement('div');
        divBlock.classList.add('pixel');
        sketchPad.appendChild(divBlock);
        divBlock.addEventListener('mouseover', function(a){
                a.target.style.background = color;
            })}}
   

function gridCreator(numberInput) {
   sketchPad.style.gridTemplateRows = (`repeat(${numberInput}, 1fr`);
   sketchPad.style.gridTemplateColumns = (`repeat(${numberInput}, 1fr)`);
   console.log(numberInput)
}
function gridDestroyer() {
    sketchPad.innerHTML=""
    gridCreator(50);
    divCreator(2500);
}


// // pen toggle
// sketchPad.addEventListener('click', function() 
// {
// if (pen === 0) {
//     pen = 1;
//     // sketchPadDiv.addEventListener('mouseover', function(a){
//     //     a.target.style.background = color;})

//     console.log(pen)
// } else {
//     pen = 0;
//     console.log(pen)
//     return pen
// }
// })

const numberInput = document.getElementById('inputNumber');
numberInput.addEventListener('mousemove', function(){
    valueoutPut.innerHTML = `${numberInput.value} x ${numberInput.value}`;
})

const valueoutPut = document.getElementById('value');
let outPut = `${numberInput.value} x ${numberInput.value}`;

numberInput.addEventListener('click', () => gridCreator(numberInput.value));
numberInput.addEventListener('click', () => divCreator(numberInput.value * numberInput.value))

clearBtn.addEventListener('click', () => gridDestroyer());

const pixelColorPicker = document.getElementById('pixelColorPicker');
pixelColorPicker.addEventListener('mouseout', () => color = pixelColorPicker.value)

const rainbowBtn = document.getElementById('rainbow');
rainbowBtn.addEventListener('click', () => color = 'blue')

const eraserBtn = document.getElementById('eraser');
eraserBtn.addEventListener('click', () => color = backgroundColor.value);

const backgroundColor = document.getElementById('colorPickerBackground')
backgroundColor.addEventListener('mouseout', () => sketchPad.style.background= backgroundColor.value);

// pixel.addEventListener('click', () =>
// pixel.style.backgroundColor = color)

window.onload = gridDestroyer();
// const pixel = document.querySelector('.sketchPad').childr