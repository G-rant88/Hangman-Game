var word = ["jaws", "top gun", "shrek", "jurassic park", "watchmen", 
"forrest gump", "aliens"];
// databse of words, movies
var letter = "abcdefghijklmnopqrstuvwxyz";
// databse of letters
var choices = letter.split("");
// possible choices


var cpu = word[Math.floor(Math.random() * 7)];
var player = [];
var char = "";
var wins = 0;
var losses = 0;
var gl = 15;
var word = "";
var end = "Game Over!";


function cpufunc(){

word[Math.floor(Math.random() * 7)]

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

	

for (var i = 0; i < cpu.length; i++) {


if (cpu.indexOf(char) !== -1 && player.indexOf(char) === -1 && 
	  choices.indexOf(char) !== -1){

player.push(char);	
document.getElementById("current").textContent = char;
document.getElementById("sofar").textContent = " " + player + " ";
gl = gl -1;
document.getElementById("left").textContent = " " + gl;

}

else if (player.indexOf(char) === -1 && 
	  choices.indexOf(char) !== -1) {

player.push(char);
document.getElementById("sofar").textContent = " " + player + " ";
gl = gl -1;
document.getElementById("left").textContent = " " + gl;

}

if (gl === 0) {

	document.getElementById("start").innerHTML = end;
	cpufunc();
	gl = 15
	player = [];

}


		
// 	if (wordsplit.indexOf(char) === -1
// 		//checks if char (key) is in index of word
// 		&& player.indexOf(char) === -1 
// 		//checks if char is in index of already used chars
// 		&& choices.indexOf(char) !== -1) {
// 		//checks if char is in index of possible choices (alphabet)


// 	player.push(char);	
// 	document.getElementById("current").textContent = char;
// 	gl = gl -1;
// 	document.getElementById("left").textContent = " " + gl;
// 	document.getElementById("sofar").textContent = " " + player + " ";

	
	


}

// else {

// 	gl = gl -1;
	
// 	document.getElementById("left").textContent = " " + gl;
// 	document.getElementById("sofar").textContent = " " + player + " ";
// }

};


// if (cpu.length) {

// cpufunc();

// }

// else {

// cpufunc();

// }







	console.log(cpu);
	console.log(char);
	console.log(cpu.indexOf(char));