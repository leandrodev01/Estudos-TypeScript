
namespace Veiculos{
    enum Cores{"Preto", "Branco", "Amarelo", "Azul", "Prata"}
  export abstract class Carro{
        private nome:string
        private motor:Motores.Motor
        private cor:string
        constructor(nome:string, motor:Motores.Motor, cor:Cores){
            this.nome=nome
            this.motor=motor
            this.cor=Cores[cor]

            //constructor Motores.Motor(cilindros: number, pot: number, turbo?: Turbo | undefined): Motores.Motor

        }
        public ligar(){
            this.motor.liga=true
        }
        public desligar(){
            this.motor.liga=true
        }
        get minhaCor (){
            return this.cor
        }
        get meuNome(){
            return this.nome
        }
        get estouLigado(){
            return (this.motor.liga?"Sim":"Não")
        }
        get minhaPotencia(){
            return this.motor.potencia  
        }
    }
        
    export class CarroEsportivo extends Carro{
        constructor(nome:string, cor:Cores){
            super(nome,new Motores.Motor(6,300, new Motores.Turbo(100)),0)
            
        }
    }

    export class CarroPopular extends Carro{
        constructor(nome:string, cor:Cores){
            super(nome,new Motores.Motor(2,87),4)
            
        }
    }

}


namespace Motores{

    export class Turbo{
        private pot:number
        constructor(pot:number){
            this.pot=pot
        }
        get potencia() {
            return this.pot
        }
    }



  export class Motor{
        private ligado:boolean
        private _cilindros:number
        private pot:number
        constructor(cilindros:number,pot:number, turbo?:Turbo){
            this.ligado=false
            this._cilindros=cilindros
            this.pot=pot + (turbo?turbo.potencia:0)
          
         }
         set liga (ligado:boolean){
            this.ligado=ligado

         }

        get liga (){
            return this.ligado
        
        }

        get potencia (){
            return this.pot
        }

        get cilindros (){
            return this._cilindros
        }

    }
}


const carro1= new Veiculos.CarroEsportivo("Ford ",0)
const carro2= new Veiculos.CarroPopular("Fiat",4)

carro1.ligar ()


console.log(`Nome......:${carro1.meuNome}`)
console.log(`Cor.......:${carro1.minhaCor}`)
console.log(`Potencia..:${carro1.minhaPotencia}`)
console.log(`Ligado....:${carro1.estouLigado}`)
console.log("-----------------------------------")

console.log(`Nome......:${carro2.meuNome}`)
console.log(`Cor.......:${carro2.minhaCor}`)
console.log(`Potencia..:${carro2.minhaPotencia}`)
console.log(`Ligado....:${carro2.estouLigado}`)
console.log("-----------------------------------")



