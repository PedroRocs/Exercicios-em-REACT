import React from 'react'

 function Exercicio21() {
     alert("Calcular e apresentar o valor do volume de uma lata de óleo, utilizando a fórmula: Volume Raio ** Altura");
  let raio= parseInt(prompt("Informe o raio da circuferencia: "));
  let altura = parseInt(prompt("Informe a altura da circuferencia: "));
  let area = Math.PI*raio**2*altura;
  alert("A area da circuferencia é:"+area);
}



export default Exercicio21
