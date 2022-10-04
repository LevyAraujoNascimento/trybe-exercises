let inputFundo = document.getElementById('inputFundo');
let inputTexto = document.getElementById('inputTexto');
let titulo = document.getElementById('titulo');
let corpo = document.getElementById('corpo');
let loremIpsum = document.getElementById('loremIpsum');

inputFundo.addEventListener('input',mudarFundo);
inputTexto.addEventListener('input',mudarCorTexto);

function mudarFundo(evento){
    let texto = evento.target.value;
    corpo.style.backgroundColor = texto;
}

function mudarCorTexto(evento){
    let texto = evento.target.value;
    loremIpsum.style.color = texto;
}