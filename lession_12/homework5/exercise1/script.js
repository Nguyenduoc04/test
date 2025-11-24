let b = document.getElementById("carogame");

let board = [];
for (let i = 0; i < 5; i++) {
    board[i] = new Array(5).fill(0);
}

function displayBoard() {
    let data = "";

    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            data += board[i][j] + "&nbsp;&nbsp;";
        }
        data += "<br/>";
    }

    b.innerHTML = data;
}

document.addEventListener("DOMContentLoaded", displayBoard);

function changeValue() {
    let x = +prompt("X: ");
    let y = +prompt("Y: ");

    if (x >= 0 && x < 5 && y >= 0 && y < 5) {
        board[x][y] = "x";
    } else {
        alert("Invalid position!");
    }

    displayBoard();
}
