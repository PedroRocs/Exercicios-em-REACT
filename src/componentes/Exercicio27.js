import React from 'react'

function Exercicio27() {
  alert("Ler dois inteiros (variáveis A e B) e imprimir o resultado do quadrado da diferença do primeiro valor pelo segundo.");
  let valor1 = parseInt(prompt("Digite um valor: "));
  let valor2 = parseInt(prompt("Digite outro valor: "));
  if (valor1 > valor2) {
    alert("A diferença entre dois valores é de " + (valor1 - valor2) + " que elevado ao quadrado é igual a " + (valor1 - valor2) ** 2)
  } else {
    alert("A diferença entre dois valores é de " + (valor2 - valor1) + " que elevado ao quadrado é igual a " + (valor2 - valor1) ** 2)

  }
}



export default Exercicio27