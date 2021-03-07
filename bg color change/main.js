"use strict";

let box = document.querySelector('#container'),
    button = document.querySelector('#button');

let colors = ['pink', 'yellow', 'orange', 'red', 'green', 'purple', 'gray'];


button.addEventListener('click', () => {
    let randomColors = colors[Math.floor(Math.random() * colors.length)];
    box.style.background = randomColors;
});