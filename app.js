let matriz = ['','','','','','','','',''];
let isActive = true;
let jogadorAtual = 'X';
let win = false;
function cliqueCelula(cell) {
    const celula = cell.target;
    const numeroCelula = celula.classList.value;

    if( (isActive) && matriz[numeroCelula] === '') {
        mudaMatriz(celula, numeroCelula);
        verificaVitoria();
    }
}
function mudaMatriz(celula, numeroCelula) {
    celula.innerHTML = jogadorAtual;
    matriz[numeroCelula] = jogadorAtual;
}
function verificaVitoria() {
    const conditions = [
        ['0','1','2'],
        ['3','4','5'],
        ['6','7','8'],
        ['0','3','6'],
        ['1','4','7'],
        ['2','5','8'],
        ['0','4','8'],
        ['2','4','6']
    ]

    for(let i = 0; i < 9; i++) {
        let a = conditions[i][0];
        let b = conditions[i][1];
        let c = conditions[i][2];

        if(matriz[a] === '' || matriz[b] === '' || matriz[c] === '') {
            continue;
        }
        if(matriz[a] === matriz[b] && matriz[b] === matriz[c]) {
            win = true;
            break;
        }
    }
    if(win) {
        isActive = false;
        //COLOCA MENSAGEM QUE O JOGADOR ATUAL GANHOU
        return;
    }
    if(!(matriz.contain(''))) {
        isActive = false;
        //COLOCA MENSAGEM QUE DEU VELHA
        return;
    }
    mudaJogador();
}

document.querySelectorAll('.row div').forEach((cell) => cell.addEventListener('click', (element) => cliqueCelula(element)));