
let color = 'black';
const sketchPad = document.querySelector('.sketchPad');
const clearBtn = document.querySelector('.clearButton')
// const pixel = document.querySelectorAll('.pixel');

function divCreator(e) {
let divBlock
let pen = 1
sketchPad.innerHTML="";
    for (let i = 1; i <= e; i++) {
        divBlock = document.createElement('div');
        divBlock.classList.add('pixel');
        sketchPad.appendChild(divBlock);
    }
    sketchPad.addEventListener('click', () => {
    let divvies = document.querySelectorAll('.pixel')
    if (pen === 1) {
    divvies.forEach(divBlock => 
        divBlock.addEventListener('mouseover', divHover(divBlock), true))
        pen=0
    console.log(pen)
}
    else if (pen == 0) {
        divBlock.removeEventListener('mouseover', divHover(divBlock), true)
     pen = 1
     divBlock.classList.remove('pixel');
    console.log(pen)
    }})
}
    function divHover(a){
    a.addEventListener('mouseover', () =>
    a.style.background = color)

            }   
// function divHover(a){
//     a.addEventListener('mouseover', () =>
//     a.style.background = color)
// }
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
// pen toggle
// sketchPad.addEventListener('click', function() 
// {
// if (pen === 0) {
//     pen = 1;

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

window.onload = gridDestroyer();