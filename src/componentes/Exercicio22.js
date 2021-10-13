import React from 'react'

 function Exercicio22() {
     
  let tempo = parseFloat(prompt("Informe o tempo gasto na viagem em (H): "));
  let  velocidade = parseFloat(prompt("Informe a velocidade média: "));
  let distancia = tempo*velocidade;
  let LitrosUSados = distancia/12; 
  alert("O carro percorreu uma distancia de"+distancia+"KM,\na uma velocidade de "+velocidade+"KM/H em "+tempo+" horas,\ndurante o percursso foi gasto "+LitrosUSados+" litros de combustivel");
}



export default Exercicio22
