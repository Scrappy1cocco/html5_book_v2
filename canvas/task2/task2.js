var canvas = document.getElementById('triangle');
var context = canvas.getContext('2d');

// context.beginPath();
context.arc(100, 100, 75, 0, degreesToRadians(270), true);
// context.closePath();

// context.lineWidth = 5;
// context.stroke();
context.fillStyle = "red";
context.fill();

function degreesToRadians(degrees) {
	return (degrees * Math.PI)/180;
}