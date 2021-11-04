let move = 0;
let containerContext = document.querySelector(".container__context")
let boxes = document.querySelectorAll('.container__context--box')
let layer = document.querySelector('.layer')
let winner = document.querySelector('.winner')
let playAgain = document.querySelector('.btn')
let playAgainMain = document.querySelector('.mainAgain')
let arr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

containerContext.addEventListener("click", (event) => {
    console.log(event.target);
    if (move % 2 === 0 && event.target.innerHTML !== "O") {
        event.target.innerHTML = 'X';
        move++
    }
    else if (move % 2 !== 0 && event.target.innerHTML !== "X") {
        event.target.innerHTML = 'O';
        move++
    }
    check();
})

function check() {
    for (let i = 0; i < arr.length; i++) {
        if (boxes[arr[i][0]].innerHTML == 'X' && boxes[arr[i][1]].innerHTML == 'X' && boxes[arr[i][2]].innerHTML == 'X') {
            boxes[arr[i][0]].style.color = "#00e640"
            boxes[arr[i][1]].style.color = "#00e640"
            boxes[arr[i][2]].style.color = "#00e640"
            window.setTimeout(slowAlert, 1000);
            winner.innerHTML = "X wins!!!"
        }
        else if (boxes[arr[i][0]].innerHTML == 'O' && boxes[arr[i][1]].innerHTML == 'O' && boxes[arr[i][2]].innerHTML == 'O') {
            boxes[arr[i][0]].style.color = "#00e640"
            boxes[arr[i][1]].style.color = "#00e640"
            boxes[arr[i][2]].style.color = "#00e640"
            window.setTimeout(slowAlert, 1000);
            winner.innerHTML = "O wins!!!"
        }
    }
}

function slowAlert() {
    layer.classList.add("show")

}

playAgain.addEventListener("click", () => {
    location.reload();
    layer.classList.remove("show")
})
playAgainMain.addEventListener("click", () => {
    location.reload();
})