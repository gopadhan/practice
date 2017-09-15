var gameCanvas, gameContext;
var gameWidth, gameHeight;
var picsToLoad = 5;
var background = document.createElement("img");
var obj1 = document.createElement("img");
var obj2 = document.createElement("img");
var obj3 = document.createElement("img");
var obj4 = document.createElement("img");
var threadDelta = 10;
var obj1x, obj1y, obj2x, obj2y, obj3x, obj3y, obj4x, obj4y;
var currentMousePosY = 0;
var currentMousePosX  =0;

window.onload = function(){
	gameCanvas = document.getElementById("gameCanvas");
	gameContext = gameCanvas.getContext("2d");

	gameWidth = window.innerWidth;
	gameHeight = window.innerHeight;

	gameCanvas.width = gameWidth;
	gameCanvas.height = gameHeight;

	gameInit();
}

function gameInit(){
	initInput();
	initLoad();

}

function initLoad(){	
	loadImages();
	redraw();
}

function redraw(){
	gameContext.drawImage(background, 0, 275, background.width-10, background.height, 0, 0, gameCanvas.width, gameCanvas.height+500);
	drawPic(obj1, 200,200,0);
	drawPic(obj2, 500,200,0);
	drawPic(obj3, 800,200,0);
	//drawPic(obj4, 1100,200,0);
	//colorRect(200-obj1.width/2, 200-obj1.height/2, obj1.width, obj1.height);	
	//colorString(200,310,'red');
	checkAndHighlightObj1();
	checkAndHighlightObj2();
	colorTextSmall("Select the Number 1", 10,40,'white');
	colorTextBig("1", 200, 200, 'white');


}
function recalculate(){
	if(threadDelta >= 50)
		threadMultiplier = -1;
	else if(threadDelta <= 10)
		threadMultiplier = 1;

	threadDelta += 1 * threadMultiplier;
	//console.log(threadDelta);
}
function startGame(){
	var fps = 30;
	setInterval(function(){
		recalculate();
		redraw();
	}, 1000/fps);
}

function colorRect(x,y,w,h,c){
	//gameContext.globalAlpha = 0.1;
	gameContext.fillStyle = c;
	gameContext.fillRect(x,y,w,h);
}

function colorCircle(x,y,r,c){
	gameContext.fillStyle = c;
	gameContext.beginPath();
	gameContext.arc(x,y,r,0,Math.PI*2, true);
	gameContext.fill();
}

function colorTextBig(text,x,y,c){
	gameContext.fillStyle = c;
	gameContext.font = "120px Verdana"
	gameContext.fillText(text,x-40,y+40);
}

function colorTextSmall(text,x,y,c){
	gameContext.fillStyle = c;
	gameContext.font = "20px Verdana"
	gameContext.fillText(text,x,y);
}

function drawPic(p,x,y,rad){
	gameContext.save();
	gameContext.translate(x,y);
	gameContext.rotate(rad);
	gameContext.drawImage(p, -p.width/2, -p.height/2);
	gameContext.restore();
}

function colorString(x,y,c){
	gameContext.strokeStyle = c;
	gameContext.lineWidth = 2;

	gameContext.beginPath();
	gameContext.moveTo(x,y);
	gameContext.quadraticCurveTo(x-threadDelta, y+threadDelta*2, x, y+100);

	gameContext.stroke();
}

function countLoadedImagesAndLaunchIfReady(){
	picsToLoad--;
	if(picsToLoad == 0){
		startGame();
	}
}
function loadImages(){
	background.onload = countLoadedImagesAndLaunchIfReady;
	background.src = "images/background.svg";

	obj1.onload = countLoadedImagesAndLaunchIfReady;
	obj1.src = "images/Balloons_01_256x256_Alt_04_001.png";

	obj2.onload = countLoadedImagesAndLaunchIfReady;
	obj2.src = "images/Balloons_01_256x256_Alt_04_007.png";

	obj3.onload = countLoadedImagesAndLaunchIfReady;
	obj3.src = "images/Balloons_01_256x256_Alt_04_006.png";

	obj4.onload = countLoadedImagesAndLaunchIfReady;
	obj4.src = "images/Balloons_01_256x256_Alt_04_005.png";
}

function checkAndHighlightObj1(){
	if(currentMousePosX >= 200-obj1.width/2 && currentMousePosX <= 200 + obj1.width/2){
		if(currentMousePosY >= 200-obj1.height/2 && currentMousePosY <= 200 + obj1.height/2){
			obj1.src =  "images/Balloons_01_256x256_Alt_04_005.png";
		}else{
			obj1.src = "images/Balloons_01_256x256_Alt_04_001.png";
		}}else{
			obj1.src = "images/Balloons_01_256x256_Alt_04_001.png";
		}
}

function checkAndHighlightObj2(){
	if(currentMousePosX >= 500 -obj2.width/2&& currentMousePosX <= 500 + obj2.width/2){
		if(currentMousePosY >= 200 - obj2.height/2 && currentMousePosY <= 200 + obj2.height/2){
			obj2.src =  "images/Balloons_01_256x256_Alt_04_005.png";
		}else{
			obj2.src = "images/Balloons_01_256x256_Alt_04_007.png";
		}
	}else{
			obj2.src = "images/Balloons_01_256x256_Alt_04_007.png";
		}
		
}