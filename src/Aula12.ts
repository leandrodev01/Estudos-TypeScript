function logar(user:string,pass:string):void{
    console.log(`User..:${user}`);
    console.log(`Senha: ${pass}`);

}
logar('bruno','123');
logar('teste','000');

function soma2(n1:number,n2:number):number{
    let r= n1 + n2;
    return r

}

let n_res:number=soma2(10,5);
let s_res:string=soma2(2,8).toString();

console.log(n_res);
console.log(s_res);




/*
function teste():void{
    console.log("Teste");

    //void é usado quando a função retorna nada se não for chamada(teste());
}

teste();
teste();
teste();

retorna teste 3vezes
*/

