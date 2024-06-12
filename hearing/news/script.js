document.addEventListener('DOMContentLoaded', function() {
    const dateDisplay = document.getElementById('dateDisplay');
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateDisplay.innerText = date.toLocaleDateString('en-US', options);
});

document.getElementById('menu-toggle').addEventListener('click', function() {
    var nav = document.getElementById('nyt-nav');
    nav.classList.toggle('active'); // Alternar a classe 'active'
});

// Função para iniciar o contador regressivo
function startCountdown() {
    var timerElement = document.getElementById('timer');
    var timeLeft = 119; // 1:59 em segundos

    // Atualiza o contador a cada segundo
    var countdownInterval = setInterval(function() {
        var minutes = Math.floor(timeLeft / 60);
        var seconds = timeLeft % 60;

        // Formata o tempo restante como mm:ss
        var formattedTime = minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
        timerElement.textContent = formattedTime;

        // Verifica se o tempo acabou
        if (timeLeft === 0) {
            clearInterval(countdownInterval);
            timerElement.textContent = 'Time\'s up!';
        } else {
            timeLeft--; // Decrementa o tempo restante
        }
    }, 1000); // Atualiza a cada segundo
}

// Chama a função de iniciar o contador assim que a página for carregada
window.addEventListener('load', startCountdown);

//Contador de vagas disponíveis

let vagas = 23;
const elementoVagas = document.getElementById('vagas');
let tempoInicial = new Date().getTime();
let tempoMinimo = 60000; // 60 segundos

function atualizarVagas() {
    let tempoAtual = new Date().getTime();
    
    // Ajusta a probabilidade de diminuir para 85% enquanto houver mais de 1 vaga
    if (vagas > 1) {
        const diminuir = Math.random() < 0.85;
        const quantidade = Math.floor(Math.random() * 3) + 1;

        if (diminuir && vagas > 0) {
            vagas -= quantidade;
        } else if (!diminuir && vagas < 23) {
            vagas += quantidade;
        }

        if (vagas > 23) vagas = 23;
        if (vagas < 0) vagas = 0;
    } else if (tempoAtual - tempoInicial >= tempoMinimo) {
        // Alternar entre 0 e 1 vagas quando o tempo mínimo foi atingido
        vagas = vagas === 0 ? 1 : 0;
    }

    // Atualiza o display de vagas
    elementoVagas.textContent = vagas;

    // Continua a agendar atualizações
    setTimeout(atualizarVagas, Math.random() * 3000 + 500); // Atualiza em um intervalo de 0.5 a 3.5 segundos
}

// Iniciar o processo
atualizarVagas();