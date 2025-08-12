
function checkUsername() 
{
	// Get feedback element 
	  var elMsg = document.getElementById('feedback');

	  // Get username input
	  var elUsername = document.getElementById('username');

	  // If username too short
	  if (elUsername.value.length < 5) {
		elMsg.innerHTML = 'Username must be 5 characters or more';
	  } else {
		// Otherwise clear message
		elMsg.innerHTML = '';
	  }

}
