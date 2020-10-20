var canvas = document.getElementById("clock-canvas");
var ctx = canvas.getContext('2d');
var DELAY = 20;

var debug = document.getElementById("debug-text");

var d = new Date();

setInterval(updateClock, DELAY);

function updateClock()
{
	d = new Date();
	var ms = d.getTime();
	var s = 5;
	debug.innerHTML = ms;
}


