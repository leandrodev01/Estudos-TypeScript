abstract class Conta{
    private readonly numero:number
    protected titular:string
    private saldoconta:number

    constructor(titular:string){
        this.numero=this.gerarNumeroConta()
        this.titular=titular
        this.saldoconta=0
    }

    private gerarNumeroConta():number{
        return Math.floor(Math.random()*100000)+1;
    }
    protected info(){
        console.log(`Titular:${this.titular}`)
        console.log(`Numero..:${this.numero}`)
        console.log(`-----------------------`)
    }
    get saldo():number{//GETTER
        return this.saldoconta
        //Ao add get não é necessario fzer duplos parenteses no console.log(cont1.saldo())
        //o termo public é opicional 

        /*public saldo():number{
        return this.saldoconta
        }*/

    }

    set saldo(saldoconta:number){//SETTER
        this.saldoconta=saldoconta

    }
    
    protected deposito(valor:number){
        if(valor<0){
            console.log(`Valor Invalido`)
            return
        }
        this.saldoconta +=valor
    }
    protected saque(valor:number){
        if(valor<0){
            console.log(`Valor Invalido`)
            return
        }
        if(valor<= this.saldoconta){
            this.saldoconta -=valor 
        }
        else{
            console.log(`SALDO INSUFICIENTE`)
        }
       
    }
}

//extends - herda de Conta

class ContaPf extends Conta{
    cpf:number
    constructor(cpf:number,titular:string){
        super(titular)
        this.cpf=cpf
        
        //Trocar o private pelo protected - classe filho acessa classe pai 
    }
    info(){
        console.log(`Tipo....CPF`)
        super.info()
        console.log(`CPF....:${this.cpf}`)
        console.log(`---------------------`)
    }
    public deposito(valor:number){
        if(valor>1000){
            console.log(`Depósito acimda do permitido` )
        }
        else{
            super.deposito(valor)
        }
       
    }
     public saque(valor: number){
        if(valor>1000){
            console.log(`Saque acima do permitido`)
        }
        else{
            super.saque(valor)
        }
    }
}

class ContaPj extends Conta{
    cnpj:number
    constructor(cnpj:number,titular:string){
        super(titular)
        this.cnpj=cnpj
        
    }
    info(){
        console.log(`Tipo....PJ`)
        super.info()
        console.log(`CNPJ....:${this.cnpj}`)
        console.log(`---------------------`)
    }
    public deposito(valor:number){
        if(valor>10000){
            console.log(`Depósito acimda do permitido` )
        }
        else{
            super.deposito(valor)
        }
       
    }
     public saque(valor: number){
        if(valor>10000){
            console.log(`Saque acima do permitido`)
        }
        else{
            super.saque(valor)
        }
        
    }
}

const cont1=new ContaPf(349,"Bruno")
const cont2=new ContaPj(167,"CFBCursos")
 
//console.log(cont1)
//console.log(cont2)

cont1.deposito(1000)
//cont1.saque(100)
//cont1.saque(9.75)
cont1.saldo=250

console.log(cont1.saldo)

//cont2.deposito(9000)
//console.log(cont2.saldo())

/*cont1.info()
cont2.info()

console.log(cont1.saldo())
console.log(cont2.saldo())*/