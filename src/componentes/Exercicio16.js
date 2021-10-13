import React from 'react'

 function Exercicio16() {
  alert("Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês,mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele efetuadas. Escrever um algoritmo que leia o número de carros por ele vendidos, o valor total de suas vendas, o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do vendedor.  ");
   

  let carros_vendidos=parseInt(prompt("Quantos carros foram vendidos: "));
  let carros_valor = parseFloat(prompt("Quantos você recebe por carro vendido: "));
  let vendas = parseFloat(prompt("Qual foi o valor das suas vendas no mês: "));
  let salario = parseFloat(prompt("Qual o valor do seu salario: "));

  let comissao=vendas*0.05;
  let total = (carros_vendidos*carros_valor)+comissao+salario ;
  
  alert("O salario final do vendedor vai ser de R$"+(total).toFixed(2));
}



export default Exercicio16
