"use strict";

// const btn=document.querySelector('.btn');

// function myAniamtion(){
//     const box=document.querySelector('.box');
//     let position=0;

//     const id=setInterval(frame, 10);
//     function frame(){
//         if(position==300){
//             clearInterval(id);
//         }else{
//             position++;
//             box.style.top=position+"px";
//             box.style.left=position+"px";
//         }
//     }
// }

// btn.addEventListener('click', myAniamtion);


// const timerId=setTimeout(function(){
//     console.log('hello');
// }, 2000);

// 2nd way to set timeout with two arguments as 2000 and 'hello'

// const timerId2=setTimeout(function(text){
//     console.log(text);
// },2000, 'hello again');

//3rd way of setting timeout. Ready function is used as an argument 





// const timerId3=setTimeout(logger, 2000);
// clearInterval(timerId3); // 

// Setting timeout on the button

const btn=document.querySelector('.btn');
let timerId4,
    i=0;

btn.addEventListener('click', ()=>{
    //timerId4=setTimeout(logger, 2000);
    timerId4=setInterval(logger, 1000);
});

function logger(){
    if(i===3){
      clearInterval(timerId4);  
    }
    console.log('hello hello');
    i++;
}

//РЕКУРСИВНЫЙ setTimeout();


let id=setTimeout(function log(){   
    id=setTimeout(log, 500);
}, 500);

function log(){
    if(i===3){
        clearTimeout(id);
    }
    console.log("recursive");
    i++;
}


