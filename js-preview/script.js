'use strict';

const box=document.querySelector('.box');

const width=box.clientWidth;
const height=box.clientHeight;// includes only padding

console.log(width, height);

const width2=box.offsetWidth;
const height2=box.offsetHeight;// includes border, margin and scroll

console.log(width2, height2); 


const height3=box.scrollHeight;// includes the inside parts of scroll

console.log(height3); 


// PRACTICE

const btn=document.querySelector('button');

btn.addEventListener('click', () =>{

    //box.style.height=box.scrollHeight +"px";
    
   console.log(box.scrollTop);// показывает сколько px было проскручено
    
});

console.log(box.getBoundingClientRect()); // allows to get all the coordinates of the element

console.log(box.getBoundingClientRect().top); // allows to get concrete positions of the element

const style=window.getComputedStyle(box);// стили которые есть в css

console.log(style.display);
