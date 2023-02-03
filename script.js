function setUpBoard(side) {
    const board = document.querySelector('#board');
    for (let i = 0; i < side; i++) {
        const column = document.createElement('div');
        column.classList.add('column');
        for (let j = 0; j < side; j++) {
            const pixel = document.createElement('div');
            setUpPixel(pixel);
            column.appendChild(pixel);
        }
        board.appendChild(column);
    }
}

function setUpPixel(pixel) {
    pixel.classList.add('pixel');
    pixel.addEventListener('mouseover', () => pixel.classList.add('hover'));
}

function resetBoard() {
    const board = document.querySelector('#board');
    board.innerHTML = '';
}

const button = document.querySelector('#size');
button.addEventListener('click', () => {
    const side = prompt('How many squares per side?\nA value between 10 and 60 is recommended');
    resetBoard();
    setUpBoard(side);
});