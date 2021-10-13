import React from 'react'

 function Exercicio30() {
     alert("Elaborar um programa que efetue a leitura de três valores (A, B e C) e apresente como resultado final à soma dos quadrados dos três valores lidos.")
  let valor1= parseInt(prompt("Informe o primeiro valor: "));
  let valor2= parseInt(prompt("Informe a segundo valor: "));
  let valor3= parseInt(prompt("Informe a terceiro valor: "));
  
  let total = valor1**2+valor2**2+valor3**2;

  alert("A soma dos quadrados dos valores lidos é de "+total);
}

export default Exercicio30
