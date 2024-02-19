"use strict";
function logar(user, pass) {
    console.log(`User..:${user}`);
    console.log(`Senha: ${pass}`);
}
logar('bruno', '123');
logar('teste', '000');
function soma2(n1, n2) {
    let r = n1 + n2;
    return r;
}
let n_res = soma2(10, 5);
let s_res = soma2(2, 8).toString();
console.log(n_res);
console.log(s_res);
