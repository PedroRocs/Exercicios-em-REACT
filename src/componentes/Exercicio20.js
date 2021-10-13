import React from 'react'

 function Exercicio20() {
  alert("Ler uma temperatura em graus Fahrenheit e apresentá-la convertida em graus Celsius. A fórmula de conversão é C ← (F - 32) * (5/9) , sendo F a temperatura em Fahrenheit e C a temperatura em Celsius. ");
  let F= parseFloat(prompt("Informe a temperatura em Fahrenheit "));
  let conv = (F-32)*5/9;
  alert(F+"°F EQUIVALE A "+conv+"°C");
}



export default Exercicio20
