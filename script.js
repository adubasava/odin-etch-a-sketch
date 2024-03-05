const WIDTH = 960;
const DEFAULT_GRID_SIZE = 16;
const container = document.querySelector('.container');

createSketch(DEFAULT_GRID_SIZE);

function createSketch(gridSize) {
    if (container.children.length > 0) {
        let divs = document.querySelectorAll('.item');
        removeDivs(divs);
    }

    for (i = 0; i < gridSize*gridSize; i++) {
        let div = document.createElement('div');
        div.classList.add('item');
        div.style.width = `${WIDTH / gridSize}px`;
        div.style.height = `${WIDTH / gridSize}px`;
        container.appendChild(div);
    }
    
    let divs = document.querySelectorAll('.item');
    changeBackgroundColor(divs);
    
    let clear = document.querySelector('#clear');
    clearBackground(clear, divs);

    let res = document.querySelector('#res');
    let show = document.querySelector('#range');
       
    res.addEventListener('input', event => {
        const value = event.target.value;
        show.textContent = `${value} x ${value}`;
    })

    let grid = document.querySelector('#grid');

    grid.addEventListener('click', () => {
        createSketch(document.querySelector('#res').value);
    });
}

function changeBackgroundColor(divs) {   
    divs.forEach((item) => {
        item.addEventListener('mouseover', () => {
            let colorR = Math.floor(Math.random()*250);
            let colorG = Math.floor(Math.random()*250);
            let colorB = Math.floor(Math.random()*250);
            item.style.backgroundColor = `rgb(${colorR},${colorG},${colorB})`;
        });
    });
}

function clearBackground(clear, divs) {
    clear.addEventListener('click', () => {
        divs.forEach((item) => {
            item.style.backgroundColor = 'white';        
        });
    });
}

function removeDivs(divs) {
    divs.forEach((item) => {
        item.remove();        
    });
}





