const Validate = () => {
	var fName = document.getElementById("fName");
	var lName = document.getElementById("lName");
	var uniqueNo = document.getElementById("uniqueNo");
	var phoneNo = document.getElementById("phoneNo");
	var email = document.getElementById("email")
	var role = document.getElementById("role");
    var password = document.getElementById("password");

	var fNameError = document.getElementById("fNameerr");
	var lNameError = document.getElementById("lNameerr");
	var uniqueNoError = document.getElementById("uniqueNoerr");
	var phoneNoError = document.getElementById("phoneNoerr");
	var emailError = document.getElementById("emailerr");
	var roleError = document.getElementById("roleerr");
	var passwordError = document.getElementById('passworderr');


	if(fName.value=="") {
		fName.style.border = "1px solid red";
		fNameError.textContent = "Please fill in your name";
		fNameError.style = "color: red; font-size: 11px; font-family: Arial, Helvetica, Sans-serif;";
		return false;
	}

    const unregex = /^AO-([0-9]{3})+$/;
    if (uniqueNo.value == "") {
		uniqueNo.style.border = "1px solid red";
		uniqueNoError.textContent = "please insert unique number";
		uniqueNoError.style = "color: red; font-size: 11px; font-family: Arial, Helvetica, Sans-serif;";
		return false;
	}else if(!(uniqueNo.value.match(unregex))){
        uniqueNo.style.border ='1px solid red';
        uniqueNoError.textContent = 'Unique number must follow UF-001 format';
        uniqueNoError.style = "color: red; font-size: 11px; font-family: Arial, Helvetica, Sans-serif;";
		return false;
    }


	if (role.value == "") {
		role.style.border = "1px solid red";
		roleError.textContent = "please select a role";
		roleError.style = "color: red; font-size: 11px; font-family: Arial, Helvetica, Sans-serif;";
		return false;
	}

    if (password.value == "") {
		password.style.border = "1px solid red";
		passwordError.textContent = "please put password";
		passwordError.style = "color: red; font-size: 11px; font-family: Arial, Helvetica, Sans-serif;";
		return false;
	}else if(password.value.length <5){
        password.style.border ='1px solid red';
        passwordError.textContent = 'Please password must be more than 5 letters';
        passwordError.style = "color: red; font-size: 11px; font-family: Arial, Helvetica, Sans-serif;";
		return false;
    }else if(password.value.length <15){
        password.style.border ='1px solid red';
        passwordError.textContent = 'Please password must not be more than 15 letters';
        passwordError.style = "color: red; font-size: 11px; font-family: Arial, Helvetica, Sans-serif;";
		return false;
};
