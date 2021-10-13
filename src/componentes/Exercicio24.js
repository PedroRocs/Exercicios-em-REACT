import React from 'react'

 function Exercicio24() {
     
  let a= parseInt(prompt("Digite um valor para a variavel A: "));
  let b= parseInt(prompt("Digite um valor para a variavel B: "));

   a = b+a;
   b = a-b;
   a = a-b;   
  
   alert("A = "+a+"\nB = "+b);
}



export default Exercicio24
