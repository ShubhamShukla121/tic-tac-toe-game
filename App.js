let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset-btn");
let newGame = document.querySelector(".newGame");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;
const winPatterns =
[
    [0, 1, 2],
    [0, 3, 6],
    [1, 4, 7],
    [2, 4, 6],
    [6, 7, 8],
    [2, 5, 8],
    [3, 4, 5],
    [0, 4, 8]
];
let count = 0;

boxes.forEach((box) => {
    box.addEventListener("click", () => {

        if (turnO) {
            box.innerText = "O";
            turnO = false;
        }
        else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        count++;

   
       let isWinner=checkWinner();
       if(count===9&&!isWinner){
        noWinner();
       }
       
       
      
    });
});
const resetGame = () => {
    turnO = true;
    count=0;
    enableBoxes();
    msgContainer.classList.add("hide");

}
const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;

    }
}
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}
const noWinner = () => {

    msg.innerText="game was a Draw!"

    msgContainer.classList.remove("hide");
    disableBoxes();
}
const showWinner = (winner) => {
    msg.innerText = `congratulations ,Winner is ${winner}`
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const checkWinner = () => {
    for (pattern of winPatterns) {
        // console.log(pattern[0], pattern[1], pattern[2]);
        // console.log(boxes[pattern[0]].innerText,
        //             boxes[pattern[1]].innerText,
        //             boxes[pattern[2]].innerText);
        let pos0Val = boxes[pattern[0]].innerText;
        let pos1Val = boxes[pattern[1]].innerText;
        let pos2Val = boxes[pattern[2]].innerText;
        if (pos0Val != "" && pos1Val != "" && pos2Val != "") {
            if (pos0Val === pos1Val && pos1Val === pos2Val) {

                console.log("Winner!", pos0Val);
                // console.log(alert("You have won the game"));
                showWinner(pos0Val);
            }
            // else{
            //     noWinner();
            // }
        }

    }
}
newGame.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);