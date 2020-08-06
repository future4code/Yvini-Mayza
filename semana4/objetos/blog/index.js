// 2 - Capture os valores dos campos do HTML e crie um objeto para armazenar as informações do seu post, possuindo as mesmas propriedades que serão preenchidas no formulário.


let posts = [
    {titulo: "",
    autor: "",
    conteudo: ""},
]
let i = 0;

function criarPost(){
     posts[i].titulo = document.getElementById('titulo-post').value
     posts[i].autor = document.getElementById('autor-post').value
     posts[i].conteudo = document.getElementById('conteudo-post').value
    

    posts.push( {titulo: `${posts.titulo}`,autor: `${posts.autor}`,conteudo: `${posts.conteudo}`})
    
    

    document.getElementById('titulo-post').value = ""
    document.getElementById('autor-post').value = ""
    document.getElementById('conteudo-post').value = ""

    let container = document.getElementById('container-de-posts')

    container.innerHTML += `<article class="post">
                                <h2>${posts[i].titulo}<h2>
                                <h4> Autor: ${posts[i].autor}</h4> 
                                <p>${posts[i].conteudo} .... <a href="#">ler mais</a></p>
                            <article>`
                            i++;
// 3 - Ao preencher o formulário, adicione o objeto criado no passo acima a um array de objetos e limpe os campos do formulário. Para testar, faça com que o array seja impresso no console.

// 4 - **Na mesma página**, crie uma seção no HTML que será responsável por mostrar os posts. Pode ser uma div ou uma section, por exemplo.

// 5 - Crie uma função responsável por inserir os posts no HTML. Não se preocupe com a aparência, garanta que os dados estão sendo exibidos.2 - Capture os valores dos campos do HTML e crie um objeto para armazenar as informações do seu post, possuindo as mesmas propriedades que serão preenchidas no formulário.

}

function apertouEnter(event){
    if(event.key === "Enter"){
        criarPost()
    }
    
}