import React from 'react'

 function Exercicio15() {
     
    alert(" O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do distribuidor e dos impostos aplicados ao custo de fábrica. Supondo que o percentual do distribuidor seja de 28% e os impostos de 45%, escrever um algoritmo para ler o custo de fábrica de um carro,calculare escrever o custo final ao consumidor.");

let carro = parseFloat(prompt("INFORME O CUSTO DE FABRICA DO CARRO"));
let total = (carro*28/100+carro*45/100)+carro;
alert("O CUSTO FINAL DO CARRO VAI SER DE: "+total);

}
export default Exercicio15
