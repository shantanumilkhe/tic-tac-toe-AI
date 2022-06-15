var origboard;
const huplayer= 'O';
const aiplayer= 'X';
const winningCombo = [
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 5, 9],
    [3, 5, 7]
];

//html elements
const statusdiv = document.querySelector('.status');
const resetdiv = document.querySelector('.reset');
const celldivs = document.querySelectorAll('.game-cell');

// game variables
let gameIsLive = true;
let xIsNext = true;

//event handlers

const handlereset = (e) => {
    console.log(e);
}

const handleCellClick = (e) => {  
    const classList = e.target.classList;
    const location = classList[1];

    if(classList[2]=== 'x' || classList[2] === 'o'){
        return;
    }

    if (xIsNext){
       classList.add('x');
        xIsNext = !xIsNext;
    }
    else {
       classList.add('o');
        xIsNext= !xIsNext;
    }

}

//event listeners

resetdiv.addEventListener('click', handlereset);

for (const cell of celldivs) {
        cell.addEventListener('click', handleCellClick);
}
