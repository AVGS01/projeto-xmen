const personagens = document.querySelectorAll(".personagem");

//PERSONAGENS//

personagens.forEach(personagem => {
    personagem.addEventListener("mouseenter", () => {

        if(window.innerWidth < 450){
            window.scrollTo({top: 0, behavior: "smooth" });
        }

        removerSelecaoPersonagem();

        personagem.classList.add("selecionado");

        //IMAGENS//

        alterarImamgemPersonagemSelecionado(personagem);

        //NOMES//

        alterarNomePersonagemSelecionado(personagem);

        //DESCRICAO//

        alterarDescricaoPersonagemSelecionado(personagem);

    })
})

function alterarDescricaoPersonagemSelecionado(personagem) {
    const descricaoPersonagem = document.getElementById("descricao-personagem");

    descricaoPersonagem.innerText = personagem.getAttribute("data-description");
}

function alterarNomePersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById("nome-personagem");

    nomePersonagem.innerText = personagem.getAttribute("data-name");
}

function alterarImamgemPersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector(".personagem-grande");

    const idPersonagem = personagem.attributes.id.value;

    imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
}

function removerSelecaoPersonagem() {
    const personagemSelecionado = document.querySelector(".selecionado");

    personagemSelecionado.classList.remove("selecionado");
}
