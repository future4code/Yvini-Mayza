/* 1-EXERCICIOS DE INTERPRETAÇÃO   
A- false
B- false 
C- true
E- boolean
*/

/* 2
a.  undefined
 b.  null
 c.  11
 d.  3
 e.  (11) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
 f.  9
*/


/*exercicio de escrita */

let idade = prompt("qual é sua idade?")
console.log(idade)


let amiga = prompt("qual é a idade do seu melhor amigo?")
console.log(Number(idade) >= Number(amiga))

const diferenca = Number(idade) - Number (amiga)
console.log ("a diferença de idades são", diferenca)

/* 2*/
let numero =Number(prompt("insira um número par "))
console.log(numero %2)

/* c 
 Quando é colocado o número impar sempre tem sobra algum número e quando é par nunca sobra algum numero.
 
D-
 Quando é impar sempre sobra o número 1 
*/

/*3-*/

let listaDeTarefas= []
listaDeTarefas[0] =prompt("Digite 3 tarefas que você faz no dia ?")
listaDeTarefas[1] =prompt("Digite 3 tarefas que você faz no dia ?")
listaDeTarefas[2] =prompt("Digite 3 tarefas que você faz no dia ?")
console.log (listaDeTarefas)
 
let indice = prompt ("digite 0, 1, 2")
console.log (indice)

listaDeTarefas.splice(indice, 1)

console.log(listaDeTarefas)

/*4*/
let nome = prompt("digite seu nome")
let email = prompt("digite seu e-mail")
alert("O e-mail "+email+" foi cadastrado com sucesso. Seja bem-vinda(o), "+nome)











