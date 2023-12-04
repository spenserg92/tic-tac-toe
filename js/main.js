	/*----- constants -----*/
    // 1) Define required constants:
    // 1.1) Define a colors object with keys of 'null' (when the square is empty), and players 1 & -1. The value assigned to each key represents the color to display for an empty square (null), player 1 and player -1.
    // 1.2) Define the 8 possible winning combinations, each containing three indexes of the board that make a winner if they hold the same player value.
const colors = {
    0: 'white',
    1: 'magenta',
    '-1': 'teal'
}
const winSolution = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7 ,8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]
console.log(winSolution)
	/*----- state variables -----*/

let board
let turn
let winner 

function init(){
    turn = 1
    winner = null
    board = [
        [0, 0, 0], //col 0
        [0, 0, 0], //col 1
        [0, 0, 0], //col 2
    ]
    render()
    
}

init()
	/*----- cached elements  -----*/



// 3) Store elements on the page that will be accessed in code more than once in variables to make code more concise, readable and performant:
 // 3.1) Store the 9 elements that represent the squares on the page.
const messageEl = document.querySelector('h2')
const newGameButton = document.querySelector('button')
let boxes = [...document.querySelectorAll('#board > div')]

	/*----- event listeners -----*/


	/*----- functions -----*/
