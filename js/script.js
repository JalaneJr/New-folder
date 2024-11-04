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
function slidePainel(direction) {
    const container = document.querySelector('.painel-opcoes-wrapper');
    const scrollAmount = 200; // Ajuste a distância do deslize
    container.scrollBy({ left: scrollAmount * direction, behavior: 'smooth' });
}
