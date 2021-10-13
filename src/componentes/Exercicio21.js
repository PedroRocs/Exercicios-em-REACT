import React from 'react'

 function Exercicio21() {
     
  let raio= parseInt(prompt("Informe o raio da circuferencia: "));
  let altura = parseInt(prompt("Informe a altura da circuferencia: "));
  let area = Math.PI*raio**2*altura;
  alert("A area da circuferencia é:"+area);
}



export default Exercicio21
