"use strict";
var Veiculos;
(function (Veiculos) {
    let Cores;
    (function (Cores) {
        Cores[Cores["Preto"] = 0] = "Preto";
        Cores[Cores["Branco"] = 1] = "Branco";
        Cores[Cores["Amarelo"] = 2] = "Amarelo";
        Cores[Cores["Azul"] = 3] = "Azul";
        Cores[Cores["Prata"] = 4] = "Prata";
    })(Cores || (Cores = {}));
    class Carro {
        nome;
        motor;
        cor;
        constructor(nome, motor, cor) {
            this.nome = nome;
            this.motor = motor;
            this.cor = Cores[cor];
        }
        ligar() {
            this.motor.liga = true;
        }
        desligar() {
            this.motor.liga = true;
        }
        get minhaCor() {
            return this.cor;
        }
        get meuNome() {
            return this.nome;
        }
        get estouLigado() {
            return (this.motor.liga ? "Sim" : "Não");
        }
        get minhaPotencia() {
            return this.motor.potencia;
        }
    }
    Veiculos.Carro = Carro;
    class CarroEsportivo extends Carro {
        constructor(nome, cor) {
            super(nome, new Motores.Motor(6, 300, new Motores.Turbo(100)), 0);
        }
    }
    Veiculos.CarroEsportivo = CarroEsportivo;
    class CarroPopular extends Carro {
        constructor(nome, cor) {
            super(nome, new Motores.Motor(2, 87), 4);
        }
    }
    Veiculos.CarroPopular = CarroPopular;
})(Veiculos || (Veiculos = {}));
var Motores;
(function (Motores) {
    class Turbo {
        pot;
        constructor(pot) {
            this.pot = pot;
        }
        get potencia() {
            return this.pot;
        }
    }
    Motores.Turbo = Turbo;
    class Motor {
        ligado;
        _cilindros;
        pot;
        constructor(cilindros, pot, turbo) {
            this.ligado = false;
            this._cilindros = cilindros;
            this.pot = pot + (turbo ? turbo.potencia : 0);
        }
        set liga(ligado) {
            this.ligado = ligado;
        }
        get liga() {
            return this.ligado;
        }
        get potencia() {
            return this.pot;
        }
        get cilindros() {
            return this._cilindros;
        }
    }
    Motores.Motor = Motor;
})(Motores || (Motores = {}));
const carro1 = new Veiculos.CarroEsportivo("Ford ", 0);
const carro2 = new Veiculos.CarroPopular("Fiat", 4);
carro1.ligar();
console.log(`Nome......:${carro1.meuNome}`);
console.log(`Cor.......:${carro1.minhaCor}`);
console.log(`Potencia..:${carro1.minhaPotencia}`);
console.log(`Ligado....:${carro1.estouLigado}`);
console.log("-----------------------------------");
console.log(`Nome......:${carro2.meuNome}`);
console.log(`Cor.......:${carro2.minhaCor}`);
console.log(`Potencia..:${carro2.minhaPotencia}`);
console.log(`Ligado....:${carro2.estouLigado}`);
console.log("-----------------------------------");
