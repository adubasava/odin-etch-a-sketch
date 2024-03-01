let number = 16*16;
let container = document.getElementById('container');

for (i = 0; i < number; i++){
    let div = document.createElement('div');
    div.classList.add('item');
    container.appendChild(div);
}

let divs = document.querySelectorAll('.item');

divs.forEach((item) => {
    item.addEventListener('mouseover', () => {
        let colorR = Math.floor(Math.random()*250);
        let colorG = Math.floor(Math.random()*250);
        let colorB = Math.floor(Math.random()*250);
        item.style.backgroundColor = `rgb(${colorR},${colorG},${colorB})`;
    });
});

// divs.forEach((item) => {
//     item.addEventListener('mouseout', () => {
//         item.style.backgroundColor = 'white';
//     });
// });