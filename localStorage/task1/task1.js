// localStorage.setItem("sticky_0", "Pick up dry cleaning");
// localStorage.setItem("sticky_1", "Cancel cable tv, who needs it now?");

window.onload = init; 

var button = document.getElementById('add_button');
button.onclick = createSticky;

var clearButton = document.getElementById('clear_button');
clearButton.onclick = function() {
	localStorage.clear();
	var stickies = document.getElementById('stickies');
	var lis = document.getElementsByTagName('li');
	var currentLength = lis.length

	for (var i = 0; i < currentLength; i++) {
		stickies.removeChild(lis[lis.length - 1]);
	}
}

function init() {
	for (var i = 0; i < localStorage.length; i++) {
		var key = localStorage.key(i);
		if (key.substring(0, 6) == "sticky") {
			var value = localStorage.getItem(key);
			addStickyToDOM(value);
		}
	}
}

function addStickyToDOM(value) {
	var stickies = document.getElementById('stickies');
	var sticky = document.createElement('li');
	var span = document.createElement('span');
	span.setAttribute('class', 'sticky');

	span.innerHTML = value;
	sticky.appendChild(span);
	stickies.appendChild(sticky);
}

function createSticky() {
	var value = document.getElementById('note_text').value;
	var key = "sticky_" + localStorage.length;
	localStorage.setItem(key, value);

	addStickyToDOM(value);
}