enum dias{
    domingo=1,
    segunda=2,
    terca=3, 
    quarta=4, 
    quinta=5,
    sexta=6,
    sabado=7, 
}

//console.log(dias.domingo);
//console.log(dias['quarta']);
//console.log(dias[3]);

const d= new Date()

//console.log(d.getDate());
//console.log(dias[d.getDay()]);


enum tipoUsuario{
    USER,
    ADMIN,
    SUPER,
}

console.log(tipoUsuario.SUPER);