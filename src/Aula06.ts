//let numeros: number[]=[20,30,40];
//let numeros:Array<number>=[20,30,40];
//let numeros:(number|string)[]= [20, 30, 40,"Bruno"]

let numeros: number[]=[20,30,40];

numeros.push(10);
//.push insere no final*

numeros.unshift(1);
//.unshift insere no início*

numeros.pop()
//.pop retira o último elemento do array

numeros.shift()
//.shift retira o elemto inicial do array

console.log(numeros);

let numero_ro:ReadonlyArray<number>=[100,170,210];
//adiciona para leitura 

console.log(numero_ro);