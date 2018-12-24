var difficulty;

//click
function startClick(elem){
	document.getElementById("start").style.display = "none";
	document.getElementById("game").style.display = "block";
	document.getElementById("message").style.display = "block";
	document.getElementById("messageWin").style.display = "block";
	document.getElementById("title").style.display = "block";
	reset();
	if (elem == "easy") {
		difficulty = 0;
	}
	else if (elem == "hard") {
		difficulty = 1;
	}
	else {
		difficulty = -1;
	}
}

function resetClick(){
	document.getElementById("start").style.display = "block";
	document.getElementById("game").style.display = "none";
	document.getElementById("message").style.display = "none";
	document.getElementById("messageWin").style.display = "none";
	document.getElementById("title").style.display = "none";
}

//Abstractions
function onBoxClick(elem){
	if (elem.innerHTML == "" && winState == false) {
		elem.innerHTML = currentStep;
		//just for message, not really switching turn
		if (checkState(elem.id, currentStep)) {
			winState = true;
			//prints winner
			setMessageWin(currentStep + " Win!");
			return;
		}
		currentStep = (currentStep == "O") ? "X" : "O";
		setMessage(currentStep + "'s turn");
		if (currentStep == "O" && difficulty != -1) {
			predict();
			currentStep = "X";
			setMessage(currentStep + "'s turn");
		}
	}
}
  
//scans for numbers and determines nearby positions, the board is like coordinates
function checkState(id, letter) {
	dir = [[-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1]];
	id = id.slice(3, 5).split('');
	var pos;
	var nextPos;
	for (var i in dir) {
		pos = [parseInt(id[0]) + dir[i][0], parseInt(id[1]) + dir[i][1]];
		if (restrict(pos)) {
			if (getState(pos) == letter) {
				nextPos = [pos[0] + dir[i][0], pos[1] + dir[i][1]];
				if (!restrict(nextPos)) {
					var num = (parseInt(i) + 4) % 8;
					nextPos = [parseInt(id[0]) + dir[num][0], parseInt(id[1]) + dir[num][1]];
				}
				if (restrict(nextPos) && (getState(nextPos) == letter)) {
					return true;
				}
			}
		}
	}
	return false;
}
 
function restrict(pos) {
	return !(pos[0] < 0 || pos[0] > 2 || pos[1] < 0 || pos[1] > 2);
}

function getState(pos) {
	return document.getElementById("Box" + pos[0] + pos[1]).innerHTML;
}

//resets board
function reset(){
	for (var i = 0; i < 3; i++){
		for (var j = 0; j < 3; j++){
			document.getElementById("Box" + i + j).innerHTML = "";
		}
	}
	setMessageWin("");
	currentStep = "X";
	setMessage(currentStep + " get's to start");
	winState = false;
}

//uses HTML message
function setMessage(msg){
	document.getElementById("message").innerText = msg;
}

function setMessageWin(msg){
	document.getElementById("messageWin").innerText = msg;
}

//AI
function predict() {
	// check if player is going to win
	var position = [];
  
	console.log("Check if itself is going to win");
	applyToSquare(currentStep, function(id, player){checkOneSol(id, player, position);});
  
	if (position.length > 0) {
		document.getElementById(position[0]).innerHTML = currentStep;
		winState = true;
		setMessageWin(currentStep + " Win!");
		return;
	}
  
	console.log(position);
	position = [];
  
	var player = (currentStep == "O") ? "X" : "O";
  
	console.log("Check if player is going to win");
	applyToSquare(player, function(id, player){checkOneSol(id, player, position);});
  
	/*
	if (position.length > 1) {
		winState = true;
		setMessageWin(player + " Win!");
		return;
	}
	else if (position.length == 1){
		document.getElementById(position[0]).innerHTML = currentStep;
		return;
	}
	*/
	if (position.length > 0) {
		document.getElementById(position[0]).innerHTML = currentStep;
		return;
	}
  
	console.log(position);
	position = [];
	
	if (difficulty == 1) {
		console.log("Check if player is going to have two solutions");
		applyToSquare(player, function(id, player){checkTwoSol(id, player, position);});

		console.log(position);
		
		if (position.length == 0) {
			console.log("Check if itself is going to have two solutions");
			applyToSquare(currentStep, function(id, player){checkTwoSol(id, player, position);});
  
			console.log(position);
		}
		
		if (position.length == 0) {
			//applyToSquare(currentStep, function(id, player){position.push(id);});
			var cornerPos = [[0, 0], [0, 2], [2, 0], [2, 2]];
			for (var i in cornerPos) {
				if (getState(cornerPos[i]) == 0) {
					console.log(cornerPos[i]);
					position.push("Box" + cornerPos[i][0] + cornerPos[i][1]);
				}
			}
			if (position.length == 0) {
				applyToSquare(currentStep, function(id, player){position.push(id);});
			}
		}
	}
	else {
		applyToSquare(currentStep, function(id, player){position.push(id);});
	}
	
	document.getElementById(position[Math.floor(Math.random() * position.length)]).innerHTML = currentStep;
}

function applyToSquare(param, callback) {
	for (var i = 0; i < 9; i++) {
		if (getState([Math.floor(i / 3), i % 3]) == "") {
			callback("Box" + Math.floor(i / 3) + i % 3, param);
		}
	}
}

function checkOneSol(id, player, position) {
	if (checkState(id, player)) {
		position.push(id);
	}
}

function checkTwoSol(id, player, position) {
	document.getElementById(id).innerHTML = player;
	var temp = [];
	applyToSquare(player, function(id, player) {
		if (checkState(id, player)) {
			temp.push(id);
		}
	});
	if (temp.length > 1) {
		position.push(id);
	}
	document.getElementById(id).innerHTML = "";
}
