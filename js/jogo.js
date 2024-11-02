// jogo.js
function mostrarJogo() {
    const secoes = document.querySelectorAll('section');
    secoes.forEach(secao => secao.classList.remove('conteudo-visivel'));
    
    const secaoJogo = document.getElementById('jogo');
    if (secaoJogo) {
        secaoJogo.classList.add('conteudo-visivel');
    } else {
        console.error('Seção "Jogo" não encontrada.');
    }
}
