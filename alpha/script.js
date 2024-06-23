document.addEventListener("DOMContentLoaded", function() {
    const elementoContador = document.getElementById('contador');
    const elementoMensagem = document.getElementById('mensagem');
    let vagas = 487; // Início com 487 vagas
    const maxVagas = 500; // Número máximo de vagas
    let reducoesFeitas = 0; // Controla a quantidade de vezes que a contagem foi reduzida
    const maxReducoes = Math.floor(Math.random() * 3) + 1; // Número máximo de reduções entre 1 e 3

    function atualizarContador() {
        if (vagas < maxVagas) {
            // Define quando diminuir uma vaga de forma aleatória
            if (reducoesFeitas < maxReducoes && (Math.random() < 0.1)) { // 10% de chance de reduzir a cada atualização
                vagas--; // Decrementa vagas
                reducoesFeitas++; // Incrementa o número de reduções feitas
            } else if (vagas < maxVagas) {
                vagas++; // Incrementa vagas
            }
            elementoContador.textContent = vagas;
        }

        if (vagas < maxVagas) {
            setTimeout(atualizarContador, Math.random() * 1500 + 2000); // Aumenta o intervalo para dar aspecto de incremento gradual e lento
        } else {
            elementoContador.style.color = '#d00'; // Muda a cor para vermelho uma vez que atinge 500
            elementoMensagem.textContent = 'Maximum capacity! Stay here, your access is assured.';
            elementoMensagem.style.opacity = '1'; // Torna a mensagem visível
        }
    }
    atualizarContador(); // Iniciar o processo
});