'use strict';
const body = document.querySelector('body');
const divArray = new Array();
// mousemove event
document.addEventListener('mousemove', (evt) => {
    const div = document.createElement('div');
    div.className ='trail';
    div.style.top = `${evt.pageY}px`;
    div.style.left = `${evt.pageX}px`;
    body.appendChild(div);
    divArray.push(div);
    if(divArray.length > 20) {
        const removedDiv = divArray.shift();
        body.removeChild(removedDiv);
    };
  });