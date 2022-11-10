const valorDado = () => Math.round(Math.random() * 20);

const testePromise = () => new Promise((resolve, reject) => {
   if (valorDado() > 10) {
    resolve('Passou !!!');
   } else {
    reject('Não passou !!!');
   } 
});

testePromise().then((response) => console.log(response)).catch((error) => console.log(error)).finally(() => console.log('Top !!!'));