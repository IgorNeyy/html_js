// definindo constantes e variáveis
const form = document.getElementById("form-deposito");
let campoA = document.getElementById("campo-a");
let campoB = document.getElementById("campo-b");

// mudando a função do botão enviar
form.addEventListener("submit", function(e) {
    // inutilizando a função enviar
    e.preventDefault();

    // Constante ligada ao elemento "<p>" com o id "mensagem-resposta"
    const mensagemResposta = document.getElementById("mensagem-resposta");
    // Mensagem caso B seja maior que A
    const mensagemCasoB = "O valor do campo B é maior que o campo A.";
    // Caso A seja maior que B
    const mensagemCasoA = "O valor do campo A é maior que o campo B.";
    // Caso sejam iguais
    const mensagemCasoIguais = "B e A possuem valores iguais.";

    // Condição que vai emitir a mensagem para o usuário
    if (campoB.value > campoA.value) {
        mensagemResposta.innerHTML = mensagemCasoB;
        mensagemResposta.style.display = "block";
    } else if (campoB.value == campoA.value) {
        mensagemResposta.innerHTML = mensagemCasoIguais;
        mensagemResposta.style.display = "block";
    } else {
        mensagemResposta.innerHTML = mensagemCasoA;
        mensagemResposta.style.display = "block";
    }
});
