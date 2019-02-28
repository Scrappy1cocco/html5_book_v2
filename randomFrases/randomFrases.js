"use strict";

function randOperation() {
	var word0 = ["Мася ", "Петя ", "Вовиш ", "Токиш ", "Зал ", "Карп "];
	var word1 = ["любит ", "мечтает ", "хочет "];
	var word2 = ["сосать хуй ", "долбиться в сракатан ", "жрать говно ", "побрить яйца "];
	var word3 = ["у Маси ", "у Пети ", "у Вовиша ", "у Токиша ", "у Зала ", "у Карпа "];
	var word4 = ["с Масей ", "с Петей ", "с Вовишем ", "с Токишем ", "с Залом", "с Карпом "];

	var rand0 = Math.floor(Math.random() * word0.length);
	var rand1 = Math.floor(Math.random() * word1.length);
	var rand2 = Math.floor(Math.random() * word2.length);
	var rand3 = Math.floor(Math.random() * word3.length);
	var rand4 = Math.floor(Math.random() * word4.length);

	var text = document.getElementById('text');
	var phrase = "";

	function SelfCheck() {
		if (rand0 == rand3 || rand0 == rand4) {
			return false;
		}
		return true;
	}

	if (SelfCheck()) {

		if (rand2 == 0 || rand2 == 3) {
			phrase = word0[rand0] + word1[rand1] + word2[rand2] + word3[rand3];
		} else if (rand2 == 1) {
			phrase = word0[rand0] + word1[rand1] + word2[rand2] + word4[rand4];
		} else {
			phrase = word0[rand0] + word1[rand1] + word2[rand2] + word3[rand3].slice(2);
		}

		text.innerHTML = phrase;
	} else randOperation();
}

window.onload = randOperation;