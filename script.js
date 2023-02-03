const button = document.querySelector('#size');
button.addEventListener('click', () => {
    const side = prompt('How many squares per side?\nA value between 10 and 60 is recommended');
    resetBoard();
    setUpBoard(side);
});

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
    pixel.addEventListener('mouseover', () => colorPixel(pixel));
}

function resetBoard() {
    const board = document.querySelector('#board');
    board.innerHTML = '';
}

function getBrush() {
    const brush = document.getElementById('brush');
    const selectedBrush = brush[brush.selectedIndex].value;
    return selectedBrush;
}

function colorPixel(pixel) {
    switch (getBrush()) {
        case 'white':
            colorWhite(pixel);
            break;

        case 'random':
            colorRandom(pixel);
            break;

        case 'grayscale':
            colorGrayscale(pixel);
            break;
    
        default:
            colorBlack(pixel);
            break;
    }
}

function colorBlack(pixel) {
    pixel.style.backgroundColor = 'black';
}

function colorWhite(pixel) {
    pixel.style.backgroundColor = 'white';
}

function colorGrayscale(pixel) {
    const computedStyles = window.getComputedStyle(pixel);

    // 'rgb(r, g, b)'
    let backgroundColor = computedStyles.getPropertyValue("background-color");
    
    // [r, g, b]
    backgroundColor = backgroundColor.slice(4,-1).split(',');

    let r = backgroundColor[0].valueOf() - 32;
    let g = backgroundColor[1].valueOf() - 32;
    let b = backgroundColor[2].valueOf() - 32;
    pixel.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

function colorRandom(pixel) {
    pixel.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}