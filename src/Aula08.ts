let dados={
    nome:"José",
    idade:25,
    status:"A",
    ola:()=>{console.log("Oi")},
    info:(p:string)=>{console.log(p)}
}

dados.nome ="Maria"


console.log(typeof(dados));
console.log(dados.nome);

dados.ola()
dados.info(dados.nome)