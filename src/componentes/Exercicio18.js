import React from 'react'

 function Exercicio18() {
     
  alert("Faça um algoritmo que leia três notas de um aluno, calcule e escreva a média final deste aluno. Considerar que a média é ponderada e que o peso das notas é 2, 3 e 5. Fórmula para o cálculo  da média final é: ")

  let nota1= parseInt(prompt("Informe a primeira nota: "));
  let nota2= parseInt(prompt("Informe a segunda nota: "));
  let nota3= parseInt(prompt("Informe a terceira nota: "));
  let mediaPonderada = (nota1*2 + nota2*3 + nota3 * 5) /10; 
  alert("A média ponderada das notas é "+ mediaPonderada );
}



export default Exercicio18
