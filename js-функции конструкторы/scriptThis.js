"use strict";

function showThis(){
    console.log(this);
}

showThis();

// 1) Обычная функция: this= window; но если стоит use strict то будет - undefined;


const obj={
    a: 20,
    b:15,
    sum: function(){
        console.log(this);
    }
};
obj.sum();

// 2) Контекст у методов объекта- сам объект

function user(name, id){
    this.name=name;
    this.id=id;
    this.id.human-true;
    this.hello=function(){ // можно также создать метод
        console.log(`Hello ${this.name}`);
    };
}

const alex=new user('Alex', 27); // с помощью ключевого слова new конструктор преобразуется в объект


// 3) this- в конструкторах и классах - это новый экземпляр объекта


//Ручное присвоение контекста

function sayName(){
    console.log(this);
    console.log(this.name);
}

const User={
    name: 'John',
    id: 18
};

sayName.call(User); // назв.функции + метод call()/aplly() + привязываем в скобках к определенному контексту/ ..//тоесть к объекту
sayName.apply(User);


// Создание новой функции и подвязывание под нее контекста с помощью bind

function count(num){
    return this*num;
}

const double =count.bind(2);
console.log(double(2));
console.log(double(3));


// 4) Ручная привязка this: call, apply, bind