let rows = 16;
let cols = 16;

let activeButton = 'black';
const defaultColor = 'rgba(0,0,0,1.0)';
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
            cell.dataset.darkstep = '0';
            cell.addEventListener('mouseover', etch)
            grid.appendChild(cell);
            console.log('add')
        }
    }
}

function etch(e) {
    if (activeButton === 'black') {
        this.style.backgroundColor = fadeBlack(this);               
    } else if (activeButton === 'color') {
        this.style.backgroundColor = 'hsl(' + (Math.random() * 360) + ', 100%, 50%, .9)';
        console.log(this.style.backgroundColor)
    } else if (activeButton === 'eraser') {
        this.style.backgroundColor = backgroundColor;
    }
    
    console.log('moused');
}

function fadeBlack(cell) {
    step = cell.dataset.darkstep;
    console.log(step);
    switch(step) {
        case '0':
            cell.dataset.darkstep++;
            return 'rgba(0, 0, 0, .2)';
            break;
        case '1':
            cell.dataset.darkstep++;
            return 'rgba(0, 0, 0, .4)';
            break;
        case '2':
            cell.dataset.darkstep++;
            return 'rgba(0, 0, 0, .6)';
            break;
        case '3':
            cell.dataset.darkstep++;
            return 'rgba(0, 0, 0, .8)';
            break;
        default:
            return 'rgba(0, 0, 0, 1.0)';
            break;
     }
}

function fadeColor(cell) {
    step = cell.dataset.darkstep;
    console.log(cell);
    oldColor = cell.style.backgroundColor;
    switch(step) {
        case '4':
            cell.dataset.darkstep++;
            return 'rgba(0, 0, 0, .2)';
            break;
        case '3':
            cell.dataset.darkstep++;
            return 'rgba(0, 0, 0, .4)';
            break;
        case '2':
            cell.dataset.darkstep++;
            return 'rgba(0, 0, 0, .6)';
            break;
        case '1':
            cell.dataset.darkstep++;
            return 'rgba(0, 0, 0, .8)';
            break;
        default:
            cell.dataset.darkstep++;
            return 'hsl(' + (Math.random() * 360) + ', 100%, 50%, .2)';
            break;
     }
}

window.onload = () => {
    createGrid(16, 16);
}