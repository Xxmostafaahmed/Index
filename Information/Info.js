const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});
//  for final data validation
const sendData = (usernameValue , sRate , count) => {
	if (sRate===count) {
		alert ('Registration successfull');
		swal("Good job!", "Registration successfull!"+usernameValue, "success");
		//you can add any html js file
		location.href =' ForU.html?username=${usernamevalue}'
		

	}
}
//For find successmsg 
//1st you have to check every element one by one $ also u can use for loop along with i
const Successmsg= (usernameValue) => {
	let formCon = document.getElementsByClassName('form-control');
	var count = formCon.length - 1;
	for(var i =0; i<formCon.length; i++) {
		if(formCon[i].className==="form-control success"){
			var sRate = 0+i;
			console.log(sRate);
			sendData(usernameValue , sRate , count);
		}else {
			return false;
		}
	}
}
function checkInputs() {
	// use trim to remove the whitespaces 
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	
	if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
	} else {
		setSuccessFor(username);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else {
		setSuccessFor(password);
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'Password2 cannot be blank');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords does not match');
	} else{
		setSuccessFor(password2);
	}
	Successmsg(usernameValue);

}
function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}