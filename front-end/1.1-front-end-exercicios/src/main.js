import { nanoid } from 'nanoid'
import "./style.css";

const botao = document.querySelector('button');
const text = document.querySelector('h2');

botao.addEventListener('click', () => {
    text.innerText = nanoid();
});