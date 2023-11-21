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
    Solution2: [document.getElementById('#c1r2'), document.getElementById('#c1r1'), document.getElementById('#c1r0')],
    Solution3: [document.getElementById('#c2r2'), document.getElementById('#c2r1'), document.getElementById('#c2r0')],
    Solution4: [document.getElementById('#c0r2'), document.getElementById('#c1r2'), document.getElementById('#c2r2')],
    Solution5: [document.getElementById('#c0r1'), document.getElementById('#c1r1'), document.getElementById('#c2r1')],
    Solution6: [document.getElementById('#c0r0'), document.getElementById('#c1r0'), document.getElementById('#c2r0')],
    Solution7: [document.getElementById('#c0r0'), document.getElementById('#c1r1'), document.getElementById('#c2r2')],
    Solution8: [document.getElementById('#c0r2'), document.getElementById('#c1r1'), document.getElementById('#c2r0')],
    
}
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
    
}

init()
	/*----- cached elements  -----*/



// 3) Store elements on the page that will be accessed in code more than once in variables to make code more concise, readable and performant:
 // 3.1) Store the 9 elements that represent the squares on the page.
const messageEl = document.querySelector('h2')
const newGameButton = document.querySelector('button')
let boxes = [...document.querySelectorAll('#board > div')]
console.log(boxes)
	/*----- event listeners -----*/


	/*----- functions -----*/
    // 4) Upon loading the app should:
    // 4.1) Initialize the state variables:
    //   4.1.1) Initialize the board array to 9 nulls to represent empty squares. The 9 elements will "map" to each square, where index 0 maps to the top-left square and index 8 maps to the bottom-right square.

    

    //   4.1.2)
//////////////////////////////////
// This is as far as I got. I'm strugglilng with the concept of using arrays and loops and how those work together. 
///////////////////////////////////