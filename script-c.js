'use strict';

const tabPanel = document.querySelector('tab-panel');
const body = document.querySelector('body');
const divs = document.querySelectorAll('div');

for (let div of divs) {
    const button = document.createElement('button');
    button.innerText = div.innerText;
    tabPanel.insertBefore(button, divs[0]);

    button.addEventListener("click", function(){
        for (let div of divs) {
            if(div.innerText === button.innerText) {
                div.style.display = 'block';
            } else {
                div.style.display = 'none';
            }
        }
      });
}