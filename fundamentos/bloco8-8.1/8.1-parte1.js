// Ao chamar a função doingThings:
const acorde = () => 'Acordando!!';
const cafe = () => 'Bora tomar café!!';
const dormir = () => 'Partiu dormir!!';

const doingThings = (wakeUp) => {
    let x = wakeUp();
    console.log(x);
};

doingThings(acorde);
doingThings(cafe);
doingThings(dormir);
// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!