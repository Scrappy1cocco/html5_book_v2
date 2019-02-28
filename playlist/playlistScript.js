"use strict";

var button = document.getElementById('addButton');
button.onclick = handleButtonClick;
loadPlaylist();

function handleButtonClick() {
	var textInput = document.getElementById('songTextInput');
	var songName = textInput.value;
	var li = document.createElement('li');
	li.innerHTML = songName;
	var ul = document.getElementById('playlist');

	if (songName == "") {
		alert("Please enter a song");
	} else {
		alert("Adding " + songName);
		ul.appendChild(li);
		save(songName);
	}
}