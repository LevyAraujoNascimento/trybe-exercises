let cont = document.getElementById("contador"); 
let botao = document.getElementById("botao");
let clicks = 0;

botao.addEventListener("click", contando);

function contando(){
    clicks ++;
    console.log(clicks);
    cont.innerText = `Contador: ${clicks}`;
};