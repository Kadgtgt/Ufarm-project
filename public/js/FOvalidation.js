const Validate = (event) => {
	let val = 0;
	var fName = document.register.fName;
	var lName = document.register.lName;
	var dor = document.register.dor;
	var activity = document.register.activity;
	var uniqueNo = document.register.uniqueNo;
	var phoneNo = document.register.tel;
	var ward = document.register.ward;
	var residence = document.register.residence;
	var dob = document.register.dob;
	var ninNo = document.register.ninNo;
	var role = document.register.role;
	var pos = document.register.pos;
	var gender = document.register.gender;
	var direction = document.register.direction;
	var password = document.register.password;

	//ERRORs
	var fNameError = document.getElementById("fNameerr");
	var lNameError = document.getElementById("lNameerr");
	var dorError = document.getElementById("dorerr");
	var activityError = document.getElementById("activityerr");
	var uniqueNoError = document.getElementById("uniqueNoerr");
	var phoneNoError = document.getElementById("telerr");
	var wardError = document.getElementById("warderr");
	var residenceError = document.getElementById("residenceerr");
	var dobError = document.getElementById("doberr");
	var ninNoError = document.getElementById("ninNoerr");
	var roleError = document.getElementById("roleerr");
	var posError = document.getElementById("poserr");
	var genderError = document.getElementById("gendererr");
	var directionError = document.getElementById("directionerr");
	var passwordError = document.getElementById("passworderr");

	const alphabet = /^([A-Za-z]{2,25})$/;
	const alphaNumerik = /^([0-9a-zA-Z]{13})+$/;
	const alphanumeric = /^(?:[1-9][0-9])$/;
	let phonenumberRegex = /^\+\d{12}$/;

	//FirstName***************************
	if (fName.value == "") {
		fName.style.border = "4px solid red";
		fNameError.textContent = "Please enter your first name";
		fNameError.style =
			"color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif; margin-left:15px;";
		val++
	} else if (!fName.value.match(alphabet)) {
		fName.style.border = "4px solid red";
		fNameError.textContent = "first name is alphabet and not more than 25 letters";
		fNameError.style =
			"color:red; font-size:10px; font-family:Arial, Helvetica, Sans-serif; margin-left:10px;";
		return false;
	} else {
		fName.style.border = "5px solid green";
		fNameError.textContent = "";
	}

	//LastName***************************
	if (lName.value == "") {
		lName.style.border = "4px solid red";
		lNameError.textContent = "Please enter your last name";
		lNameError.style =
			"color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif; margin-left:15px;";
		val++
	} else if (!lName.value.match(alphabet)) {
		lName.style.border = "4px solid red";
		lNameError.textContent = "last name is alphabet and not more than 25 letters";
		lNameError.style =
			"color:red; font-size:10px; font-family:Arial, Helvetica, Sans-serif; margin-left:10px;";
		return false;
	} else {
		lName.style.border = "5px solid green";
		lNameError.textContent = "";
	}

	//Date of Registration***************************
	if (dor.value == "") {
		dor.style.border = "4px solid red";
		dorError.textContent = "Please enter your date of registration";
		dorError.style =
			"color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif; margin-left:15px;";
		val++
	} else {
		dor.style.border = "5px solid green";
		dorError.textContent = "";
	}

	//Activities***************************
	if (activity.value == "") {
		activity.style.border = "4px solid red";
		activityError.textContent = "Please select your activity";
		activityError.style =
			"color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif; margin-left:15px;";
		val++
	} else {
		activity.style.border = "5px solid green";
		activityError.textContent = "";
	}

	//Unique Number**************************
	const fORegex = /^FO-([0-9]{3})+$/;
	if (uniqueNo.value == "") {
		uniqueNo.style.border = "4px solid red";
		uniqueNoError.textContent = "Enter your Unique number";
		uniqueNoError.style =
			"color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif; margin-left:15px;";
		val++
	} else if (!uniqueNo.value.match(fORegex)) {
		uniqueNo.style.border = "4px solid red";
		uniqueNoError.textContent = "Unique number must follow (FO-001) format";
		uniqueNoError.style =
			"color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif; margin-left:15px;";
		return false;
	} else {
		uniqueNo.style.border = "5px solid green";
		uniqueNoError.textContent = "";
	}

	//Phone number***************************
	if (phoneNo.value == "") {
		phoneNo.style.border = "4px solid red";
		phoneNoError.textContent = "Please enter your phone number";
		phoneNoError.style =
			"color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif; margin-left:15px;";
		val++
	} else if (!phoneNo.value.match(phonenumberRegex)) {
		phoneNo.style.border = "4px solid red";
		phoneNoError.textContent = "Phone number must follow 07***(+2567***) format";
		phoneNoError.style =
			"color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif; margin-left:15px;";
		return false;
	} else {
		phoneNo.style.border = "5px solid green";
		phoneNoError.textContent = "";
	}

	//ward***************************
	if (ward.value == "") {
		ward.style.border = "4px solid red";
		wardError.textContent = "Please select your ward";
		wardError.style =
			"color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif; margin-left:10px;";
		val++
	} else {
		ward.style.border = "5px solid green";
		wardError.textContent = "";
	}

	// residence*************
	if (residence.value == "") {
		residence.style.border = "4px solid red";
		residenceError.textContent = "Please enter your Residence type";
		residenceError.style =
			"color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif; margin-left:15px;";
		val++;
	} else {
		residence.style.border = "5px solid green";
		residenceError.textContent = "";
	}

	// Date of birth
	if (dob.value == "") {
		dob.style.border = "4px solid red";
		dobError.textContent = "Please enter your date of birth";
		dobError.style =
			"color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif; margin-left:15px;";
		val++
	} else {
		dob.style.border = "5px solid green";
		dobError.textContent = "";
	}

	// NIN Number
	if (ninNo.value == "") {
		ninNo.style.border = "4px solid red";
		ninNoError.textContent = "Please enter your ninNo number";
		ninNoError.style =
			"color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif; margin-left:15px;";
		val++
	} else if (!ninNo.value.match(alphaNumerik)) {
		ninNo.style.border = "4px solid red";
		ninNoError.textContent =
			"ninNo number must not exceed 13 digits and should be alphanumeric";
		ninNoError.style =
			"color:red; font-size:10px; font-family:Arial, Helvetica, Sans-serif; margin-left:10px;";
		return false;
	} else {
		ninNo.style.border = "5px solid green";
		ninNoError.textContent = "";
	}

	// Role
	if (role.value == "") {
		role.style.border = "4px solid red";
		roleError.textContent = "Please select your role";
		roleError.style =
			"color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif; margin-left:15px;";
		val++
	} else {
		role.style.border = "5px solid green";
		roleError.textContent = "";
	}

	// Period of stay********
	if (pos.value == "") {
		pos.style.border = "4px solid red";
		posError.textContent = "Please enter your period of stay";
		posError.style =
			"color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif; margin-left:15px;";
		val++
	} else if (!pos.value.match(alphanumeric)) {
		pos.style.border = "4px solid red";
		posError.textContent = "Farmer One must have stayed in place for 10yrs and above";
		posError.style =
			"color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif; margin-left:15px;";
		return false;
	} else {
		pos.style.border = "5px solid green";
		posError.textContent = "";
	}

	// Gender
	if (!gender1.checked && !gender2.checked) {
		gender.style.border = "4px solid red";
		genderError.textContent = "Select your gender";
		genderError.style =
			"color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif; margin-left:15px;";
		val++
	} else {
		gender.style.border = "5px solid green";
		genderError = "";
	}

	// Direction
	if (direction.value == "") {
		direction.style.border = "4px solid red";
		directionError.textContent = "Please enter your direction";
		directionError.style =
			"color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif; margin-left:15px;";
		val++
		return false;
	} else if (!direction.value.match(alphabet)) {
		direction.style.border = "4px solid red";
		directionError.textContent = "Your direction must follow the alphanumeric format";
		directionError.style =
			"color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif; margin-left:12px;";
		return false;
	} else {
		direction.style.border = "5px solid green";
		directionError.textContent = "";
	}

	// Password
	if (password.value == "") {
		password.style.border = "4px solid red";
		passwordError.textContent = "Please enter your password";
		passwordError.style =
			"color:red; font-size:10px; font-family:Arial, Helvetica, Sans-serif; margin-left:12px;";
		val++
		return false;
	} else if (password.value.length > 16) {
		password.style.border = "4px solid red";
		passwordError.textContent = "Password must not exceed 16 characters";
		passwordError.style =
			"color:red; font-size:10px; font-family:Arial, Helvetica, Sans-serif; margin-left:12px;";
		val++
	} else if (password.value.length < 6) {
		password.style.border = "4px solid red";
		passwordError.textContent = "Password must have more than 6 characters";
		passwordError.style =
			"color:red; font-size:10px; font-family:Arial, Helvetica, Sans-serif; margin-left:12px;";
		val++
	} else {
		password.style.border = "5px solid green";
		passwordError.textContent = "";
	}

	if(val>0){
		event.preventDefault()
	};
};
