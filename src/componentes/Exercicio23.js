import React from 'react'

 function Exercicio23() {
     
  let valorPrestacao= parseFloat(prompt("Informe o valor da prestação: "));
  let taxa = parseFloat("Informe a taxa mensal a se pagar no caso de atraso(%)");
  let atraso = parseInt(prompt("Informe o tempo de atraso: "));
  let total = (valorPrestacao*taxa/100)* atraso;
  alert("O total a ser pago vai ser de R$"+total.toFixed(2));
}



export default Exercicio23
