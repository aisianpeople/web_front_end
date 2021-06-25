console.log("Successfully imported Profile Page.");

const faveClrAlert = (evt) => {
	evt.preventDefault();
	alert("Cyan");
}

const favePlcAlert = (evt) => {
	evt.preventDefault();
	alert("Japan-Yamanakako");
}

const faveRtlAlert = (evt) => {
	evt.preventDefault();
	alert("Christmas");
}


const faveColor = document.querySelector('#color');
const favePlace = document.querySelector('#place');
const faveRitual = document.querySelector('#ritual');

faveColor.addEventListener('click', faveClrAlert);
favePlace.addEventListener('click', favePlcAlert);
faveRitual.addEventListener('click', faveRtlAlert);