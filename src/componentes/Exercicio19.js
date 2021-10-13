import React from 'react'

 function Exercicio19() {
  alert("Ler uma temperatura em graus Celsius e apresentá-la convertida em graus Fahrenheit. A fórmula de conversão é F ← (9 * C + 160) / 5, sendo F a temperatura em Fahrenheit e C a temperatura em Celsius.")
  let C= parseInt(prompt("Informe a temperatura em Celsius(°C):  "));
let conv = (9*C +160)/5;
  alert(C+"°C EQUIVALE A "+conv+"°F");
}



export default Exercicio19
