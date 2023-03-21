let doc = document;
let btnClick = doc.querySelectorAll('#pl-choice');
let resPlayer1 = doc.querySelector('.res-player1');
let resPlayer2 = doc.querySelector('.res-player2');
let btnClear = doc.querySelector('.reset-button');
let panelRes = doc.querySelector('.game-result__panel');
let panelResGren = doc.querySelector('.game-result__green');
let btnWhoFirst = doc.querySelector('.who-first');
let btnChoicePl1 = doc.querySelector('.start-x');
let btnChoicePl2 = doc.querySelector('.start-o');
let player1 = 'X';
let player2 = 'O';
let currentPlayer = player1;
let countPl1 = 0;
let countPl2 = 0;
let counterEndGame = 0;

resPlayer1.innerText = `"Хрестики" Перемогли: 0`;
resPlayer2.innerText = `"Нолики" Перемогли: 0`;

for (let i = 0;i < btnClick.length;i++) {
    btnClick[i].onclick = function() {
        if (counterEndGame >= 8) {
            clearGamePlace();
            counterEndGame = 0;
            panelRes.innerText = 'Game Over';
            return;
        }
        if (this.innerText) {
            return;
        } 

        panelRes.innerText = '';
        panelResGren.innerText = '';
        counterEndGame++;
        if (counterEndGame % 2 === 0) {
            btnChoicePl1.classList.add('start_green');
        } else {
            btnChoicePl1.classList.remove('start_green'); 
        }
        if (counterEndGame % 2 === 1) {
            btnChoicePl2.classList.add('start_green');
        } else {
            btnChoicePl2.classList.remove('start_green'); 
        }

        this.innerText = currentPlayer;
        currentPlayer = (currentPlayer === player1) ? player2 : player1;
        checkWinner();
        resPlayer1.innerText = `"Хрестики" Перемогли: ${countPl1}`;
        resPlayer2.innerText = `"Нолики" Перемогли: ${countPl2}`;
    }
}

btnClear.onclick = function() {
    clearGamePlace();
    clearCounterWinner();
    clearResPanel();
}

function checkWinner() {
    if (btnClick[0].innerText == player1 && btnClick[1].innerText == player1 && btnClick[2].innerText == player1) {
        clearGamePlace();
        countPl1++;
        panelResGren.innerText = 'X - Переміг!!!';
    }
    if (btnClick[3].innerText == player1 && btnClick[4].innerText == player1 && btnClick[5].innerText == player1) {
        panelResGren.innerText = 'X - Переміг!!!';
        clearGamePlace();
        countPl1++;
    }
    if (btnClick[6].innerText == player1 && btnClick[7].innerText == player1 && btnClick[8].innerText == player1) {
        panelResGren.innerText = 'X - Переміг!!!';
        clearGamePlace();
        countPl1++;
    }
    if (btnClick[6].innerText == player1 && btnClick[4].innerText == player1 && btnClick[2].innerText == player1) {
        panelResGren.innerText = 'X - Переміг!!!';
        clearGamePlace();
        countPl1++;
    }
    if (btnClick[0].innerText == player1 && btnClick[4].innerText == player1 && btnClick[8].innerText == player1) {
        panelResGren.innerText = 'X - Переміг!!!';
        clearGamePlace();
        countPl1++;
    }
    if (btnClick[0].innerText == player1 && btnClick[3].innerText == player1 && btnClick[6].innerText == player1) {
        panelResGren.innerText = 'X - Переміг!!!';
        clearGamePlace();
        countPl1++;
    }
    if (btnClick[1].innerText == player1 && btnClick[4].innerText == player1 && btnClick[7].innerText == player1) {
        panelResGren.innerText = 'X - Переміг!!!';
        clearGamePlace();
        countPl1++;
    }
    if (btnClick[2].innerText == player1 && btnClick[5].innerText == player1 && btnClick[8].innerText == player1) {
        panelResGren.innerText = 'X - Переміг!!!';
        clearGamePlace();
        countPl1++;
    }


    if (btnClick[0].innerText == player2 && btnClick[1].innerText == player2 && btnClick[2].innerText == player2) {
        panelResGren.innerText = 'O - Переміг!!!';
        clearGamePlace();
        countPl2++;
    }
    if (btnClick[3].innerText == player2 && btnClick[4].innerText == player2 && btnClick[5].innerText == player2) {
        panelResGren.innerText = 'O - Переміг!!!';
        clearGamePlace();
        countPl2++;
    }
    if (btnClick[6].innerText == player2 && btnClick[7].innerText == player2 && btnClick[8].innerText == player2) {
        panelResGren.innerText = 'O - Переміг!!!';
        clearGamePlace();
        countPl2++;
    }
    if (btnClick[6].innerText == player2 && btnClick[4].innerText == player2 && btnClick[2].innerText == player2) {
        panelResGren.innerText = 'O - Переміг!!!';
        clearGamePlace();
        countPl2++;
    }
    if (btnClick[0].innerText == player2 && btnClick[4].innerText == player2 && btnClick[8].innerText == player2) {
        panelResGren.innerText = 'O - Переміг!!!';
        clearGamePlace();
        countPl2++;
    }
    if (btnClick[0].innerText == player2 && btnClick[3].innerText == player2 && btnClick[6].innerText == player2) {
        panelResGren.innerText = 'O - Переміг!!!';
        clearGamePlace();
        countPl2++;
    }
    if (btnClick[1].innerText == player2 && btnClick[4].innerText == player2 && btnClick[7].innerText == player2) {
        panelResGren.innerText = 'O - Переміг!!!';
        clearGamePlace();
        countPl2++;
    }
    if (btnClick[2].innerText == player2 && btnClick[5].innerText == player2 && btnClick[8].innerText == player2) {
        panelResGren.innerText = 'O - Переміг!!!';
        clearGamePlace();
        countPl2++;
    }

}

function clearCounterWinner() {
    countPl1 = 0;
    countPl2 = 0;
    resPlayer1.innerText = `"Хрестики" Перемогли: ${countPl1}`;
    resPlayer2.innerText = `"Нолики" Перемогли: ${countPl2}`;
}

function clearGamePlace() {
    for (let i = 0;i < btnClick.length;i++) {
        btnClick[i].innerText = '';
    }
    currentPlayer = player1;
    counterEndGame = 0;
}

function clearResPanel() {
    panelRes.innerText = '';
    panelResGren.innerText = '';
    btnChoicePl1.classList.add('start_green');
    btnChoicePl2.classList.remove('start_green');
}