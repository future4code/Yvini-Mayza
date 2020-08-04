

                                            //  EXERCICIO 1 

// a. O que vai ser impresso no console?
 // Será impreso os números 10 e 50 

//  b.  O que aconteceria se retirasse os dois console.log e simplesmente invocasse a função minhaFuncao(2) e minhaFuncao(10)? O que apareceria no console?
//  O console apenas executara a ultima funcão . Aparecia o número 50 , pois ele executa a ultima função escrita 



                                            // EXERCICIO 2 

// a. Explicite quais são as saídas impressas no console
//  É impresso no console apenas os dois primeiros nomes, pois o laço de repetição, está indo só até o número 2,
// (i < 2 ), fazendo com que o laço percorra até o indice 1 do array de nomes



// b. Se `arrayDeNomes` mudasse de valor para `["Amanda", "Caio"]`, o que vai ser impresso no console?
// Será impresso no console, Amanda e Caio cada um em seu console...


                                                    // EXERCICIO 3
//  function verificaSeEPar (array) {
//     let arrayFinal = [];
  
//     for (let x of array) {
        
//           if (x % 2 === 0) {
//           arrayFinal.push(x * x)
          
//           }
//     }
  
//     return arrayFinal;
//   }

// const arrayDeNumeros = [1, 2, 3, 4 ]
// const resultado = verificaSeEPar(arrayDeNumeros)
// console.log(resultado)



                                                // Exercicio4

// a- function informacoes (){
//      console.log("Eu sou a Yvini, tenho 18 anos, moro em São Paulo")
//  }
//     informacoes()

// b-
    //  let nome, idade, cidade, estudante;

    // nome = prompt("Nome:")
    // idade = Number(prompt("idade:"))
    // cidade = prompt("cidade:")
    // estudante = confirm("Você é Estudante? ")

    //  function informacoes (nome , idade , cidade , estudante){
    //     console.log("Eu sou a "+ nome + " , tenho " + idade + " anos, moro em " + cidade + " e "+ estudante)

    // }
    
    // if(estudante ){
    //         estudante = "Sou estudante"
    //  }else{
    //         estudante = "Não sou estudante"
    // }

    // informacoes(nome, idade, cidade, estudante)

                          
                                                                    // EXERCICIO5
    // A-
    // function soma(a,b){
    // const somaDois = a + b
    // return somaDois
    // }
                                                    
    // console.log(soma(10,5))

    // B-
        
    //   function maiorOuIgual (a, b){
    //      return a >= b 
    //   }
    //   console.log(maiorOuIgual(10, 40))
      
    //   C- 
    //   function mensagem(texto){
    //     for(let i=0;i<=9;i++){
    //         console.log(texto)
    //     }
    // }

    // console.log(mensagem("Mensagem Teste"))


                                                // EXERCICIO6

//     // Para os itens a seguir, considere o seguinte array para os seus testes:
//    // a. Escreva uma função que receba um array de números e devolva a quantidade de elementos nele

const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

//    const tamanhoArray = (array)=> {
//    const tamanho = array
//     return tamanho.length
//  }

//  console.log(tamanhoArray(array))

//  B-
// function ParOuImpar(numero){
//     numero % 2 === 0
//     if(true){
//         console.log(`O ${numero} é Par`)
//     }else{
//         console.log(`O ${numero} é impar`)
//     }
// }

// ParOuImpar(10)

// c. Escreva uma função que receba um array de números e devolva a quantidade de números pares dentro dele

function arrayPar(array){
    let contador = 0;

    for(let i=0;i<=array.length;i++){
        if(array[i] % 2 === 0){
            contador += 1;
        }
    }
    return contador;
}

  console.log(arrayPar(array))