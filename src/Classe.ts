const Coisas=["Corda","Pilha","Lampada","Chave"]

class Pessoa{
    nome:string
    altura:number
    constructor(nome:string,altura:number){
        this.nome=nome
        this.altura=altura
    }
}

class Objeto{
    nome:string;
    constructor(nome:string){
        this.nome=nome
    }
}

export{Coisas, Pessoa, Objeto}
// Ao invés de exportar um a um eu gerencio de maneira conjunta 

export default Pessoa
// Ao fazer export default o impor deve ser feito separado das chaves ou em outra linha
// default - elemento padrão
