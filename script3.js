const cells = document.querySelectorAll('td');
let currentPlayer = 'X';

cells.forEach(cell => {
    cell.addEventListener('click', () => {
        if (cell.textContent === '') {
            cell.textContent = currentPlayer;
            if (checkWin()) {
                alert(`${currentPlayer} wins!`);
                resetBoard();
            } else if (isBoardFull()) {
                alert("It's a tie!");
                resetBoard();
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        }
    });
});

function checkWin() {
    const winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6] // diagonals
    ];

    return winConditions.some(condition => {
        return condition.every(index => cells[index].textContent === currentPlayer);
    });
}

function isBoardFull() {
    return [...cells].every(cell => cell.textContent !== '');
}

function resetBoard() {
    cells.forEach(cell => cell.textContent = '');
    currentPlayer = 'X';
}