"use strict";

window.addEventListener('DOMContentLoaded', () =>{

const btns=document.querySelectorAll('button');
//console.log(btns[0].classList.length);
//console.log(btns[0].classList.item(1));
//console.log(btns[0].classList.add('red'));
//console.log(btns[0].classList.remove('blue'));
//console.log(btns[0].classList.toggle("blue"));

if(btns[1].classList.contains('red')){
    console.log('red');
}

btns[0].addEventListener('click', () =>{
     if (!btns[1].classList.contains('red')){
         btns[1].classList.add('red');
     }else{
         btns[1].classList.remove('red');
    }

    
    // btns[1].classList.toggle('red'); Alternative way
  });


 const wrapper=document.querySelector('.btn-block');

//  wrapper.addEventListener('click', (event)=>{
//     if(event.target && event.target.tagName == 'BUTTON'){
//         console.log('hello');
//     }
//  });

 
 wrapper.addEventListener('click', (event)=>{
    if(event.target && event.target.matches("button.red")){
        console.log('hello');
    }
 });

 const newbtn=document.createElement('button');
 newbtn.classList.add('red');
 wrapper.append(newbtn);





});