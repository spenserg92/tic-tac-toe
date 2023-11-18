	/*----- constants -----*/
    // 1) Define required constants:
    // 1.1) Define a colors object with keys of 'null' (when the square is empty), and players 1 & -1. The value assigned to each key represents the color to display for an empty square (null), player 1 and player -1.
    // 1.2) Define the 8 possible winning combinations, each containing three indexes of the board that make a winner if they hold the same player value.
const colors = {
    0: 'white',
    1: 'magenta',
    '-1': 'teal'
}
const winSolution = {
    Solution1: [document.getElementById('#c0r2'), document.getElementById('#c0r1'), document.getElementById('#c0r0')],
    Solution2: [document.getElementById('#c1r0'), document.getElementById('#c1r1'), document.getElementById('#c1r0')],
    Solution3: [document.getElementById('#c2r2'), document.getElementById('#c2r1'), document.getElementById('#c2r0')],
}

	/*----- state variables -----*/

let board
let turn
let winner
	/*----- cached elements  -----*/
const messageEl = document.querySelector('h2')
const newGameButton = document.querySelector('button')
	/*----- event listeners -----*/


	/*----- functions -----*/

    function init(){
        turn = 1
        winner = null
        board = [
            [0, 0, 0], //col 0
            [0, 0, 0], //col 1
            [0, 0, 0], //col 2
        ]
        
    }

init()