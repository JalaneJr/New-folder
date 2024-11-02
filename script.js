// Função para mostrar apenas a seção selecionada
function mostrarSecao(id) {
    // Seleciona todas as seções
    const secoes = document.querySelectorAll('section');

    // Oculta todas as seções
    secoes.forEach(secao => {
        secao.classList.remove('conteudo-visivel');
    });

    // Seleciona a seção específica pelo ID e exibe-a
    const secaoSelecionada = document.getElementById(id);
    if (secaoSelecionada) {
        secaoSelecionada.classList.add('conteudo-visivel');
    } else {
        console.error(`Seção com ID "${id}" não encontrada.`);
    }
}
