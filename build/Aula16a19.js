"use strict";
class computador {
    id = 0;
    nome;
    ram;
    cpu;
    ligado = false;
    constructor(nome, ram, cpu) {
        this.nome = nome;
        this.ram = ram;
        this.cpu = cpu;
        this.ligado = false;
        this.id = 0;
    }
    info() {
        console.log(`Nome..:${this.nome}`);
        console.log(`Ram...:${this.ram}`);
        console.log(`Cpu...:${this.cpu}`);
        console.log(`Ligado:${this.ligado ? "SIM" : "NÂO"}`);
        console.log("---------------------------------");
    }
    ligar() {
        this.ligado = true;
    }
    desligar() {
        this.ligado = false;
    }
    upRam(qtde) {
        if (qtde >= 0 && qtde <= 100) {
            this.ram = qtde;
        }
        else
            console.log(`Quantidade de ram ${qtde} para o computador ${this.nome} não é permitido(a)`);
    }
}
const comp1 = new computador("Dell", 63, 3.7);
const comp2 = new computador("POSITIVO", 32, 2.9);
const comp3 = new computador("SAMSUNG", 128, 4.9);
comp1.ligar();
comp3.ligar();
comp1.desligar();
comp2.upRam(-250);
comp1.info();
comp2.info();
comp3.info();
