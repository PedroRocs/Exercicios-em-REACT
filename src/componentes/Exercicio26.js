import React from 'react'

 function Exercicio26() {
     
  let comprimento= parseFloat(prompt("INFORME O COMPRIMENTO DA CAIXA(cm): "));
  let largura= parseFloat(prompt("INFORME A LARGURA DA CAIXA (cm): "));
  let altura= parseFloat(prompt("INFORME A ALTURA DA CAIXA (cm): "));

  let volume = comprimento*largura*altura;

  alert("O VOLUME DA CAIXA É DE "+volume+"cm³");

  
}
  




export default Exercicio26
