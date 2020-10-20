const countries = require("./countries")

// Exercicio 1
// const name = process.argv[2];
// const age = Number(process.argv[3]);
// console.log("Olá, " ,name ,"!Você tem " ,age ,"anos. Em sete anos você terá ", age +7 )

// EXERCICIO 2

// const operation = process.argv[2];
// const number1 = Number(process.argv[3]);
// const number2 = Number(process.argv[4]);

// switch(operation){
//     case "sum":
//         console.log(number1+number2)
//     break

//     case "sub":
//         console.log(number1-number2)
//     break
//     case "mult":
//         console.log(number1*number2)
//     break

//     case"div":
//         console.log(number1/number2)
//     break

//     default:
//         console.log("Operação não encontrada")
//     break

// }

// EXERCICIO 3

const task = process.argv[2]
const taskList =["Lavar a louça","Comprar Leite"]

const addTask = (task) => {
    taskList.push(...taskList,task)
    return console.log(`Tarefa adicionada com sucesso! Tarefa:, ${taskList}`)
};
addTask(task)



