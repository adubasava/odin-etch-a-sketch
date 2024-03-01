let number = 16*16;
let container = document.getElementById('container');

for (i = 0; i < number; i++){
    div = document.createElement('div');
    div.classList.add('item');
    container.appendChild(div);
}