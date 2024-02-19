"use strict";
const obj = {
    cor1: "Verde",
    cor2: "Azul",
    cor3: "Amarelo",
    cor4: "Branco",
};
let { cor1, cor2, cor3, cor4 } = obj;
let [nu1 = 0, nu2 = 0, ...nu3] = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const fcores = () => {
    return ["BLUE", "GREEN", "YELLOW", "WHITE"];
};
let [co1, co2, co3, co4] = fcores();
let texto = "Curso de Typescript";
let texto2 = "Separa por letra";
let [...t] = texto.split(" ");
let [...l] = texto2.split("");
console.log(t);
console.log(l);
console.log(co1);
console.log(co2);
console.log(co3);
console.log(co4);
console.log(nu1);
console.log(nu2);
console.log(nu3);
console.log(cor1);
console.log(cor2);
console.log(cor3);
console.log(cor4);
