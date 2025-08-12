// JavaScript Document
//var elMsg = document.getElementById('feedback');
var elUsername = document.getElementById('username');
var elPassword = document.getElementById('password');
function checkInput(minLength, elInput, elOutput) {
	
	console.log('elOutput: ' + elOutput);
	var elCheck = document.getElementById(elInput);
	var elOut = document.getElementById(elOutput);
	
    if (elCheck.value.length < minLength) {
    	
		console.log('Input El Length: ' + elCheck.value.length);
		elOut.innerHTML = elInput 'must be ' + minLength + ' characters or more';

	} else {
        elOut.innerHTML = '';
    }
}

elUsername.addEventListener('blur', function () {
    checkInput(5, 'username', 'UNfeedback');
}, false);

elPassword.addEventListener('blur', function(){}
						   checkInput(8, 'password', 'PWfeedback');
							},false);