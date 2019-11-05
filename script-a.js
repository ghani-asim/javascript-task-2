'use strict';

const balloon = document.querySelector('p');
let currentSize = 60;

//event handler
const resizeBalloon = (e) => {
    e.preventDefault();
    if (e.key === 'ArrowUp') {
        if (currentSize == 200) {
            balloon.innerHTML = '&#128165;';
            balloon.style.fontSize = currentSize + 'px';
            document.removeEventListener('keydown', resizeBalloon);
        }
        currentSize = (currentSize + 20);
        balloon.style.fontSize = currentSize + 'px';
    } else if (e.key === 'ArrowDown') {
        if (currentSize > 60) {
            currentSize = (currentSize - 20);
            balloon.style.fontSize = currentSize + 'px';
        } 
    }
};

document.addEventListener('keydown', resizeBalloon);