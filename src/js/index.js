const botao = document.querySelector(".btn-plataforma");
const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");
botao.addEventListener("click", () => {
    // const botaoAberto = elementoPlataformas.classList.contains("ativo");
    elementoPlataformas.classList.toggle("ativo");
    // if(botaoAberto) {
    //     elementoPlataformas.classList.remove("ativo");
    // }
    // else {
    //     elementoPlataformas.classList.add("ativo");
    // }
});