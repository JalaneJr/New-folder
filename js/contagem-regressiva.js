// contagem-regressiva.js
function mostrarContagemRegressiva() {
    const secoes = document.querySelectorAll('section');
    secoes.forEach(secao => secao.classList.remove('conteudo-visivel'));
    
    const secaoContagem = document.getElementById('contagem-regressiva');
    if (secaoContagem) {
        secaoContagem.classList.add('conteudo-visivel');
    } else {
        console.error('Seção "Contagem Regressiva" não encontrada.');
    }
}
