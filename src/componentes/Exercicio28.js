import React from 'react'

 function Exercicio28() { 
   alert("Elaborar um programa que efetue a apresentação do valor da conversão em real de um valor lido em dólar. O programa deve solicitar o valor da cotação do dólar e também a quantidade de dólares disponível com o usuário, para que seja apresentado o valor em moeda brasileira.  ")
  let dolar= parseFloat(prompt("Quantos Dólares(US$) você quer converter para Real(R$): "));
  let cotacao_dolar= parseFloat(prompt("Qual a cotação do dólar para Real(R$) : "));
  let conv = dolar*cotacao_dolar;
  alert("US$"+dolar.toFixed(2)+" convertido para Real é igual a R$"+conv.toFixed(2));
}



export default Exercicio28
