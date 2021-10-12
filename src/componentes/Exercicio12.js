import React from 'react'

 function Exercicio12() {
     
  let valor1= parseInt(prompt("Digite quantos anos você tem : "));
  let valor2= parseInt(prompt("Quantos meses fazem que você fez aniversario: "));
  let valor3 =parseInt(prompt("Quantos dias de diferença tem entre o dia do seu aniversario e o final do mês: "));
  alert("Sua idade em dias é "+(365*valor1+30*valor2-valor3));
}



export default Exercicio12
