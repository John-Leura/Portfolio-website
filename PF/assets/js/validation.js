window.onload = function () {
  // Bind fields
  var elFirstName = document.getElementById('firstName');
  var elLastName = document.getElementById('lastName');
  var elEmail = document.getElementById('email');
  var elPhone = document.getElementById('phone');
  var elUsername = document.getElementById('username');
  var elPassword = document.getElementById('password');
  var elComments = document.getElementById('comments');

  // Reusable validation function for names
  function validateName(elInput, elOutput, elGroup) {
    var el = document.getElementById(elInput);
    var out = document.getElementById(elOutput);
    var group = document.getElementById(elGroup);
    var nameRegex = /^[a-zA-Z'-]{2,}$/;

    console.log(`Validating ${elInput}:`, el.value);

    if (!el.value.match(nameRegex)) {
      out.innerHTML = `${elInput} must be at least 2 characters and only letters, hyphens, or apostrophes.`;
      group.classList.add('has-error');
      group.classList.remove('has-success');
		
    } else {
      out.innerHTML = '';
      group.classList.remove('has-error');
      group.classList.add('has-success');
    }
  }

  // Email validation from assignment
  function validateEmail(elInput, elOutput, elGroup) {
    var el = document.getElementById(elInput);
    var out = document.getElementById(elOutput);
    var group = document.getElementById(elGroup);

    var validRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    console.log("Validating email:", el.value);

    if (!el.value.match(validRegex)) {
      out.innerHTML = 'Please enter a valid email address.';
      group.classList.add('has-error');
      group.classList.remove('has-success');
    } else {
      out.innerHTML = '';
      group.classList.remove('has-error');
      group.classList.add('has-success');
    }
  }
	function validateMinLength(elInput, elOutput, elGroup, minLength) {
  var el = document.getElementById(elInput);
  var out = document.getElementById(elOutput);
  var group = document.getElementById(elGroup);

  if (el.value.length < minLength) {
    out.innerHTML = `${elInput} must be at least ${minLength} characters.`;
    group.classList.add('has-error');
    group.classList.remove('has-success');
  } else {
    out.innerHTML = '';
    group.classList.remove('has-error');
    group.classList.add('has-success');
  }
}
	
	function validateComments(elInput, elOutput, elGroup) {
  var el = document.getElementById(elInput);
  var out = document.getElementById(elOutput);
  var group = document.getElementById(elGroup);

  if (el.value.trim() === '') {
    out.innerHTML = 'Comments cannot be empty.';
    group.classList.add('has-error');
    group.classList.remove('has-success');
  } else {
    out.innerHTML = '';
    group.classList.remove('has-error');
    group.classList.add('has-success');
  }
}
	
	function validatePhone(elInput, elOutput, elGroup) {
  var el = document.getElementById(elInput);
  var out = document.getElementById(elOutput);
  var group = document.getElementById(elGroup);
  var phoneRegex = /^\d{10}$/;

  if (!el.value.match(phoneRegex)) {
    out.innerHTML = 'Phone number must be exactly 10 digits (no dashes, spaces, or parentheses).';
    group.classList.add('has-error');
    group.classList.remove('has-success');
  } else {
    out.innerHTML = '';
    group.classList.remove('has-error');
    group.classList.add('has-success');
  }
}

  // Use ONLY this style of event listener:
  elFirstName.addEventListener('blur', function () {
    validateName('firstName', 'fnFeedBack', 'firstNameGroup');
  }, false);

  elLastName.addEventListener('blur', function () {
    validateName('lastName', 'lnFeedBack', 'lastNameGroup');
  }, false);

  elEmail.addEventListener('blur', function () {
    validateEmail('email', 'emailFeedBack', 'emailGroup');
  }, false);

    elPhone.addEventListener('blur', function () {
    validatePhone('phone', 'phoneFeedBack', 'phoneGroup');
  }, false);

  elUsername.addEventListener('blur', function () {
    validateMinLength('username', 'usernameFeedBack', 'usernameGroup', 6);
  }, false);

  elPassword.addEventListener('blur', function () {
    validateMinLength('password', 'passwordFeedBack', 'passwordGroup', 6);
  }, false);

  elComments.addEventListener('blur', function () {
    validateComments('comments', 'commentsFeedBack', 'commentsGroup');
  }, false);


};
