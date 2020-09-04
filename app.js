const msg = document.querySelector('.msg--status');
let matriz = ['','','','','','','','',''];
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
let isActive = true;
let jogadorAtual = 'X';
msg.textContent = 'Jogador X';

function cliqueCelula(cell) {
    const celula = cell.target;
    const numeroCelula = celula.classList.value;

    if( (isActive) && matriz[numeroCelula] === '') {
        mudaMatriz(celula, numeroCelula);
        verificaVitoria();
    }
}
function mudaMatriz(celula, numeroCelula) {
    celula.innerHTML = `<p>${jogadorAtual}</p>`;
    matriz[numeroCelula] = jogadorAtual;
}
function verificaVitoria() {
    let win = false;
    let a,b,c = 0;
    for(let i = 0; i < 8; i++) {
        a = conditions[i][0];
        b = conditions[i][1];
        c = conditions[i][2];

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
        msg.textContent = `Parabens! Jogador ${jogadorAtual} venceu`;
        return;
    }
    if(!(matriz.includes(''))) {
        isActive = false;
        msg.textContent = `Deu Velha`;
        return;
    }
    mudaJogador();
}

function mudaJogador() {
    jogadorAtual = jogadorAtual==='X'?'O':'X';
    msg.textContent = `Jogador ${jogadorAtual}`;
}

function limpaTela() {
    matriz.fill('');
    document.querySelectorAll('.row div').forEach((cell) => cell.innerHTML = '');
    msg.textContent = 'Jogador X';
    jogadorAtual = 'X';
    isActive = true;
}

document.querySelectorAll('.row div').forEach((cell) => cell.addEventListener('click', (element) => cliqueCelula(element)));
document.querySelector('button').addEventListener('click', () => limpaTela());