interface curso{
    titulo:string
    des:string
    aulas:number
    maxAlunos?:number
    //? torna o parâmetro opcional 
    //iniciarCurso?(teste:string):void;
}

let curso1:curso
let curso2:curso
let curso3:curso



curso1={titulo:"typescript",des:"Curso de Typescript",aulas:100,maxAlunos:50,}
curso2={titulo:"javscript",des:"Curso de Javascript",aulas:200,maxAlunos:80,}
curso3={titulo:"C++",des:"Curso de C++",aulas:50}

console.log(curso1)
console.log(curso2)
console.log(curso3)

