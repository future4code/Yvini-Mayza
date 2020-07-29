// // Explique o que o código faz. Qual o teste que ele realiza? Para que tipos de números ele imprime no console 
// // "Passou no teste"? Para que tipos de números a mensagem é "Não passou no teste"? 
                        // EXERCICIO 1:
// RESPOSTA: foram criadas duas const  uma com o prompt para o usuario digitar algo, 
// no const numero ele ta tranformando o que o usuario digitou em numero 
// no if ele está pegando o número digitado pelo o usuario e comparando o resto da divisão por 2 com o 0
// tem dois consoles.log retornando para o usuario se passou no teste ou não... Realiza a verificação se o número é impar ou par. 
// "passou no teste" significa que são números pares e "não passou no teste " significa que o núemro é impar


                            // EXERCICIO 2
// RESPOSTA: foram criados dois let , um fruta com um prompt para o usuario digitar e let preço para aparecer o preço no fim para o usuario
// o switch é uma tomada de decisão que verifica o qu eo usuario digitou e retornar o case correspondente, e no final tem um console.log que 
// informa ao usuario qual é a fruta e o preço dela . Esssa é uma forma de simplificar o if e else, pois compara a variavel como case. 
 
// B- O preço da fruta  Maçã é R$ 2.25 

// C-O preço da fruta  Pêra é R$ 5.5 . Enquanto não houver um break ele não vai parar, pois vai cair no proximo case 
// até que haja um break 

                        // EXERCICIO 3

// A- Foi criada um const numero com o Number e prompt para o ususario digitar algum número ....
// B- Quando o usuario digitar o número 10 aparece a mensagem "esse número passou no teste ", e se 
// ele digitar o número -10 não aparece nada pois não tem um else retornando para o usuario.
// C- Sim , pois foi criado um escopo no if com {} e fecha no let , mas como o let está dentro do escopo 
// do if, o console que está fora do escopo do if não consegue reconhecer a variavel mensagem.

                        //  EXERCICIO 4

//  let idade = Number(prompt("Digite sua idade"))

//  if(idade>=18){
//       console.log("Você pode dirigir")
//  }else{
//      console.log("Você não pode dirigir")
//  }
                                // EXERCICIO 5

//  let turno = prompt("Digite o turno que você estuda M (matutino) ou V (Vespertino) ou N (Noturno).")
 
//  if(turno === "M"){
//          console.log("Bom dia !")
//  } else if(turno === "V"){
//         console.log("Boa tarde !")
//  }else if(turno === "N"){
//         console.log("Boa noite")
//  }
//  else{
//      console.log("Eroo, tente novamente")
//  }
//                                 // EXERCICIO 6

//  let turno = prompt("Digite o turno que você estuda M (matutino) ou V (Vespertino) ou N (Noturno).")

//  switch(turno){
//      case "M":
//       console.log("Bom dia")
//       break
//      case "V":
//          console.log("Boa tarde")
//       break
//       case "N":
//           console.log("Boa noite")
//         break
//     default:
//         console.log("Turno não encontrado")
//         break
//  }

                                        //    Exercicio 7
let filme = prompt("qual é o gênero do filme?")
let ingresso = prompt("quanto custa o ingresso ?")     

if(filme === "fantasia"  && ingresso <=15){
            console.log("Bom filme")
}else {
     console.log("Escolha outro filme")
}