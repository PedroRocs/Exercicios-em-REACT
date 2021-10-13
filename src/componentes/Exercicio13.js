import React from 'react'

 function Exercicio13() {
  alert("Escreva um algoritmo para ler o número total de eleitores de um município, o número de votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total de eleitores. ");
  let brancos = parseInt(prompt("Informe quanto votos em brancos ocorreu no municipio: "));
  let nulos = parseInt(prompt("Informe quantos votos em nulos ocorreu no municipio: "));
  let validos = parseInt(prompt("Informe quantos votos em validos ocorreu no municipio "));

  let total = brancos + nulos + validos;
  brancos = brancos * 100 / total;
  nulos = nulos * 100 / total;
  validos = validos * 100 / total;

  alert("O total de votos foi de " + total + ".\nEm relação ao total, " + brancos + "% foram votos brancos, " + nulos + "% foram votos nulos e " + validos + "% foram votos validos.");
}




export default Exercicio13
