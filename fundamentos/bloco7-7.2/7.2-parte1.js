const verificar = () => {
    if(typeof(x) !== "number" || typeof(y) !== "number"){
        throw new Error("Precisar ser número");
    }
} 

const soma = () => {
    try{
        verificar();
        return x+y;
    }catch(e){
        return e.message;
    }
}

let x = 3;
let y = "Levy";

console.log(isNaN(y));
console.log(typeof(x));
console.log(typeof(y));
console.log(soma(x,y));