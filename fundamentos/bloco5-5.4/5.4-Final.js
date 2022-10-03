let input = document.getElementById('input');
let titulo = document.getElementById('titulo');

input.addEventListener('input',mudarFundo);

function mudarFundo(evento){
    let texto = evento.target.value;
    titulo.style.color = texto;
}