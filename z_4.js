"use strict";

let num1 = +prompt("Введите целое число в диапазоне [0, 999]");

function getNumber(num) {
    if (!Number.isInteger(num) || num < 0 || num > 999) {
        console.log("Ваше число должно быть целым в диапазоне [0, 999]");
        return {};
    };

    return {
        units: num % 10,
        tens: Math.floor(num / 10) % 10,
        hundreds: Math.floor(num / 100),
    };
};

console.log(getNumber(num1));