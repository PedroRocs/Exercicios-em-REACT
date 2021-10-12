import React from 'react'
import Exercicio1 from './Exercicio1'
import Exercicio10 from './Exercicio10';
import Exercicio11 from './Exercicio11';
import Exercicio12 from './Exercicio12';
import Exercicio13 from './Exercicio13';
import Exercicio14 from './Exercicio14';
import Exercicio15 from './Exercicio15';
import Exercicio2 from './Exercicio2';
import Exercicio3 from './Exercicio3';
import Exercicio4 from './Exercicio4';
import Exercicio5 from './Exercicio5';
import Exercicio6 from './Exercicio6';
import Exercicio7 from './Exercicio7';
import Exercicio8 from './Exercicio8';
import Exercicio9 from './Exercicio9';

function escolha() {
    let escolhaExercicio = prompt("Qual exercicio deseja ver: ")

    switch (escolhaExercicio) {
        case "1":
            Exercicio1();
            break;
        case "2":
            Exercicio2();
            break;
        case "3":
            Exercicio3();
            break;
        case "4":
            Exercicio4();
            break;
        case "5":
            Exercicio5();
            break;
        case "6":
            Exercicio6();
            break;
        case "7":
            Exercicio7();
            break;
        case "8":
            Exercicio8();
            break;
        case "9":
            Exercicio9();
            break;
        case "10":
            Exercicio10();
            break;
        case "11":
            Exercicio11();
            break;
        case "12":
            Exercicio12();
            break;
        case "13":
            Exercicio13();
            break;
        case "14":
            Exercicio14();
            break;
        case "15":
            Exercicio15();
            break;



        default:
            console.log("Concluido");

    }
}
escolha();

export default escolha