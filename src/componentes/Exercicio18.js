import React from 'react'

 function Exercicio18() {
     
  let nota1= parseInt(prompt("Informe a primeira nota: "));
  let nota2= parseInt(prompt("Informe a segunda nota: "));
  let nota3= parseInt(prompt("Informe a terceira nota: "));
  let mediaPonderada = (nota1*2 + nota2*3 + nota3 * 5) /10; 
  alert("A média ponderada das notas é "+ mediaPonderada );
}



export default Exercicio18
