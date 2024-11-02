let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newbtn = document.querySelector("#new");
let message = document.querySelector(".para");
let messagecontainer = document.querySelector(".message");
let turn0 = true; //playerX,player0
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const resetGame = () => {
    turn0=true;
    enableBoxes();
    messagecontainer.classList.add("hide");
}
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("Box was clicked");
        if(turn0) {//player 0
            box.innerText = "0";
            turn0=false;
        }
        else {//player X
            box.innerText = "X";
            turn0=true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled=true;
    }
}

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner = (winner) => {
    message.innerText = `Congratulations,Winner is ${winner}`;
    messagecontainer.classList.remove("hide");
}
const checkWinner = () => {
    for(let pattern of winPatterns) {
        let pos1Val =boxes[pattern[0]].innerText;
        let pos2Val =boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if(pos1Val != "" &&pos2Val!==""&&pos3val!=="") {
            if(pos1Val===pos2Val&&pos2Val===pos3val) {
                console.log("winner",pos1Val);
                disableBoxes();
                showWinner(pos1Val);
            }
        }
    }
     
};

newbtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);

