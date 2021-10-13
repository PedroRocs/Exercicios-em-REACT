import React from 'react'

 function Exercicio12() {
  alert("Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e escreva a idade dessa pessoa expressa apenas em dias. Considerar ano com 365 dias e mês com 30 dias. ");
  let valor1= parseInt(prompt("Digite quantos anos você tem : "));
  let valor2= parseInt(prompt("Quantos meses fazem que você fez aniversario: "));
  let valor3 =parseInt(prompt("Quantos dias de diferença tem entre o dia do seu aniversario e o final do mês: "));
  alert("Sua idade em dias é "+(365*valor1+30*valor2-valor3));
}



export default Exercicio12
