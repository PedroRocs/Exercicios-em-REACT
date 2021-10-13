import React from 'react'

 function Exercicio28() {
     
  let dolar= parseFloat(prompt("Quantos Dólares(US$) você quer converter para Real(R$): "));
  let cotacao_dolar= parseFloat(prompt("Qual a cotação do dólar para Real(R$) : "));
  let conv = dolar*cotacao_dolar;
  alert("US$"+dolar.toFixed(2)+" convertido para Real é igual a R$"+conv.toFixed(2));
}



export default Exercicio28
