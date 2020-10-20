// EXERCICIO 2

const operation = process.argv[2];
const number1 = Number(process.argv[3]);
const number2 = Number(process.argv[4]);

switch(operation){
    case "sum":
        console.log(number1+number2)
    break

    case "sub":
        console.log(number1-number2)
    break
    case "div":
        console.log(number1/number2)
    break

    case"mult":
        console.log(number1*number2)
    break

    default:
        console.log("Operação não encontrada")
    break

}