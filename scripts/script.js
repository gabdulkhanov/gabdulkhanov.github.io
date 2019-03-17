var compas = document.getElementById("compas");
var angle = 30;

setInterval(function() {
	compas.style.transform = "rotate(" + angle + "deg)";
	angle+=5;
}, 100);