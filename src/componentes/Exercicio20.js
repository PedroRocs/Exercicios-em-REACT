import React from 'react'

 function Exercicio20() {
     
  let F= parseFloat(prompt("Informe a temperatura em Fahrenheit "));
  let conv = (F-32)*5/9;
  alert(F+"°F EQUIVALE A "+conv+"°C");
}



export default Exercicio20
