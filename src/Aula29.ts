function f_teste<T,U>(v:T,r:U):U{
   return r
}

console.log(f_teste<number,string>(10,"9"))
console.log(f_teste<string,number>("8",5))
console.log(f_teste<boolean,boolean>(true,false))