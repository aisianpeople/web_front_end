console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	//console.log('form submit');
	alert("Form has been submitted successfully.");
}

function userCompliment(evt) {
	evt.preventDefault();
	
	//console.log('form submit');
	alert("Have a nice day.");
}


let form = document.querySelector('form#contact');
let picture = document.querySelector('img');

form.addEventListener('submit', handleSubmit);
picture.addEventListener('mouseover', userCompliment);