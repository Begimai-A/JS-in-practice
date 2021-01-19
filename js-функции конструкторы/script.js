"use strict";

function user(name, id){
    this.name=name;
    this.id=id;
    this.id.human-true;
    this.hello=function(){ // можно также создать метод
        console.log(`Hello ${this.name}`);
    };
}
// Функции-конструкторы при вызове возращают нам объект!!!!

user.prototype.exit=function (){
    console.log(`User ${this.name} left`);// добавление нового метода в конструктор
};

const ivan=new user('Ivan', 28);
const alex=new user('Alex', 27); // с помощью ключевого слова new конструктор преобразуется в объект

ivan.exit();

ivan.hello();
alex.hello();

