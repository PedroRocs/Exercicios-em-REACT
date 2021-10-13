import React from 'react'

function Exercicio25() {

  alert(" Ler quatro números inteiros e apresentar o resultado da adição e multiplicação, baseando-se na utilização do conceito da propriedade distributiva. Ou seja, se forem lidas as variáveis A, B, C, e D, devem ser somadas e multiplicadas A com B, A com C e A com D. Depois B com C, B com D e por fim C com D. Perceba que será necessário efetuar seis operações de adição e seis operações de multiplicação e apresentar doze resultados de saída.")

 let valor1=parseInt(prompt("Informe o valor A: "));  
 let valor2=parseInt(prompt("Informe o Valor B: "));  
 let valor3=parseInt(prompt("Informe o Valor C: "));  
 let valor4=parseInt(prompt("Informe o Valor D: "));

 alert("Valor A + Valor B = "+(valor1+valor2)+"\nValor A + Valor C = "+(valor1+valor3)+"\nValor A + Valor D = "+(valor1+valor4)+"\nValor B + Valor C = "+(valor2+valor3)+"\nValor B + Valor D = "+(valor2+valor4)+"\nValor C + Valor D = "+(valor3+valor4));

 alert("Valor A X Valor B = "+(valor1*valor2)+"\nValor A X Valor C = "+(valor1*valor3)+"\nValor A X Valor D = "+(valor1*valor4)+"\nValor B X Valor C = "+(valor2*valor3)+"\nValor B X Valor D = "+(valor2*valor4)+"\nValor C X Valor D = "+(valor3*valor4));


  }








export default Exercicio25