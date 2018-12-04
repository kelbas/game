let cells = getFieldCells('.main td');
let OneGamer = 'X';

prepareField(cells)

function prepareField(cells) {
    for (let i = 0; i < cells.length; i++){
        cells[i].addEventListener('click', nextStep)
    }
}

//allow globals
function nextStep() {
    let cell = this
    fillCell(cell, OneGamer)
    OneGamer = getNextGamer(OneGamer)

    deactivateCell(cell)

    let win = Winner(cells)
    if (win !== false){
        endGame(cells, win)
    }
}

function endGame(cells, win) {
    stopGame(cells)
    showWinner(win)
    createButton()
}

function restartGame(cells) {
    cleanCell(cells)
}

/////////////////////////

function getNextGamer(OneGamer) {
    if (OneGamer == 'X'){
        return 'O'
    }else {
        return 'X'
    }
}

function fillCell(cell, content) {
    cell.innerText = content;
}

function deactivateCell(cell) {
    cell.removeEventListener('click', nextStep)
}

function getFieldCells(selector) {
    return document.querySelectorAll(selector);
}

function stopGame(cells) {
    for (let i = 0; i < cells.length; i++){
        cells[i].removeEventListener('click', nextStep)
    }
}

//false, 'X', 'O'
function Winner(cells) {

    let winCombination = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    for (let z = 0; z < winCombination.length; z++){
        let wc = winCombination[z]
        if (cells[wc[0]].innerText == cells[wc[1]].innerText &&
            cells[wc[1]].innerText == cells[wc[2]].innerText &&
            cells[wc[0]].innerText != '')
        {
            return cells[wc[0]].innerText
        }
    }
        return false
}

function showWinner(win) {
    alert(win)
}
function createButton() {
    let button = document.createElement('button')
    button.className = 'restart'
    button.innerText = 'Перезапустить игру'
    button.addEventListener('click', restartGame)

    document.body.appendChild(button)
}

function cleanCell() {
    window.location.reload();
}
