var score = 0;
var currentScore = 0;
var scoreText;

var createHud = function () {
	var hudTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");

	// Create a Text Block that can display the current score
	scoreText = new BABYLON.GUI.TextBlock();
	scoreText.fontFamily = "Comic Sans, Comic Sans MS";
	scoreText.color = "white";
	scoreText.fontSize = 48;
	scoreText.verticalAlignment = BABYLON.GUI.TextBlock.VERTICAL_ALIGNMENT_TOP;
	scoreText.horizontalAlignment = BABYLON.GUI.TextBlock.HORIZONTAL_ALIGNMENT_CENTER;
	scoreText.width = 0.5;
	scoreText.height = 0.15;

	updateScoreText();

	hudTexture.addControl(scoreText);
};

var setScore = function (score, currentScore) {
	scoreText.text = "score: " + score  + "        " + "current: " + currentScore;
};

var updateScoreText = function () {
	localStorage = navigator.localStorage;
	score = localStorage.getItem("highScore")

	if (currentScore  > score) {
		score = currentScore;
		localStorage.setItem("highScore", score);
	}
	
	setScore(score, currentScore);
};


var resetScore = function () {
	console.log("Score reset at: " + currentScore);
	currentScore = 0;

	setScore(score, currentScore);
};

var addScore = function (points) {
	currentScore += points;
	updateScoreText();
};
