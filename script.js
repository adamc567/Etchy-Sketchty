
const sketchPad = document.querySelector('.sketchPad');
const clearBtn = document.querySelector('.clearButton');
const sizeAdjuster = document.querySelector('#inputNumber');
const adjusterDisplay = document.querySelector('#value')
const pixelColorPicker = document.getElementById('pixelColorPicker');
const rainbowBtn = document.getElementById('rainbow');
const eraserBtn = document.getElementById('eraser');
const backgroundColor = document.getElementById('colorPickerBackground')

let numberInput = 58;
let color = '#CF5F5F';
let rainbow = false;
let eraser = false;

function gridDestroyer() {
    sketchPad.innerHTML=""
    gridCreator(sizeAdjuster.value);
}

clearBtn.addEventListener('click', () => gridDestroyer());

sizeAdjuster.addEventListener('mousemove', sizeAdjusterHelper);

sizeAdjuster.addEventListener('mousemove', () => adjusterDisplay.innerHTML = `${sizeAdjuster.value} x ${sizeAdjuster.value}`
)

pixelColorPicker.addEventListener('mouseout', () => color = pixelColorPicker.value)

rainbowBtn.addEventListener('click', rainbowMaker)

eraserBtn.addEventListener('click', buttonSelect)

backgroundColor.addEventListener('mouseout', () => sketchPad.style.background= backgroundColor.value);
backgroundColor.addEventListener('mouseout', () => gridCreator(sizeAdjuster.value))
let divBlock = sketchPad.childNodes;

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function gridCreator(numberInput) {
sketchPad.innerHTML = '';
sketchPad.style.gridTemplateRows = (`repeat(${numberInput}, 1fr`);
sketchPad.style.gridTemplateColumns = (`repeat(${numberInput}, 1fr)`);
for (let i =0; i <= numberInput * numberInput; i++) {
    let divBlock = document.createElement('div')
    divBlock.classList.add('pixelHover')
    divBlock.addEventListener('mouseover', colorPicker)
     divBlock.addEventListener('mousedown', colorPicker)
     sketchPad.appendChild(divBlock)
 }}

function sizeAdjusterHelper(e) {
if (e.type === 'mousemove' && !mouseDown) return;
gridCreator(sizeAdjuster.value);
 }

function colorPicker (e) {
    if (e.type === 'mouseover' && !mouseDown) return;
    if (rainbow === true) {
        const R = Math.floor(Math.random() * 256);
        const G = Math.floor(Math.random() * 256);
        const B = Math.floor(Math.random() * 256);
        color = `rgb(${R}, ${G}, ${B})`;
        e.target.style.background = color
        return
    } else if(eraser === true) {
    color = `${backgroundColor.value}`;
    e.target.style.background = color;
    return
} else {
    e.target.style.backgroundColor = color;
}
}

function rainbowMaker() {
    if (rainbow === false){
        rainbow = true;
        eraser = false;
        eraserBtn.classList.remove('activeButton')
        rainbowBtn.classList.add('activeButton')
        return
    } else if (rainbow === true)
        rainbow = false
        rainbowBtn.classList.remove('activeButton')
        color = pixelColorPicker.value;
}
function buttonSelect (e) {
    if (eraser === false){
        eraser = true;
        rainbow = false
        rainbowBtn.classList.remove('activeButton')
        eraserBtn.classList.add('activeButton')
        return
    } else {
        eraser = false
        eraserBtn.classList.remove('activeButton')
        color = pixelColorPicker.value;
    }
}
window.onload = () => gridCreator(50);
