let rows = 16;
let cols = 16;
let color = 'cadetblue';
let activeButton = 'black';
const defaultColor = 'black';
const backgroundColor = 'chartreuse';

const grid = document.querySelector('.grid');
const slider = document.getElementById("range");
const sliderValue = document.getElementById("value");
const blackButton = document.querySelector('.black');
const colorsButton = document.querySelector('.colors');
const eraserButton = document.querySelector('.eraser');
const clearButton = document.querySelector('.clear');

blackButton.addEventListener('click', function(e) {
    activeButton = 'black';
});

colorsButton.addEventListener('click', function(e) {
    activeButton = 'color';
});

eraserButton.addEventListener('click', (e) => {
    activeButton = 'eraser';
});

clearButton.addEventListener('click', (e) => {
    let cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.style.backgroundColor = backgroundColor);
})

slider.addEventListener('input', (e) => {
    rows = e.target.value;
    cols = e.target.value;
    createGrid(rows, cols);
});

function createGrid(rows,cols) {
    sliderValue.innerHTML = rows + ' x ' + cols;
    grid.innerHTML = "";
    grid.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    for (let i = 0; i < rows; i ++) {
        for (let j = 0; j < cols; j++) {
            let cell = document.createElement('div');
            cell.className = 'cell';
            cell.addEventListener('mouseover', etch)
            grid.appendChild(cell);
            console.log('add')
        }
    }
}

function etch(e) {
    if (activeButton === 'black') {
        this.style.backgroundColor = defaultColor;        
    } else if (activeButton === 'color') {
        this.style.backgroundColor = 'hsl(' + (Math.random() * 360) + ', 100%, 50%, 1)';
    } else if (activeButton === 'eraser') {
        this.style.backgroundColor = backgroundColor;
    }
    
    console.log('moused');
}

window.onload = () => {
    createGrid(16, 16);
}