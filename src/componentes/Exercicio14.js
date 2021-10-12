import React from 'react'

function Exercicio14() {
  
     
    let salario= parseFloat(prompt("INFORME O SEU SALARIO: "));
    let reajuste= parseFloat(prompt("INFORME O PORCENTUAL DE REAJUSTE: "));
  
    let total = (salario*reajuste/100)+salario;
  
    alert("O salario a ser recebido após o reajuste vai ser de "+total);
  
  }




export default Exercicio14