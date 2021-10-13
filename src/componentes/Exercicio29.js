import React from 'react'

 function Exercicio29() {
     alert("Elaborar um programa que efetue a apresentação do valor da conversão em dólar de um valor lido em real. O programa deve solicitar o valor da cotação do dólar e também a quantidade de reais disponível com o usuário, para que seja apresentado o valor em moeda americana. ")
  let real= parseFloat(prompt("Quantos Reais(R$) você quer converter para Dolar(US$): "));
  let cotacao_dolar= parseFloat(prompt("Qual a cotação do dólar para Real(R$) : "));
  let conv = real/cotacao_dolar;
  alert("r$"+real.toFixed(2)+" convertido para Dolar é igual a US$"+conv.toFixed(2));
}

export default Exercicio29
