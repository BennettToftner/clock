var canvas = document.getElementById("clock-canvas");
var ctx = canvas.getContext('2d');
var DELAY = 20;

var debug = document.getElementById("debug-text");

var d = new Date();
var s = 0;
var m = 0;
var h = 0;

setInterval(updateClock, DELAY);

function updateClock()
{
	d = new Date();
	var ms = d.getTime();
	s = ms / 1000;
	m = s / 60;
	h = m / 60;
	var days = h / 24;
	s -= Math.floor(m) * 60;
	m -= Math.floor(h) * 60;
	h -= Math.floor(days) * 24;
	debug.innerHTML = Math.floor(h) + ":" + Math.floor(m) + ":" + Math.floor(s);
}
