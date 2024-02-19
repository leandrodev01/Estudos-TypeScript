"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Objeto = exports.Pessoa = exports.Coisas = void 0;
const Coisas = ["Corda", "Pilha", "Lampada", "Chave"];
exports.Coisas = Coisas;
class Pessoa {
    nome;
    altura;
    constructor(nome, altura) {
        this.nome = nome;
        this.altura = altura;
    }
}
exports.Pessoa = Pessoa;
class Objeto {
    nome;
    constructor(nome) {
        this.nome = nome;
    }
}
exports.Objeto = Objeto;
exports.default = Pessoa;
