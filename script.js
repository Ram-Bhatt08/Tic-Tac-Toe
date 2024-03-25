let boxes =document.querySelectorAll(".box");
let re =document.querySelector(".re");
let news=document.querySelector(".news");
let turnX = true;
const winpatterns =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];


boxes.forEach((box)=>
{
    box.addEventListener("click",() =>
    {
        if(turnX)
        {
            box.innerText="X";
            turnX=false;
        }
    else {
        box.innerText="O";
        turnX=true;
    }
    box.disabled=true;
    checkWinner();
});
});
const enableboxes=() => {
    for(let box of boxes) {
        box.disabled=false;
        box.innerText="";
    }
};
const checkWinner= () => {
    let Winner=false;
    for(let pattern of winpatterns)
    {
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;

        if(pos1Val!="" && pos2Val!="" && pos3Val!="")
        {
            if(pos1Val==pos2Val && pos2Val==pos3Val)
            {
            alert(" Congratulation Player "
        +pos1Val + " You won the game ");
        disableboxes();
        Winner=true;
        break;
        }
    }
}
if (!Winner) {
   checkDraw();
}
};
//const disableboxes =() => {
  //  boxes.forEach(box=> {
    //    box.disabled=true;
    //});
//}
const disableboxes=()=> {
    boxes.forEach(box=>{
        box,disabled=true;
    });
}
const resetGame =() => {
    turnX=true;
    enableboxes();
}
news.addEventListener("click",resetGame);
re.addEventListener("click",resetGame);

const checkDraw = () => {
    let isDraw = true;
    for (let box of boxes) {
        if (box.innerText === "") {
            isDraw = false;
            break;
        }
    }
    if (isDraw) {
        alert("It's a draw! No one wins. You can play the New Game");
        disableboxes();
    }
};
