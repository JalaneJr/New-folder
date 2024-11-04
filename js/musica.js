// jogo.js
function mostrarMusica() {
    const secoes = document.querySelectorAll('section');
    secoes.forEach(secao => secao.classList.remove('conteudo-visivel'));
    
    const secaoMusica= document.getElementById('musica');
    if (secaoMusica) {
        secaoMusica.classList.add('conteudo-visivel');
    } else {
        console.error('Seção "Jogo" não encontrada.');
    }
}
