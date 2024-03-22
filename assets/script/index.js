import shape from './shapes.js';

const selectShape = document.querySelector('#shapes');
const selectColor = document.querySelector('#color');
const createButton = document.querySelector('#button');
const outputBox = document.querySelector('.output');
const message = document.querySelector('.message');

const MAX_SHAPES = 20;

let shapeCount = 0;

function createShape() {
    const shapeType = selectShape.value;
    const color = selectColor.value;

    // Function to get color name from value
    function getColorName(colorValue) {
        const colorOptions = selectColor.querySelectorAll('option');
        for (let option of colorOptions) {
            if (option.value === colorValue) {
                return option.innerText;
            }
        }
        return '';
    }

    if (shapeCount >= MAX_SHAPES) {
        message.innerText = ('Maximum number of shapes reached');
        return;
    }

    if (shapeType && color) { // Check if both shape and color are selected
        const shapeDiv = document.createElement('div');
        shapeDiv.style.backgroundColor = color;

        if (shapeType === 'square' || shapeType === 'circle') {
            shapeDiv.classList.add(shapeType);
        } else {
            message.innerText = ('Invalid shape type!');
            return;
        }

        shapeDiv.addEventListener('click', () => {
            const colorName = getColorName(color); // Get color name
            const positionNumber = Array.from(outputBox.children).indexOf(shapeDiv) + 1; // Get position number
            message.innerText = (`unit: ${positionNumber} ${colorName} ${shapeType}`); // Display color name
        });

        outputBox.appendChild(shapeDiv);

        shapeCount++;
    } else {
        message.innerText = ('Please select both shape and color');
    }
}

createButton.addEventListener('click', createShape);