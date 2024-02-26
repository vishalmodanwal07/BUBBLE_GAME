var timer=40;
var score=0;
var rn;
function makeBubble(){
    var cultter="";
    for(var i=0;i<140;i++){
        var randomNum =Math.floor(Math.random()*10);
        cultter+=`<div class="bubble">${randomNum}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = cultter;
}

function runtimer(){
    var timerInt= setInterval(function (){
        if(timer>0){
            timer--;
            document.querySelector(".Timer").textContent=timer;
        }else{
            clearInterval(timerInt);
            document.querySelector("#pbtm").innerHTML='';
           alert(" GAMEOVER! Your Score is:"+score);
        }
    
    },1000);
}
function newHit(){
    rn =Math.floor(Math.random()*10);
    document.querySelector(".Hit").textContent=rn;
}
  
document.querySelector("#pbtm").addEventListener("click",function(detail){
    var clickednum = Number(detail.target.textContent);
    if(clickednum===rn){
       increaseScore();
       newHit();
       makeBubble();
   }else{
       alert("not match");
   }
   });

function increaseScore(){
    score += 10;
    document.querySelector (".score").textContent=score;

}





makeBubble();
runtimer();
newHit();


