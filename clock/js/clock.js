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
	var s = ms / 1000;
	var m = s / 60;
	var h = m / 60;
	var d = h / 24;
	s -= Math.floor(m) * 60;
	m -= Math.floor(h) * 60;
	h -= Math.floor(d) * 24;
	debug.innerHTML = Math.floor(h) + ":" + Math.floor(m) + ":" + Math.floor(s);
}
