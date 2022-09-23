let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0 ;
let maior = 0;
let impares = 0;
let menor = numbers[0];
let novoArray = [];

/! Parte 1  / 
for(let i = 0 ; i < numbers.length ; i++){ 
    console.log(numbers[i]);
    soma = soma + numbers[i];
    if(numbers[i]>maior){
        maior = numbers[i];
    }
    if(numbers[i]%2 !== 0){
        impares++;
    }
    if(numbers[i] < menor){
        menor = numbers[i];
    }
}
/! Parte 2 / 
console.log(soma);
/! Parte 3 /
let media = soma / numbers.length ;
console.log(media);
/! Parte 4 /
if(media > 20){
    console.log("Valor maior que 20");
}else{
    console.log("Valor menor ou igual a 20");
}
/! Parte 5 /
console.log(maior);
/! Parte 6 /
if(impares > 0){
    console.log(impares);
} else{
    console.log("nenhum valor ímpar encontrado");
}
/! Parte 7 /
console.log(menor);
/! Parte 8 /
for(let j = 1 ; j <= 25 ; j++){
    novoArray.push(j);
}
console.log(novoArray);
/! Parte 9 /
for(let result of novoArray){
    console.log(result/2);
}


