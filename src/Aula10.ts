//NULL - UNDEFINED - UNKNOWN

//NULL - NUlo
//UNDEFINED - Indefinido
//UNKNOWN - Desconhecido

let vnome: string|null;
vnome=null;
console.log(vnome);


let vnome2:any;
console.log(vnome2)
//UNDEFINED


let vnome3:unknown=10;  //unknown só pode ser atribuídos a tipos unknown ou any
let vnum:any=vnome3;
console.log(vnum)
