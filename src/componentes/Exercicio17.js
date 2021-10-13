import React from 'react'

 function Exercicio17() {
  alert("Escreva um algoritmo para ler uma temperatura em graus Fahrenheit, calcular e escrever o valor correspondente em graus Celsius");
  let F= parseFloat(prompt("Informe a temperatura em Fahrenheit "));
  let conv = (F-32)*5/9;
  alert(F+"°F EQUIVALE A "+conv+"°C");
}

export default Exercicio17
