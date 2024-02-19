//PROGRAMAÇÃO ORIENTADA A OBJETO


class computador{
    private id : number=0
    public nome:string
    private ram:number
    private cpu:number
    protected ligado:boolean=false;

    //public - alterável de qq lugar
    //private - alterável somento pela classe
    //protected - alterável pelas classe filhas - herança 


    constructor(nome:string,ram:number, cpu:number) {
        this.nome=nome;
        this.ram=ram;
        this.cpu=cpu;
        this.ligado=false;
        this.id=0;
    }


    info():void{
        console.log(`Nome..:${this.nome}`);
        console.log(`Ram...:${this.ram}`);
        console.log(`Cpu...:${this.cpu}`);
        console.log(`Ligado:${this.ligado?"SIM":"NÂO"}`);
        console.log("---------------------------------");
    }
//Forma de proteger o parâmetro LIGADO ou DESLIGADO 

    ligar():void{
        this.ligado=true
    }

    desligar():void{
        this.ligado=false
    }

    upRam(qtde:number):void{
        if(qtde >=0 && qtde<=100){
        this.ram=qtde
        }

        else
        console.log(`Quantidade de ram ${qtde} para o computador ${this.nome} não é permitido(a)`)

    }
}

//INSTANCIAR UMA CLASSE = CRIAR UMA CLASSE
const comp1= new computador("Dell",63,3.7)
const comp2= new computador("POSITIVO", 32,2.9)
const comp3= new computador("SAMSUNG",128,4.9)


/* DESTA FORMA OU DA SEGUINTE
comp1.ligado =true;  
comp3.ligado = true;
*/

comp1.ligar();
comp3.ligar();
comp1.desligar();

comp2.upRam(-250)

comp1.info();
comp2.info();
comp3.info();
