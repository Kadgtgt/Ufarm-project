// const Validate = (event) => {
// 	let val = 0;

// 	// var firstName = document.getElementById.fName;
// 	// var lastName = document.getElementById.lName;
// 	// var contact = document.getElementById.tel;
// 	// var dateOfBirth = document.getElementById.dob;
// 	// var dateOfReg = document.getElementById.dor;
// 	// var ninNo = document.getElementById.ninNo;
// 	// var activity = document.getElementById.activity;
// 	// var password = document.getElementById.password;
// 	// var uniqueNo = document.getElementById.uniqueNo;
// 	// var residenceType = document.getElementById.residence;
// 	// var pOfStay = document.getElementById.pos;
// 	// var wardname = document.getElementById.ward;
// 	// var roles = document.getElementById.role;
// 	// var directions = document.getElementById.direction;

// 	var firstName = document.getElementById("fNameerr");
// 	var lastName = document.getElementById("lNameerr");
// 	var dateOfBirth = document.getElementById("doberr");
// 	var  dateOfReg = document.getElementById("doreerr");
// 	var contact = document.getElementById("telerr");
// 	var ninNo = document.getElementById("ninNoerr");
// 	var activity = document.getElementById("activitieserr");
// 	var uniqueNo = document.getElementById("uniqueNoerr");
// 	var role = document.getElementById("roleerr");
// 	var residenceType = document.getElementById("residenceerr");
// 	var password = document.getElementById("passworderr");
// 	var pOstay = document.getElementById("poserr");
// 	var direction = document.getElementById("directionerr");
// 	var wardName = document.getElementById("warderr");

// 	//ERRORs
// 	var fNameError = document.getElementById("fNameerr");
// 	var lNameError = document.getElementById("lNameerr");
// 	var birthDateError = document.getElementById("doberr");
// 	var rDateError = document.getElementById("doreerr");
// 	var contactError = document.getElementById("telerr");
// 	var ninNoError = document.getElementById("ninNoerr");
// 	var activityError = document.getElementById("activitieserr");
// 	var uniqueNoError = document.getElementById("uniqueNoerr");
// 	var roleError = document.getElementById("roleerr");
// 	var restypeError = document.getElementById("residenceerr");
// 	var passwordError = document.getElementById("passworderr");
// 	var pOstayError = document.getElementById("poserr");
// 	var directionError = document.getElementById("directionerr");
// 	var wardnameError = document.getElementById("warderr");

// 	const numbers = /^[0-9]+$/;
// 	// for email address /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/
// 	const alphabet = /^[A-Za-z]+$/;

// 	const alphanumeric = /^[0-9a-zA-Z]+$/;

// 	//FirstName validation
// 	if (firstName.value == "") {
// 		firstName.style.border = "3px solid red";
// 		fNameError.textContent = "Enter your first name";
// 		fNameError.style = "color:red; font-size:12px; font-family: Sans-serif; margin-left:25px;";
// 		return false;
// 	} else if (!firstName.value.match(alphabet)) {
// 		firstName.style.border = "3px solid red";
// 		fNameError.textContent = "First name must be in alphabet";
// 		fNameError.style = "color:red; font-size:10px; font-family: Sans-serif; margin-left:25px;";
// 		return false;
// 	} else {
// 		firstName.style.border = "5px solid teal";
// 		fNameError.textContent = "";
// 	}

// 	//LastName validation
// 	if (lastName.value == "") {
// 		lastName.style.border = "3px solid red";
// 		lNameError.textContent = "Enter your last name";
// 		lNameError.style = "color:red; font-size:12px; font-family: Sans-serif; margin-left:25px;";
// 		return false;
// 	} else if (!lastName.value.match(alphabet)) {
// 		lastName.style.border = "5px solid red";
// 		lNameError.textContent = "Last name must be in alphabet";
// 		lNameError.style =
// 			"color:red; font-size:10px; font-family:Arial, Helvetica, Sans-serif; margin-left:25px;";
// 		return false;
// 	} else {
// 		lastName.style.border = "5px solid teal";
// 		lNameError.textContent = "";
// 	}

// 	//Date of getElementById validation
// 	if (dateOfgetElementById.value == "") {
// 		dateOfgetElementById.style.border = "3px solid red";
// 		dorError.textContent = "Enter your date of getElementById";
// 		dorError.style = "color:red; font-size:10px; font-family: Sans-serif; margin-left:15px;";
// 		return false;
// 	} else {
// 		dateOfgetElementById.style.border = "5px solid green";
// 		rDateError.textContent = "";
// 	}

// 	//NinNo validation
// 	if (ninNo.value == "") {
// 		ninNo.style.border = "3px solid red";
// 		ninNoError.textContent = "Enter your NIN number";
// 		ninNoError.style = "color:red; font-size:15px; Sans-serif; margin-left:25px;";
// 		return false;
// 	} else if (!nin.value.match(alphanumeric)) {
// 		ninNo.style.border = "3px solid red";
// 		ninNoError.textContent = "NIN number must follow CF*********** format";
// 		ninNoError.style = "color:red; font-size:12px; font-family: Sans-serif; margin-left:25px;";
// 		return false;
// 	} else {
// 		ninNo.style.border = "5px solid green";
// 		ninNoError.textContent = "";
// 	}

// 	//Date of Birth validation
// 	if (dateOfBirth.value == "") {
// 		dateOfBirth.style.border = "4px solid red";
// 		birthDateError.textContent = "Please enter your date of birth";
// 		birthDateError.style =
// 			"color:red; font-size:15px; font-family:Arial, Helvetica, Sans-serif; margin-left:25px;";
// 		return false;
// 	} else {
// 		dateOfBirth.style.border = "5px solid green";
// 		birthDateError.textContent = "";
// 	}

// 	//Contact*****************************************************************************
// 	if (contact.value == "") {
// 		contact.style.border = "4px solid red";
// 		contactError.textContent = "Please enter your phone number";
// 		contactError.style =
// 			"color:red; font-size:15px; font-family:Arial, Helvetica, Sans-serif; margin-left:25px;";
// 		return false;
// 	} else if (!contact.value.match(alphanumeric)) {
// 		contact.style.border = "4px solid red";
// 		contactError.textContent = "Unique number must follow 07********(+2567******) format";
// 		contactError.style =
// 			"color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif; margin-left:25px;";
// 		return false;
// 	} else {
// 		contact.style.border = "5px solid green";
// 		contactError.textContent = "";
// 	}

// 	//Activities*****************************************************************************
// 	if (activity.value == "") {
// 		activity.style.border = "4px solid red";
// 		activityError.textContent = "Please select your role";
// 		activityError.style =
// 			"color:red; font-size:15px; font-family:Arial, Helvetica, Sans-serif; margin-left:25px;";
// 		return false;
// 	} else {
// 		activity.style.border = "5px solid green";
// 		activityError.textContent = "";
// 	}

// 	//Unique Number************************************************************************
// 	const foregex = /^FO-([0-9]{4})+$/;
// 	const ufregex = /^UF-([0-9]{4})+$/;
// 	const aoregex = /^AO-([0-9]{4})+$/;

// 	if (uniqueNo.value == "") {
// 		uniqueNo.style.border = "4px solid red";
// 		// uniqueNo.style.background ='red'
// 		uniqueNoError.textContent = "Please enter your Unique number";
// 		uniqueNoError.style =
// 			"color:red; font-size:15px; font-family:Arial, Helvetica, Sans-serif; margin-left:25px;";
// 		return false;
// 	} else if (!uniqueNo.value.match(foregex)) {
// 		uniqueNo.style.border = "4px solid red";
// 		// uniqueNo.style.background ='red'
// 		uniqueNoError.textContent = "Unique number must follow (FO-0001) format";
// 		uniqueNoError.style =
// 			"color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif; margin-left:25px;";
// 		return false;
// 	} else {
// 		uniqueNo.style.border = "5px solid green";
// 		uniqueNoError.textContent = "";
// 	}

// 	//Role*************************************************************************************
// 	if (roles.value == "") {
// 		roles.style.border = "4px solid red";
// 		// roles.style.background ='red'
// 		roleError.textContent = "Please select your role";
// 		roleError.style =
// 			"color:red; font-size:15px; font-family:Arial, Helvetica, Sans-serif; margin-left:25px;";
// 		return false;
// 	} else {
// 		roles.style.border = "5px solid green";
// 		roleError.textContent = "";
// 	}

// 	//ResType*****************************************************************************
// 	if (residenceType.value == "") {
// 		residenceType.style.border = "4px solid red";
// 		restypeError.textContent = "Please enter your Residence type";
// 		restypeError.style =
// 			"color:red; font-size:15px; font-family:Arial, Helvetica, Sans-serif; margin-left:25px;";
// 		return false;
// 	} else {
// 		residenceType.style.border = "5px solid green";
// 		restypeError.textContent = "";
// 	}

// 	//Password********************************************************************
// 	if (password.value == "") {
// 		password.style.border = "4px solid red";
// 		// roles.style.background ='red'
// 		passwordError.textContent = "Please enter your password";
// 		passwordError.style =
// 			"color:red; font-size:15px; font-family:Arial, Helvetica, Sans-serif; margin-left:25px;";
// 		return false;
// 	} else if (password.value.length > 16) {
// 		password.style.border = "4px solid red";
// 		// firstName.style.background ='red'
// 		passwordError.textContent = "Password must not exceed 16 characters";
// 		passwordError.style =
// 			"color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif; margin-left:25px;";
// 		return false;
// 	} else if (password.value.length < 6) {
// 		password.style.border = "4px solid red";
// 		// firstName.style.background ='red'
// 		passwordError.textContent = "Password must have atleast 6 characters";
// 		passwordError.style =
// 			"color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif; margin-left:25px;";
// 		return false;
// 	} else {
// 		password.style.border = "5px solid green";
// 		passwordError.textContent = "";
// 	}

// 	//ComfirmPassword********************************************************************
// 	if (comfirmPassword.value == "") {
// 		comfirmPassword.style.border = "4px solid red";
// 		// roles.style.background ='red'
// 		comfirmError.textContent = "Please enter your password";
// 		comfirmError.style =
// 			"color:red; font-size:15px; font-family:Arial, Helvetica, Sans-serif; margin-left:15px;";
// 		return false;
// 	} else if (comfirmPassword.value.length > 16) {
// 		comfirmPassword.style.border = "4px solid red";
// 		// firstName.style.background ='red'
// 		comfirmError.textContent = "Password must not exceed 16 characters ";
// 		comfirmError.style =
// 			"color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif; margin-left:25px;";
// 		return false;
// 	} else if (comfirmPassword.value.length < 6) {
// 		comfirmPassword.style.border = "4px solid red";
// 		// firstName.style.background ='red'
// 		comfirmError.textContent = "Password must have atleast 6 characters";
// 		comfirmError.style =
// 			"color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif; margin-left:25px;";
// 		return false;
// 	} else {
// 		comfirmPassword.style.border = "5px solid green";
// 		comfirmError.textContent = "";
// 	}

// 	//PeriodOStay*****************************************************************************
// 	if (pOfStay.value == "") {
// 		pOfStay.style.border = "4px solid red";
// 		pOstayError.textContent = "Please enter your Residence type";
// 		pOstayError.style =
// 			"color:red; font-size:15px; font-family:Arial, Helvetica, Sans-serif; margin-left:25px;";
// 		return false;
// 	} else if (!pOfStay.value.match(alphanumeric)) {
// 		pOfStay.style.border = "4px solid red";
// 		pOstayError.textContent = "Alphanumerics are allowed";
// 		pOstayError.style =
// 			"color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif; margin-left:25px;";
// 		return false;
// 	} else {
// 		pOfStay.style.border = "5px solid green";
// 		pOstayError.textContent = "";
// 	}

// 	//wardName*****************************************************************************
// 	if (wardname.value == "") {
// 		wardname.style.border = "4px solid red";
// 		// roles.style.background ='red'
// 		wardnameError.textContent = "Please select your role";
// 		wardnameError.style =
// 			"color:red; font-size:15px; font-family:Arial, Helvetica, Sans-serif; margin-left:25px;";
// 		return false;
// 	} else {
// 		wardname.style.border = "5px solid green";
// 		wardnameError.textContent = "";
// 	}

// 	//Direction*****************************************************************************
// 	if (directions.value == "") {
// 		directions.style.border = "4px solid red";
// 		directionError.textContent = "Please enter your Unique number";
// 		directionError.style =
// 			"color:red; font-size:15px; font-family:Arial, Helvetica, Sans-serif; margin-left:25px;";
// 		return false;
// 	} else if (!directions.value.match(alphanumeric)) {
// 		directions.style.border = "4px solid red";
// 		directionError.textContent = "Unique number must follow (FO-0001) format";
// 		directionError.style =
// 			"color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif; margin-left:25px;";
// 		return false;
// 	} else {
// 		directions.style.border = "5px solid green";
// 		directionError.textContent = "";
// 	}

// 	//Gender*****************************************************************************
// };
