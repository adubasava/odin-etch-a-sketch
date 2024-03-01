const WIDTH = 960;
let number = 16;
const container = document.querySelector('.container');

createSketch(number);

function createSketch(number) {
    if (container.children.length > 0) {
        let divs = document.querySelectorAll('.item');
        removeDivs(divs);
    }

    for (i = 0; i < number*number; i++) {
        let div = document.createElement('div');
        div.classList.add('item');
        div.style.width = `${WIDTH / number}px`;
        div.style.height = `${WIDTH / number}px`;
        container.appendChild(div);
    }
    
    let divs = document.querySelectorAll('.item');
    changeBackgroundColor(divs);
    
    let clear = document.querySelector('#clear');
    clearBackground(clear, divs);

    let res = document.querySelector('input#res');
    let show = document.querySelector('#range');
    res.addEventListener('input', () => {
        show.textContent = `${res.value} x ${res.value}`;
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





