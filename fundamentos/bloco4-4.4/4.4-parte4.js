var x = 10;
var y = 9;
var z = 8;

function soma(a,b){
    return a + b; 
}

function subtração(a,b){
    return a - b; 
}

function multiplicação(a,b){
    return a * b; 
}

function divisão(a,b){
    return a / b; 
}

function modulo(a,b){
    return a % b; 
}

function maiorDeDoisNumero(a,b){
    if( a > b ){
        return a;
    }else if( b > a ){
        return b;
    }else{
        return "Iguais";
    } 
}

function maiorDeTresNumero(a,b,c){
    if( a > b && a > c ){
        return a; 
    }else if( b > a && b > c ){
        return b;
    }else if( c > a && c > a){
        return c;
    }
} 

console.log(soma(x,y));
console.log(subtração(x,y));
console.log(multiplicação(x,y));
console.log(divisão(x,y));
console.log(modulo(x,y));
console.log(maiorDeDoisNumero(x,y));
console.log(maiorDeTresNumero(x,y,z));

