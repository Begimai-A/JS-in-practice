'use strict';

// function* generator (){
//     yield 's'; // use quotes when u want to consol string
//     yield 'u';
//     yield 'n';
// }

// const str=generator();
// console.log(str.next());
// console.log(str.next());
// console.log(str.next().value); // as it is object, it has property as VALUE

function* count(n) {
    for (let i = 0; i < n; i++) {
        yield i; // here no need to use quotes
    }
}

// const counter=count(4);
// console.log(counter.next().value);
// console.log(counter.next().value);
// console.log(counter.next().value);

// Конструкция 'for of'


function* count(n) {
    for (let i = 0; i < n; i++) {
        yield i; // here no need to use quotes
    }
}
for (let k of count(7)) {
    console.log(k); //чтобы не вызывать каждый раз console.log
}