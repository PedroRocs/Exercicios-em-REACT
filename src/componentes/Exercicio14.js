import React from 'react'

function Exercicio14() {
  
  alert("Escreva um algoritmo para ler o salário mensal atual de um funcionário e o percentual de reajuste. Calcular e escrever o valor do novo salário. ");
    let salario= parseFloat(prompt("INFORME O SEU SALARIO: "));
    let reajuste= parseFloat(prompt("INFORME O PORCENTUAL DE REAJUSTE: "));
  
    let total = (salario*reajuste/100)+salario;
  
    alert("O salario a ser recebido após o reajuste vai ser de "+total);
  
  }




export default Exercicio14