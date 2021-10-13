import React from 'react'
import Exercicio1 from './Exercicio1'
import Exercicio10 from './Exercicio10';
import Exercicio11 from './Exercicio11';
import Exercicio12 from './Exercicio12';
import Exercicio13 from './Exercicio13';
import Exercicio14 from './Exercicio14';
import Exercicio15 from './Exercicio15';
import Exercicio16 from './Exercicio16';
import Exercicio2 from './Exercicio2';
import Exercicio3 from './Exercicio3';
import Exercicio4 from './Exercicio4';
import Exercicio5 from './Exercicio5';
import Exercicio6 from './Exercicio6';
import Exercicio7 from './Exercicio7';
import Exercicio8 from './Exercicio8';
import Exercicio9 from './Exercicio9';
import Exercicio17 from './Exercicio17';
import Exercicio18 from './Exercicio18';
import Exercicio19 from './Exercicio19';
import Exercicio20 from './Exercicio20';
import Exercicio21 from './Exercicio21';
import Exercicio22 from './Exercicio22';
import Exercicio23 from './Exercicio23';
import Exercicio24 from './Exercicio24';
import Exercicio25 from './Exercicio25';
import Exercicio26 from './Exercicio26';
import Exercicio27 from './Exercicio27';
import Exercicio28 from './Exercicio28';
import Exercicio29 from './Exercicio29';
import Exercicio30 from './Exercicio30';




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
            case "16":
                Exercicio16()
                break;
            case "17":
                Exercicio17();
                break;
            case "18":
                Exercicio18();
                break;
            case "19":
                Exercicio19();
                break;
            case "20":
                Exercicio20();
                break;
            case "21":
                Exercicio21();
                break;
            case "22":
                Exercicio22();
                break;
            case "23":
                Exercicio23();
                break;
            case "24":
                Exercicio24();
                break;
            case "25":
                Exercicio25();
                break;
            case "26":
                Exercicio26();
                break;
            case "27":
                Exercicio27();
                break;
            case "28":
                Exercicio28();
                break;
            case "29":
                Exercicio29();
                break;
                case "30":
                    Exercicio30();
                    break;
        
    
        default:
            console.log("Concluido");

    }
}
escolha();

export default escolha