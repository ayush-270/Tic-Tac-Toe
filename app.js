let boxes = document.querySelectorAll(".box");
let reset_gamebtn = document.querySelector("#reset");
let conainer = document.querySelector(".container");
let game = document.querySelector(".game");
let new_gamebtn = document.querySelector("#newgame");
let msg_container = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let count = 0;

let turn0 = true;
const win_patterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
];

boxes.forEach((box) =>{
    box.addEventListener("click",() =>{
        count++
        console.log("Box was Clicked");
        if(turn0){
            box.innerText = "O";
            box.style.color = "black"
            turn0 = false;
        }
        else{
            box.innerText = "X";
            box.style.color = "red"
            turn0 = true;
        }
        box.disabled = true;
        check_winner();
        draw();
    })
})

const disable_btn = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
} 
const show_winner = (winner) => {
    msg.innerText = `Congratulations !! The winner is ${winner}`;
    msg_container.classList.remove("hide");
    disable_btn();
    count = 0;
};

const check_winner= () =>{
    for(pattern of win_patterns){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 == pos2 && pos2 == pos3){
                console.log(`Winner is ${pos1}!!! `);
                show_winner(pos1);
            }
        }
    }
};

const enable_btn = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const reset_game = () => {
    enable_btn();
    turn0 = true;
    msg_container.classList.add("hide");
    count = 0;
};

const draw = () => {
    if(count == 9){
        console.log("The Match Is Draw.")
        msg.innerText = "The Match Is Draw.";
        msg_container.classList.remove("hide");
        count = 0;
    }
};

new_gamebtn.addEventListener("click",reset_game);
reset_gamebtn.addEventListener("click",reset_game);