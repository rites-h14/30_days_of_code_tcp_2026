// JavaScript logic for the Tic-Tac-Toe game

const cells = document.querySelectorAll('.cell');
const statusDisplay = document.querySelector('.status-message');
const restartButton = document.querySelector('.restart-button');

let gameActive = true;
let currentPlayer = 'X';
let gameState = ['', '', '', '', '', '', '', '', ''];

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function initializeGame() {
    gameActive = true;
    currentPlayer = 'X';
    gameState = ['', '', '', '', '', '', '', '', ''];
    statusDisplay.innerHTML = `Player ${currentPlayer}'s turn`;
    cells.forEach(cell => {
        cell.innerHTML = '';
        cell.classList.remove('won');
        cell.classList.remove('win');
        cell.classList.remove('draw');
        cell.classList.remove('loss');
    });
}

function handleCellClick(clickedCell, clickedCellIndex) {
    if (gameState[clickedCellIndex] !== '' || !gameActive) {
        return;
    }

    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
    clickedCell.classList.add('played');

    checkWinner();
}

function checkWinner() {
    let roundWon = false;
    let winningCells = [];

    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];
        if (gameState[a] === '' || gameState[b] === '' || gameState[c] === '') {
            continue;
        }
        if (gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
            roundWon = true;
            winningCells = [a, b, c];
            break;
        }
    }

    if (roundWon) {
        statusDisplay.innerHTML = `Player ${currentPlayer} has won! 🎉`;
        animateWin(winningCells);
        gameActive = false;
        setTimeout(initializeGame, 2000);
        return;
    }

    if (!gameState.includes('')) {
        statusDisplay.innerHTML = 'It\'s a draw! 🤝';
        animateDraw();
        gameActive = false;
        setTimeout(initializeGame, 2000);
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    statusDisplay.innerHTML = `Player ${currentPlayer}'s turn`;
}

function animateWin(winningCells) {
    winningCells.forEach(index => {
        cells[index].classList.add('win');
    });
}

function animateDraw() {
    cells.forEach(cell => {
        cell.classList.add('draw');
    });
}

cells.forEach((cell, index) => {
    cell.addEventListener('click', () => handleCellClick(cell, index));
});

restartButton.addEventListener('click', initializeGame);

initializeGame();