let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

let btns = ["purple","yellow","green","blue"];

let h2 = document.querySelector("h2");
document.addEventListener("keypress",function(){
   if(started == false){
    console.log("Game is Started");
    started = true;

    levelUp();
   }
});


function btnflash(btn){
 btn.classList.add('flash');
 setTimeout(function(){
    btn.classList.remove('flash');
},250);}



 function btnPress(){
   let btn = this;
   btnflash(btn);


   userColor = btn.getAttribute("id");
   console.log(userColor);
   userSeq.push(userColor);
   checkAns(userSeq.length -1);
};

let allBtns = document.querySelectorAll('.btn');
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
};



function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;
    
    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randBTn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnflash(randBTn);
}

function checkAns(idx){
    if(userSeq[idx] ===  gameSeq[idx]){
           if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,800);
           }
    }else{
        h2.innerHTML = `Game over! Your score <b>${level}</b> <br> press any key to Start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
        document.querySelector("body").style.backgroundColor = "white";
        },150);
        reset();
    }

    
};

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}