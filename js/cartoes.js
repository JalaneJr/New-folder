// cartoes.js
function mostrarCartoes() {
    const secoes = document.querySelectorAll('section');
    secoes.forEach(secao => secao.classList.remove('conteudo-visivel'));
    
    const secaoCartoes = document.getElementById('cartoes-notificacao');
    if (secaoCartoes) {
        secaoCartoes.classList.add('conteudo-visivel');
    } else {
        console.error('Seção "Cartões" não encontrada.');
    }
}
