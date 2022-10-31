// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Maça', 'Banana', 'Uva'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Doce de Leite', 'Pizza', 'Bolo'];

const fruitSalad = (fruit, additional) => {
  // Escreva sua função aqui
  return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));