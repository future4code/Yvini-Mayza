// EXERCICIO 3

const task = process.argv[2]
const taskList =["Lavar a louça","Comprar Leite"]

const addTask = (task) => {
    taskList.push(...taskList,task)
    return console.log(`Tarefa adicionada com sucesso! Tarefa:, ${taskList}`)
};
addTask(task)