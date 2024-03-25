let btn = document.querySelectorAll('.btn') 
let reset = document.querySelector('.res')
let startbtn = document.querySelector('.start')
let winner = document.querySelector('.win')
let msgcon = document.querySelector('.msgconta')

let playgame= true ;
let count = 0 ;
const possible = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const newgame= ()=>{
    playgame = true
    enablebox()
    msgcon.classList.add("hide");
   count = 0 ;
    
   
}
btn.forEach((box)=>{

    box.addEventListener("click",()=>{
        if (playgame){
        box.innerText="X";
        playgame = false
        box.style.color="red"
        }
        else{
            box.innerText="O";
            playgame= true
        }
        box.disabled=true
        count++
        let isWinner = check();

    if (count === 9 && !isWinner) {
      gameDraw();
    }

    });
   
});
const gameDraw = ()=>{
    winner.innerText = `Game was a Draw.`;
    msgcon.classList.remove("hide");
    disalebox()

}
const disalebox=()=>{
    for (let box of btn) {
        box.disabled=true
    }
}
const enablebox=()=>{
    for (let box of btn) {
        box.disabled=false
        box.innerHTML=""
    }
}

const showwinnor=(jeeta)=>{
    winner.innerText=`the winner is  ${jeeta}`
    msgcon.classList.remove("hide");
    disalebox()
}
const  check=()=>{
    for (let x of possible) {
        let pos1= btn[x[0]].innerText;
        let pos2 = btn[x[1]].innerText;
        let pos3= btn[x[2]].innerText;
            console.log(pos1)

        if (pos1 != "" && pos2 != ""&&pos3 != ""){

            if (pos1===pos2 && pos2===pos3 ){
                showwinnor(pos1);
                return true
            }
        }
    }
}
reset.addEventListener("click",newgame)
startbtn.addEventListener("click",newgame)