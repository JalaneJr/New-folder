// mensagem-dia.js
function mostrarMensagemDia() {
    const secoes = document.querySelectorAll('section');
    secoes.forEach(secao => secao.classList.remove('conteudo-visivel'));
    
    const secaoMensagem = document.getElementById('mensagem-dia');
    if (secaoMensagem) {
        secaoMensagem.classList.add('conteudo-visivel');
    } else {
        console.error('Seção "Mensagem do Dia" não encontrada.');
    }
}
