import React from 'react'

function Exercicio24() {
  alert("Ler dois valores (inteiros, reais ou caracteres) para as variáveis A e B, e efetuar a troca dos valores de forma que a variável A passe a possuir o valor da variável B e a variável B passe a possuir o valor da variável A. Apresentar os valores trocados ")
  let a = parseFloat(prompt("Digite um valor para a variavel A: "));
  let b = parseFloat(prompt("Digite um valor para a variavel B: "));
  let c = a;
    a = b;
    b = c;


  alert("A = " + a + "\nB = " + b);
}



export default Exercicio24