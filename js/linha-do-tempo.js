// linha-do-tempo.js
function mostrarLinhaDoTempo() {
    const secoes = document.querySelectorAll('section');
    secoes.forEach(secao => secao.classList.remove('conteudo-visivel'));
    
    const secaoLinhaDoTempo = document.getElementById('linha-do-tempo');
    if (secaoLinhaDoTempo) {
        secaoLinhaDoTempo.classList.add('conteudo-visivel');
    } else {
        console.error('Seção "Linha do Tempo" não encontrada.');
    }
}
