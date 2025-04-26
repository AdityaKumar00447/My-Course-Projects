let gameSequence = [];
let userSequence = [];
let btns = ["yellow", "red", "blue", "green"];

let started = false;
let level = 0;

let heighestScore = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game started");
        started = true;
        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(() => {
        btn.classList.remove("userFlash");
    }, 250);
}


function levelUp() {
    userSequence = [];
    level++;
    h2.innerText = `level ${level}`;
    let randomIdx = Math.floor(Math.random() * 4);
    let randomColor = btns[randomIdx];
    let randBtn = document.querySelector(`.${randomColor}`);
    gameSequence.push(randomColor);
    console.log(gameSequence);
    // console.log(randomColor);
    // console.log(randBtn);
    // console.log(randomIdx);
    gameFlash(randBtn);
}

function checkSequence(idx) {
    // let idx = level-1;
    if (userSequence[idx] === gameSequence[idx]) {
        // console.log("same seq");
        if (userSequence.length == gameSequence.length) {
            setTimeout(levelUp, 800);

        }
    }
    else {
        let newHeighestScore = level;
        if(newHeighestScore > heighestScore){
            heighestScore = newHeighestScore;
        }
        h2.innerHTML = `Game Over! Your score is <b>${level}<b><br>The heighest score is <b><i>${heighestScore}</i></b>.<br>Press any key to restart.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor = "white";
        }, 500);
        reset ();
    }

}


function btnPress() {
    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute("id");
    userSequence.push(userColor);
    // console.log(userSequence);
    checkSequence(userSequence.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    level = 0;
    gameSequence = [];
    userSequence = [];
}

function showKeyboard() {
    const input = document.getElementById("hiddenInput");
    input.focus();
  }