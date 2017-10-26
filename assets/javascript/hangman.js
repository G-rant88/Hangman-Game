var movie = ["jaws", "titanic", "shrek", "gladiator", "watchmen", 
"inception", "aliens"];
// databse of words, movies
var letter = "abcdefghijklmnopqrstuvwxyz";
// databse of letters
var choices = letter.split("");
// possible choices


var cpu = movie[Math.floor(Math.random() * 7)];
var player = [];
var cpusplit = cpu.split("");
var char = "";
var wins = 0;
var losses = 0;
var gl = 15;
var word = "";
var end = "Game Over!";
var correct = new Array(cpu.length).fill("_");
var youwin = "You Won!";
var audio = new Audio("assets/images/win.mp3");
var audio2 = new Audio("assets/images/loss.mp3");



for (var i = 0; i < cpu.length; i++) {

var space = " _ ";

	word = space + word;


}







document.getElementById("current").textContent = word;


document.onkeyup = function(event) {

	char = event.key;
	start = "Game Started!"
	document.getElementById("start").innerHTML = start;
	answer();
	
	
function answer(){

 for (var i = 0; i < cpu.length; i++) {
	 	 	
	if (correct[i] !== cpusplit[i]){

 	return false;
 }

else {}


 return true;
	

}



}


function charcorr(event){

	if (cpu.indexOf(event) !== -1) {

		for (var i = 0; i < cpu.length; i++) {
		

		if (event === cpu.charAt([i])) {

			
			
			correct[i]=cpu[i];

		


		}	

	

		}


	}


}
	

for (var i = 0; i < cpu.length; i++) {


if (cpu.indexOf(char) !== -1 && 
	player.indexOf(char) === -1 && 
	  choices.indexOf(char) !== -1){



		
	
charcorr(char);

console.log(correct);
document.getElementById("current").textContent = " " + correct;
document.getElementById("sofar").textContent = " " + player.join(" ");
document.getElementById("current").textContent = " " + correct.join(" ");
document.getElementById("left").textContent = " " + gl;

}

else if (
	player.indexOf(char) === -1 && 
	  choices.indexOf(char) !== -1) {

player.push(char);
document.getElementById("sofar").textContent = " " + player.join(" ");
gl = gl -1;
document.getElementById("left").textContent = " " + gl;

}

else if (gl === 0) {

	document.getElementById("start").innerHTML = end;
	losses++
    document.getElementById("losses").textContent = " " + losses;
	cpu = movie[Math.floor(Math.random() * 7)];
	cpusplit = cpu.split("");
	gl = 15;
	player = [];
	correct = new Array(cpu.length).fill("_");
	audio2.play();
	document.getElementById("current").textContent = " " + correct.join(" ");
	document.getElementById("sofar").textContent = " " + player.join(" ");


}


else if (answer())

  {
     	wins++
       	document.getElementById("wins").textContent = " " + wins;
       	document.getElementById("start").innerHTML = youwin;
       	cpu = movie[Math.floor(Math.random() * 7)];
       	cpusplit = cpu.split("");
      	gl = 15;
       	player = [];
       	correct = new Array(cpu.length).fill("_");
        document.getElementById("current").textContent = " " + correct.join(" ");
     	document.getElementById("sofar").textContent = " " + player.join(" ");
     	audio.play();
     	}


   


		



	
	


}



};







	console.log(cpu);
	//console.log(char);
	console.log(correct);
	//console.log(cpusplit);


