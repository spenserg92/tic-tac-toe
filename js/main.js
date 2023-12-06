/*----- constants -----*/
// 1) Define required constants:
// 1.1) Define a colors object with keys of 'null' (when the square is empty), and players 1 & -1. The value assigned to each key represents the color to display for an empty square (null), player 1 and player -1.
const colors = {
    'null': 'white',
    '1': 'magenta',
    '-1': 'teal'
}

//1.2) Define the 8 possible winning combinations, each containing three indexes of the board that make a winner if they hold the same player value.


const winSolution = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]
// console.log(winSolution)
/*----- state variables -----*/
//2.1) Use a board array to represent the squares.
let board
//2.2) Use a turn variable to remember whose turn it is.
let turn
//  2.3) Use a winner variable to represent three different possibilities - player that won, a tie, or game in play.
let winner

const messageEl = document.querySelector('h2')
const newGameButton = document.querySelector('button')

init()

function init() {
    board = [
        null, null, null, null, null, null, null, null, null
    ];
    turn = 1
    winner = null
    render()

}

/*----- cached elements  -----*/



// 3) Store elements on the page that will be accessed in code more than once in variables to make code more concise, readable and performant:
// 3.1) Store the 9 elements that represent the squares on the page.


/*----- event listeners -----*/
document.getElementById('board').addEventListener('click', handleMove);
newGameButton.addEventListener('click', init)
/*----- functions -----*/

function handleMove(evt) {
    const square = parseInt(evt.target.id.replace('sq-', ''));
    if (
        isNaN(square) || board[square] || winner
    ) return;

    board[square] = turn;
    turn *= -1;
    winner = getWinner();

    render()
}

function getWinner() {
    for (let winArr of winSolution) {
        if (Math.abs(board[winArr[0]] + board[winArr[1]] + board[winArr[2]]) === 3)
            return board[winArr[0]];
    }
    if (board.includes(null)) return null;
    return 'T';
}

function render() {
    renderBoard();
    renderMessage();
    newGameButton.disabled = !winner;
}

function renderBoard() {
    board.forEach(function (sqVal, square) {
        const squareEl = document.getElementById(`sq-${square}`);
        squareEl.style.backgroundColor = colors[sqVal];
        squareEl.className = !sqVal ? 'avail' : '';
    })
}

function renderMessage() {
    if (winner === 'T') {
        messageEl.innerHTML = "It's a tie!";
    } else if (winner) {
        messageEl.innerHTML = `Congrats <span style ="color: ${colors[winner]}">${colors[winner].toUpperCase()}</span>!`
    } else {
        messageEl.innerHTML = `<span style="color:${colors[turn]}">${colors[turn].toUpperCase()}</span>'s Turn`;
    }
}