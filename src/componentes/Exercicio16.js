import React from 'react'

 function Exercicio16() {
     
  let carros_vendidos=parseInt(prompt("Quantos carros foram vendidos: "));
  let carros_valor = parseFloat(prompt("Quantos você recebe por carro vendido: "));
  let vendas = parseFloat(prompt("Qual foi o valor das suas vendas no mês: "));
  let salario = parseFloat(prompt("Qual o vlaor do seu salario: "));

  let comissao=vendas*0.05;
  let total = (carros_vendidos*carros_valor)+comissao+salario ;
  
  alert("O salario final do vendedor vai ser de R$"+(total).toFixed(2));
}



export default Exercicio16
