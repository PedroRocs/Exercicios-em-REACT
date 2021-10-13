import React from 'react'

 function Exercicio9() {
  alert("Calcular a area de uma circuferencia");
  let valor1= parseInt(prompt("Informe o raio da circuferencia: "));
 
  alert("A area do circulo é "+(Math.PI*valor1**2).toFixed(2));
}



export default Exercicio9
