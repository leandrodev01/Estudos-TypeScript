//Arrow Function ou Função de Seta 

const teste=(txt?:string):void=>{
    console.log(txt);
}

const fsoma2=(n:number[]):number=>{
    let s:number=0;
    n.forEach((e)=>{
        s+=e;
    })
    return s;
}

teste("CFBCursos");
teste("Curso Typescript");
teste("Youtube");
teste("KEEP GOING")

let numer:number[]=[10,20,30,40,50,60,70,80,90,100]

console.log(fsoma2(numer))