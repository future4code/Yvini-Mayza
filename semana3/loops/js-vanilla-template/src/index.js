//   let valor = 0
//         for(let i = 0; i > 5; i++) {
//             valor += i
//         }

//         1 execução
//         valor = 0
//         i = 0

//         2 execução
//         valor = 1
//         i = 1
        
//         3 execução
//         valor = 3
//         i = 2

//         4 execução
//         valor = 6
//         i = 3

//         5 execução
//         valor = 10
//         i = 4


//         console.log(valor)

        // 1 O que o código abaixo está fazendo? Qual o resultado impresso no console?
        
        // Resposta: O código cria uma variável (valor) que recebe 0, depois cria um laço de repetição for com uma variavel "i"
        // que recebe 0. O laço vai executar o bloco de código dentro das chaves, enquanto o i for menor do que 5 e incrementar 1 ao "i". 
        // O console log vai imprimir o valor 10, que é o valor final da iteração na variável "valor"


        
        const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
        for (let numero of lista) {
            if (numero > 18) {
                console.log(numero)
            }
        }

        // 2a. O que vai ser impresso no console?
        // Resposta: Será impresso apenas os números que são maiores que 18 

        // b. Se eu quisesse acessar o índice de cada elemento dessa lista, o for...of... é suficiente? Se sim, o que poderia ser usado para fazer isso?
        // Resposta:  Para acessar o índice, seria necessário usar o  for... in.... ao invés de of, pois o in retorna o indice e o of retorna
        // o conteúdo de cada item.


        // 3a 

        let arrayoriginal = [200,24,563,92,230,47,89]


        // a. Escreva um programa que:
        // - *Imprima* cada um dos valores do array original.

        for(let valor of arrayoriginal){
            console.log(valor)
        }


        // b. Escreva um programa que:
        // - *Imprima* cada um dos valores do array original divididos por 10

        for(let valor of arrayoriginal){
            console.log(valor / 10)
        }

        // c. Escreva um programa que:
        // - *Crie* um novo array contendo, somente, os números pares do array original.
        // - *Imprima* esse novo array

        let arraynovo = []
        let contador = 0

        for(let item of arrayoriginal){
            if(item % 2 === 0){
                arraynovo[contador] = item
                contador++
            }
        }
        console.log(arraynovo)



        // d. Escreva um programa que:
        // - *Crie* um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`"
        // - *Imprima* este novo array

        let arrayString = [];
        let indice = 0

        for(item of arrayoriginal){
            arrayString[indice] = `O elemento do ${indice} é: ${item}`
            indice++;
        }

        console.log(arrayString)

        

        // e. Escreva um programa que imprima no console o maior e o menor números contidos no array original

        let maior;
        let menor;
        maior = arrayoriginal[0]
        menor = arrayoriginal[0]


        for(item of arrayoriginal){
            if(maior < item){
                maior = item;
            }

             if(menor > item ){
                 menor = item
             }
        }
        console.log(arrayoriginal)
        console.log("Maior número do array Original: " + maior)
        console.log("Menor número do array Original: " + menor)