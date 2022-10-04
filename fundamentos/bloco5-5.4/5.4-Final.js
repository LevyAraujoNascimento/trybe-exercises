let inputFundo = document.getElementById('inputFundo');
let inputTexto = document.getElementById('inputTexto');
let inputTamanhoFonte = document.getElementById('inputTamanhoTexto');
let titulo = document.getElementById('titulo');
let corpo = document.getElementById('corpo');
let loremIpsum = document.getElementById('loremIpsum');

inputFundo.addEventListener('input',mudarFundo);
inputTexto.addEventListener('input',mudarCorTexto);
inputTamanhoFonte.addEventListener('input',mudarTamanhoFonte);

function mudarFundo(evento){
    let texto = evento.target.value;
    corpo.style.backgroundColor = texto;
}

function mudarCorTexto(evento){
    let texto = evento.target.value;
    loremIpsum.style.color = texto;
}

function mudarTamanhoFonte(evento){
    let texto = evento.target.value;
    if(texto === ""){
        loremIpsum.style.fontSize = "16px";
    }else{
    loremIpsum.style.fontSize = texto + "px";
    }
}
