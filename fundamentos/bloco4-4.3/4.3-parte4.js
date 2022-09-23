let maiorPrimo = 1;
for(let i = 2 ; i<=50 ; i++){
    let divPrimo = 0;
    for(let j = 1 ; j <= i ; j++ ){
       if(i%j === 0){
         divPrimo ++;
       }
    }
    if( divPrimo === 2){
        if(i > maiorPrimo){
           maiorPrimo = i;
        }
    }
}

console.log(maiorPrimo);