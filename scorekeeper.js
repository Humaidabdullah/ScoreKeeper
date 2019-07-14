var p1Button=document.querySelector("#p1");
var p2Button=document.querySelector("#p2");
var p1Display=document.querySelector("#p1Disp");
var p2Display=document.querySelector("#p2Disp");
var p1Score=0;
var p2Score=0;
var gameOver=false;
var winningScore=0;
var resetButton=document.getElementById("reset");
var numInput=document.querySelector("input");
var winningScoreDisplay=document.querySelector("p span");

numInput.addEventListener("change",function(){
	winningScoreDisplay.textContent=Number(numInput.value);
	winningScore=Number(numInput.value);
	reset();
})

p1Button.addEventListener("click",function(){
	if(!gameOver){
		p1Score++;
		console.log(winningScore,p1Score);
		if(p1Score===winningScore){
			gameOver=true;
			p1Display.classList.add("green");
		}
		p1Display.textContent=p1Score;
	}

})

p2Button.addEventListener("click",function(){
	if(!gameOver){
		p2Score++;
		if(p2Score===winningScore){
			p2Display.classList.add("green");
			gameOver=true;
		}
		p2Display.textContent=p2Score;
	}	
}) 
resetButton.addEventListener("click",function(){
	reset();
})
function reset(){
	p1Score=0;
	p2Score=0;
	p1Display.textContent=p1Score;
	p2Display.textContent=p2Score;
	p1Display.classList.remove("green");
	p2Display.classList.remove("green");
	gameOver=false;
}