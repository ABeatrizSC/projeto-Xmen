/* 
  O que precisamos fazer? - quando passar o mouse em cima do personagem na lista temos que adicionar a borda azul de seleção na imagem pequena do personagem e mostrar a imagem, o nome e o texto grande do personagem que está selecionado
*/

//OBJETIVO 1 - quando passar o mouse em cima do personagem na listagem, devemos selecioná-lo

    //PASSO 1 - pegar os personagens no JS pra poder verificar quando o usuário passar o mouse em cima de um deles

const listaPersonagens = document.querySelectorAll('.personagem') //buscar todos os elementos que tenham a classe ".personagem". A variável recebeu uma lista com todos os elementos que possuem essa classe

   //Agora precisamos adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse, e para isso é necessário utilizar o "addEventListener", mas ele SÓ FUNCIONA EM ELEMENTO ÚNICO! Não funciona em listas, então é preciso percorrer a lista toda de personagems e usar o add em cada elemento dela! 

listaPersonagens.forEach(personagem => { //para cada personagem dessa lista de personagens:

    personagem.addEventListener('mouseenter', () => { //ao que o cursor do mouse entra:

        if(window.innerWidth < 450){ //se o acesso ao site for por uma janela menor que 450
            window.scrollTo({top: 0, behavior: 'smooth'})
        }

    //PASSO 2 - verificar se já existe um personagem selecionado, se sim, devemos remover a seleção dele:

        const personagemSelecionado = document.querySelector('.selecionado') //recebe o personagem que tenha a classe "selecionado"
        personagemSelecionado.classList.remove('selecionado') //e então remove a classe "selecionado" deste personagem, para que só um personagem por vez tenha ela

    //PASSO 3 - adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse

        personagem.classList.add('selecionado') 
        
    //OBJETIVO 2 - quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande

    //PASSO 1 - pegar o elemento do personagem grande pra adicionar as informações nele

        const imagemPersonagemGrande = document.querySelector('.img-personagem-grande') //recebe o elemento que tenha a classe ".img-personagem-grande", ou seja, as imagens

    //PASSO 2 - alterar a imagem do personagem grande

        //Queremos alterar a imagem do personagem grande conforme passamos o cursor do mouse.Para isso, como todos os nomes das imagens são iguais e só se muda o nome do personagem (ex: card-vampira.png e card-jean-grey.png), criamos uma variável que receberá o id de cada personagem e depois uma template string com a parte padrão do caminho de todas as imagens
        
        const idPersonagem = personagem.attributes.id.value 
        imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`

    //PASSO 3 - alterar o nome do personagem grande

        const nomePersonagem = document.getElementById('nome-personagem')
        nomePersonagem.innerText = personagem.getAttribute('data-name') //buscar o atributo data-name do personagem

    //data-name="" atributo adicionado em todos os personagens - passa um dado ao JS

    //PASSO 4 - alterar a descrição do personagem grande 

        const descricaoPersonagem = document.getElementById('descricao-personagem')
        descricaoPersonagem.innerText = personagem.getAttribute('data-description')

    //data-description="" atributo adicionado em todos os personagens - passa um dado ao JS    
    }) 
}) 

 
