"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Classe_1 = __importDefault(require("./Classe"));
const Classe_2 = require("./Classe");
const p1 = new Classe_1.default("Bruno", 1.65);
const o1 = new Classe_2.Objeto("Mesa");
console.log(p1.nome);
console.log(p1.altura);
console.log(o1);
console.log(Classe_2.Coisas);
