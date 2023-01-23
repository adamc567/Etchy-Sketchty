let color = 'black';
const sketchPad = document.querySelector('.sketchPad');

function divCreator(e) {
    let divBlock
    for (let i = 1; i <= e; i++) {
        divBlock = document.createElement('div');
        sketchPad.appendChild(divBlock);
        divBlock.addEventListener('mouseover', function(a){
           a.target.style.background = color;
        })
    }
}
function gridCreator(numberInput) {
   sketchPad.style.gridTemplateRows = (`repeat(${numberInput}, 1fr`);
   sketchPad.style.gridTemplateColumns = (`repeat(${numberInput}, 1fr)`);
}

const numberInput = document.getElementById('inputNumber');
numberInput.addEventListener('mousemove', function(){
    valueoutPut.innerHTML = `${numberInput.value} x ${numberInput.value}`;
})

const valueoutPut = document.getElementById('value');
let outPut = `${numberInput.value} x ${numberInput.value}`;

numberInput.addEventListener('click', () => gridCreator(numberInput.value));
numberInput.addEventListener('click', () => divCreator(numberInput.value * numberInput.value))

const pixelColorPicker = document.getElementById('pixelColorPicker');
pixelColorPicker.addEventListener('mouseout', () => color = pixelColorPicker.value)

const blueBtn = document.getElementById('blue');
blueBtn.addEventListener('click', () => color = 'blue')

const redBtn = document.getElementById('red');
redBtn.addEventListener('click', () => color ="red");

const eraserBtn = document.getElementById('eraser');
eraserBtn.addEventListener('click', () => color = backgroundColor.value);

const backgroundColor = document.getElementById('colorPickerBackground')
backgroundColor.addEventListener('mouseout', () => sketchPad.style.background= backgroundColor.value);
//*funtions to add
//eraser sizing
//color-picker
//pen toggle
//sketchpad frame size
//clear all
