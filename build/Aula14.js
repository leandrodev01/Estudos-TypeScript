"use strict";
const teste = (txt) => {
    console.log(txt);
};
const fsoma2 = (n) => {
    let s = 0;
    n.forEach((e) => {
        s += e;
    });
    return s;
};
teste("CFBCursos");
teste("Curso Typescript");
teste("Youtube");
teste("KEEP GOING");
let numer = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log(fsoma2(numer));
