// linha-do-tempo.js
let eventoAtual = 1;  // Evento atual desbloqueado

// Função para mostrar o evento atual
function mostrarLinhaDoTempo() {
    const secaoLinhaDoTempo = document.getElementById('linha-do-tempo');
    if (secaoLinhaDoTempo) {
        secaoLinhaDoTempo.classList.add('conteudo-visivel');
        mostrarEvento(eventoAtual);
    } else {
        console.error('Seção "Linha do Tempo" não encontrada.');
    }
}

// Função para mostrar um evento específico
function mostrarEvento(indice) {
    const evento = document.getElementById(evento-$,{indice});
    if (evento) {
        evento.classList.add('aberto');
    }
}

// Função para desbloquear o próximo evento
function proximoEvento() {
    if (eventoAtual < 22) {
        eventoAtual++;
        mostrarEvento(eventoAtual);
    }
}

// Função para mostrar o vídeo ao finalizar a linha do tempo
function mostrarVideo() {
    alert("Parabéns! Você chegou ao fim da Linha do Tempo! Agora assista ao vídeo de comemoração.");
    // Aqui você pode substituir a função de alert por algo como abrir um modal com o vídeo ou redirecionar para a página do vídeo.
}

// Inicializar o primeiro evento ao carregar a página
mostrarLinhaDoTempo();