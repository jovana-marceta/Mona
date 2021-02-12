const form = document.getElementById('signup-form');
const fullname = document.getElementById('fullname');
const email = document.getElementById('email');
const password = document.getElementById('password');

function showError(input, message){
	const formControl = input.parentElement;
	formControl.className = 'form-control error';
	const small = formControl.querySelector('small');
	small.innerText = message;
}

function showSuccess(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

function isValidEmail(email) {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

form.addEventListener('submit', function(e){

	e.preventDefault();

	if(fullname.value === '') {
		showError(fullname, 'fullname is required');
	} else {
		showSuccess(fullname);
	}

	if(email.value === '') {
		showError(email, 'Email is required');
	} else if(!isValidEmail(email.value)) {
		showError(email, 'Email is not valid');
	}
	else {
		showSuccess(email);
	}

	if(password.value === '') {
		showError(password, 'Password is required');
	} else {
		showSuccess(password);
	}

});