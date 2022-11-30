const Validate4 = () => {
	let val = 0;
	var firstName = document.register.firstName;
	var lastName = document.register.lastName;
	var email = document.register.Email;
	var tel = document.register.Tel;

	// Errors
	var firstNameError = document.getElementById("firstNameerr");
	var lastNameError = document.getElementById("lastNameerr");
	var emailError = document.getElementById("Emailerr");
	var telError = document.getElementById("Telerr");

	const alphabet = /^([A-Za-z]{2,25})$/;

	//FirstName***************************
	if (firstName.value == "") {
		firstName.style.border = "4px solid red";
		firstNameError.textContent = "Please enter your first name";
		firstNameError.style =
			"color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif; margin-left:15px;";
		val++
	} else if (!firstName.value.match(alphabet)) {
		firstName.style.border = "4px solid red";
		firstNameError.textContent = "first name is alphabet and not more than 25 letters";
		firstNameError.style =
			"color:red; font-size:10px; font-family:Arial, Helvetica, Sans-serif; margin-left:10px;";
		return false;
	} else {
		firstName.style.border = "5px solid green";
		firstNameError.textContent = "";
	}

	//LastName***************************
	if (lastName.value == "") {
		lastName.style.border = "4px solid red";
		lastNameError.textContent = "Please enter your last name";
		lastNameError.style =
			"color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif; margin-left:15px;";
		val++
	} else if (!lastName.value.match(alphabet)) {
		lastName.style.border = "4px solid red";
		lastNameError.textContent = "last name is alphabet and not more than 25 letters";
		lastNameError.style =
			"color:red; font-size:10px; font-family:Arial, Helvetica, Sans-serif; margin-left:10px;";
		return false;
	} else {
		lastName.style.border = "5px solid green";
		lastNameError.textContent = "";
	}

	let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	//Email
	if (email.value === "") {
		email.style.border = "4px solid red";
		emailError.textContent = "Please enter your email";
		emailError.style =
			"color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif; margin-left:15px;";
		val++
	} else if (!email.value.match(emailRegex)) {
		email.style.border = "4px solid red";
		emailError.textContent = "email should follow the right order.";
		emailError.style =
			"color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif; margin-left:15px;";
		return false;
	} else {
		email.style.border = "3px solid red";
		emailError.textContent = "";
	}

	// Telephone
	const phoneNumberRegex = /^\+\d{12}$/;
	if (tel.value == "") {
		tel.style.border = "4px solid red";
		telError.textContent = "Please enter your phone number";
		telError.style =
			"color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif; margin-left:15px;";
		val++
		return false;
	} else if (!tel.value.match(phoneNumberRegex)) {
		tel.style.border = "4px solid red";
		telError.textContent = "Tel number must follow 07***(+2567***) format";
		telError.style =
			"color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif; margin-left:15px;";
		return false;
	} else {
		tel.style.border = "5px solid green";
		telError.textContent = "";
	}
};
