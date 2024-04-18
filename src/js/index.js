//OBJETIVO 1 - quando clicar no botão do personagem na lista, marcar o botão como selecionado

//passo 1 - pegar os botões no JS pra poder verificar quando o usuário clicar em ciada de um deles.
const botoes = document.querySelectorAll(".botao");

//OBEJETIVO 2 - quando cliar no botão do personagem mostrar as informações do personagem
//passo 1 - pegar os persoagens no JS pra poder mostrar ou esconder ele.
const personagens = document.querySelectorAll(".personagem");
console.log(personagens);

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        //passo 3 - verificar se já existe um botão slecionado, se sim, remover a seleção dele.
        const botaoSelecionado = document.querySelector(".botao.selecionado");
        botaoSelecionado.classList.remove("selecionado");

        //passo 2 - adicionar a classe "selecionado" no botão que o usuário clicou.
        botao.classList.add("selecionado");

        //OBJETIVO 2 - passo 3 - veirficar se já existe um personagem selecionado, se sim, devemos remover a seleção dele.
        const personagemSelcionado = document.querySelector(".personagem.selecionado");
        personagemSelcionado.classList.remove("selecionado");

        //OBJETIVO 2 - passo 2 - adicionar a classe "slecionado" no personagem que o usuário selecionou.
        personagens[indice].classList.add("selecionado")

        });

})










