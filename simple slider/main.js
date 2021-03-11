"use strict";

const prev = document.querySelector('#previous'),
    next = document.querySelector('#next'),
    image = document.querySelector('#image');

let arr = ["img/1.jpeg", "img/2.jpeg", "img/3.jpeg", "img/4.jpeg", "img/5.jpeg", "img/6.jpeg", "img/7.jpeg"];

let i = 0;

next.addEventListener('click', () => {
    i++;
    if (i > arr.length - 1) {
        i = 0;
    }
    image.src = arr[i];

});

prev.addEventListener('click', () => {
    i--;
    if (i < 0) {
        i = arr.length - 1;
    }
    image.src = arr[i];
});





// let i=0;
// "img/1.jpeg=arr[0] //0
// "img/1.jpeg=arr[1];
// "img/1.jpeg=arr[2];