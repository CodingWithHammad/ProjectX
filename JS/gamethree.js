const playBoard=document.querySelector(".play-board");

let foodX =13, foodY=10;
let snakeX=5, snakeY=10;
let velocityX=0 , velocityY=0;
 
const changeFoodPosition = () =>{
    foodX=Math.floor(Math.random()*30)+1;
    foodY=Math.floor(Math.random()*30)+1;

}
const changeDirection=(e)=>{
    console.log(e);
}
const initGame=()=>{
    let htmlMarkup=`<div class="food" style="grid-area: ${foodY} / ${foodX} "></div>`;
    htmlMarkup=`<div class="food" style="grid-area: ${snakeY} / ${snakeX} "></div>`;
    playButton.innerHTML=htmlMarkup;

}
changeFoodPosition();
initGame();
document.addEventListener("keydown",changeDirection);