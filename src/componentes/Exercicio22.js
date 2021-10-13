import React from 'react'

 function Exercicio22() {
     alert("Efetuar o cálculo da quantidade de litros de combustível gasta em uma viagem, utilizando um automóvel que faz 12 Km por litro. Para obter o cálculo, o usuário deve fornecer o tempo gasto (TEMPO) e a velocidade média (VELOCIDADE) durante a viagem. Desta forma, será possível obter a distância percorrida com a fórmula DISTANCIA ← TEMPO * VELOCIDADE. Possuindo o valor da distância, basta calcular a quantidade de litros de combustível utilizada na viagem com a fórmula LITROS_USADOS ← DISTANCIA / 12. Ao final, o programa deve apresentar os valores da velocidade média (VELOCIDADE), tempo gasto na viagem (TEMPO), a distancia percorrida (DISTANCIA) e a quantidade de litros (LITROS_USADOS) utilizada na viagem.");
  let tempo = parseFloat(prompt("Informe o tempo gasto na viagem em (H): "));
  let  velocidade = parseFloat(prompt("Informe a velocidade média: "));
  let distancia = tempo*velocidade;
  let LitrosUSados = distancia/12; 
  alert("O carro percorreu uma distancia de"+distancia+"KM,\na uma velocidade de "+velocidade+"KM/H em "+tempo+" horas,\ndurante o percursso foi gasto "+LitrosUSados+" litros de combustivel");
}



export default Exercicio22
