document.addEventListener('DOMContentLoaded', () => {
    const btnIniciar = document.getElementById('btn-iniciar');
    const btnBingo = document.getElementById('btn-bingo');
    const btnReiniciar = document.getElementById('btn-reiniciar');
    const listaNumeros = document.getElementById('lista-numeros');

    let numerosSorteados = [];
    let jogoAtivo = false;

    btnIniciar.addEventListener('click', () => {
        if (!jogoAtivo) {
            jogoAtivo = true;
            numerosSorteados = [];
            listaNumeros.innerHTML = ''; // Limpa a lista
            btnIniciar.disabled = true;
            btnBingo.disabled = false;
            btnReiniciar.disabled = true;
            sortearNumero();
        }
    });

    btnBingo.addEventListener('click', () => {
        jogoAtivo = false;
        btnBingo.disabled = true;
        btnReiniciar.disabled = false;
    });

    btnReiniciar.addEventListener('click', () => {
        jogoAtivo = false;
        numerosSorteados = [];
        listaNumeros.innerHTML = '';
        btnIniciar.disabled = false;
        btnBingo.disabled = true;
        btnReiniciar.disabled = true;
    });

    function sortearNumero() {
        if (!jogoAtivo) return;

        let numero;
        do {
            numero = Math.floor(Math.random() * 60) + 1;
        } while (numerosSorteados.includes(numero));

        numerosSorteados.push(numero);
        const itemLista = document.createElement('li');
        itemLista.textContent = numero;
        listaNumeros.appendChild(itemLista);

        // Sorteio contínuo (ajuste o intervalo conforme desejar)
        setTimeout(sortearNumero, 5500); // Sorteia a cada 5.5 segundos
    }
});
