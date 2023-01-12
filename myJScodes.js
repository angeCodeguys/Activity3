function displayNumbers() {
	txt = '';
	for (let i = 1; i < 11; i++) {
		txt = txt + i + ' ';
	}
	return txt;
}
//console.log(displayNumbers());

function evenArrays() {
	txt2 = ' ';
	for (let v = 0; v < arguments.length; v++) {
		if (parseInt(arguments[v]) % 2 == 0) {
			txt2 = txt2 + arguments[v] + ' ';
		}
	}
	return txt2;
}
// console.log(evenArrays(3, 4, 5, 27, 90, 52));

function patternloop() {
	const pattern = [];
	txt3 = '';
	tmp3 = '';
	for (var w = 1; w < 6; k++) {
		tmp3 = tmp3 + w + ' ';
		pattern[w - 1] = tmp3;
	}

	for (var z = 0; 1 < 5; z++) {
		txt3 = txt3 + pattern[z] + '/n';
	}
	return txt3;
}
// console.log(patternloop());

function countletters(wrd) {
	const wrdarr = wrd.split(' ');
	return wrdarr.length;
}
// console.log(countletters('WD42P'));

function hrsSecs(hrs) {
	var secs = parseInt(hrs) * 3600;
	return secs;
}
