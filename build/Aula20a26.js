"use strict";
class Conta {
    numero;
    titular;
    saldoconta;
    constructor(titular) {
        this.numero = this.gerarNumeroConta();
        this.titular = titular;
        this.saldoconta = 0;
    }
    gerarNumeroConta() {
        return Math.floor(Math.random() * 100000) + 1;
    }
    info() {
        console.log(`Titular:${this.titular}`);
        console.log(`Numero..:${this.numero}`);
        console.log(`-----------------------`);
    }
    get saldo() {
        return this.saldoconta;
    }
    set saldo(saldoconta) {
        this.saldoconta = saldoconta;
    }
    deposito(valor) {
        if (valor < 0) {
            console.log(`Valor Invalido`);
            return;
        }
        this.saldoconta += valor;
    }
    saque(valor) {
        if (valor < 0) {
            console.log(`Valor Invalido`);
            return;
        }
        if (valor <= this.saldoconta) {
            this.saldoconta -= valor;
        }
        else {
            console.log(`SALDO INSUFICIENTE`);
        }
    }
}
class ContaPf extends Conta {
    cpf;
    constructor(cpf, titular) {
        super(titular);
        this.cpf = cpf;
    }
    info() {
        console.log(`Tipo....CPF`);
        super.info();
        console.log(`CPF....:${this.cpf}`);
        console.log(`---------------------`);
    }
    deposito(valor) {
        if (valor > 1000) {
            console.log(`Depósito acimda do permitido`);
        }
        else {
            super.deposito(valor);
        }
    }
    saque(valor) {
        if (valor > 1000) {
            console.log(`Saque acima do permitido`);
        }
        else {
            super.saque(valor);
        }
    }
}
class ContaPj extends Conta {
    cnpj;
    constructor(cnpj, titular) {
        super(titular);
        this.cnpj = cnpj;
    }
    info() {
        console.log(`Tipo....PJ`);
        super.info();
        console.log(`CNPJ....:${this.cnpj}`);
        console.log(`---------------------`);
    }
    deposito(valor) {
        if (valor > 10000) {
            console.log(`Depósito acimda do permitido`);
        }
        else {
            super.deposito(valor);
        }
    }
    saque(valor) {
        if (valor > 10000) {
            console.log(`Saque acima do permitido`);
        }
        else {
            super.saque(valor);
        }
    }
}
const cont1 = new ContaPf(349, "Bruno");
const cont2 = new ContaPj(167, "CFBCursos");
cont1.deposito(1000);
cont1.saldo = 250;
console.log(cont1.saldo);
