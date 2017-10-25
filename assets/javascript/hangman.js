var movie = ["jaws", "titanic", "shrek", "gladiator", "watchmen", 
"inception", "aliens"];
// databse of words, movies
var letter = "abcdefghijklmnopqrstuvwxyz";
// databse of letters
var choices = letter.split("");
// possible choices


var cpu = movie[Math.floor(Math.random() * 7)];
var player = [];
var cpusplit = cpu.split("")
var char = "";
var wins = 0;
var losses = 0;
var gl = 15;
var word = "";
var end = "Game Over!";
var correct = [];
var youwin = "You Won!";

function cpufunc(){

movie[Math.floor(Math.random() * 7)]

}

cpufunc();

for (var i = 0; i < cpu.length; i++) {

var space = " _ ";

	word = space + word;


}

document.getElementById("current").textContent = word;


document.onkeyup = function(event) {

	char = event.key;
	start = "Game Started!"
	document.getElementById("start").innerHTML = start;

// function store(guess) {

// 	if (cpu.indexOf(guess) !== -1) {

// 	for (var i = 0; i < cpu.length; i++) {
		
// 		if (cpu.charAt(i) === guess) {
// 			correct[i]=guess;
// 		}
// }
// }


// 	}

// store(char);
// console.log(correct);
	




for (var i = 0; i < cpu.length; i++) {


if (cpu.indexOf(char) !== -1 && 
	player.indexOf(char) === -1 && 
	  choices.indexOf(char) !== -1){


		//function charats (){
	//document.getElementById("current").textContent = " " + correct.join(" ");
	//correct(cpu.charAt(char));

//}

correct.push(char);
player.push(char);	
document.getElementById("current").textContent = " " + correct.join(" ");
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
	cpu = movie[Math.floor(Math.random() * 7)];
	gl = 15;
	player = [];
	correct = [];
	document.getElementById("current").textContent = " " + correct.join(" ");
	document.getElementById("sofar").textContent = " " + player.join(" ");


}




 // if (correct([i]) === cpu.every([i])) {

 // 	wins++
 // 	document.getElementById("wins").textContent = " " + wins;
 // 	document.getElementById("start").innerHTML = youwin;
 // 	cpu = word[Math.floor(Math.random() * 7)];
 // 	gl = 15;
 // 	player = [];
 // 	correct= [];
 // 	document.getElementById("current").textContent = " " + correct.join(" ");
	// document.getElementById("sofar").textContent = " " + player.join(" ");


 // }


		
// 	if (wordsplit.indexOf(char) === -1
// 		//checks if char (key) is in index of word
// 		&& player.indexOf(char) === -1 
// 		//checks if char is in index of already used chars
// 		&& choices.indexOf(char) !== -1) {
// 		//checks if char is in index of possible choices (alphabet)



	
	


}



};







	console.log(cpu);
	//console.log(char);
	//console.log(correct);
	//console.log(cpusplit);


