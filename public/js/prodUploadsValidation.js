const validate5 = () => {
	let val = 0;
	var supplierName = document.uploads.supplierName;
	var prodName = document.uploads.prodName;
	var regDate = document.uploads.regDate;
	var supplierId = document.uploads.supplierId;
	var prodImage = document.uploads.prodImage;
	var prodCategory = document.uploads.prodCategory;
	var uniqueNo = document.uploads.uniqueNo;
	var ward = document.uploads.ward;
	var prodType = document.uploads.prodType;
	var prodQuantity = document.uploads.prodQuantity;
	var paymentMode = document.uploads.paymentMode;
	var price = document.uploads.price;
	var deliveryMode = document.uploads.deliveryMode;
	var direction = document.uploads.direction;

	//ERRORs
	var supplierNameError = document.getElementById("supplierNameerr");
	var prodNameError = document.getElementById("prodNameerr");
	var regDateError = document.getElementById("regDateerr");
	var supplierIdError = document.getElementById("supplierIderr");
	var prodImageError = document.getElementById("prodImageerr");
	var prodCategoryError = document.getElementById("prodCategoryerr");
	var uniqueNoError = document.getElementById("uniqueNoerr");
	var wardError = document.getElementById("warderr");
	var prodTypeError = document.getElementById("prodTypeerr");
	var prodQuantityError = document.getElementById("prodQuantityerr");
	var paymentModeError = document.getElementById("paymentModeerr");
	var priceError = document.getElementById("priceerr");
	var deliveryModeError = document.getElementById("deliveryModeerr");
	var directionError = document.getElementById("directionerr");

	const alphabet = /^([A-Za-z]{2,25})$/;

	// Supplier Name
	if (supplierName.value == "") {
		supplierName.style.border = "4px solid red";
		supplierNameError.textContent = "Please enter supplier name";
		supplierNameError.style =
			"color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif; margin-left:15px;";
		val++
	} else if (!supplierName.value.match(alphabet)) {
		supplierName.style.border = "4px solid red";
		supplierNameError.textContent = "supplier name is alphabet and not more than 25 letters";
		supplierNameError.style =
			"color:red; font-size:10px; font-family:Arial, Helvetica, Sans-serif; margin-left:10px;";
		return false;
	} else {
		supplierName.style.border = "5px solid green";
		supplierNameError.textContent = "";
	}

	// Product Name
	if (prodName.value == "") {
		prodName.style.border = "4px solid red";
		prodNameError.textContent = "Please enter your product name";
		prodNameError.style =
			"color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif; margin-left:15px;";
		val++
	} else if (!prodName.value.match(alphabet)) {
		prodName.style.border = "4px solid red";
		prodNameError.textContent = "product name is alphabet and not more than 25 letters";
		prodNameError.style =
			"color:red; font-size:10px; font-family:Arial, Helvetica, Sans-serif; margin-left:10px;";
		return false;
	} else {
		prodName.style.border = "5px solid green";
		prodNameError.textContent = "";
	}

	// Date of upload
	if (regDate.value == "") {
		regDate.style.border = "4px solid red";
		regDateError.textContent = "Please enter your date of registration";
		regDateError.style =
			"color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif; margin-left:15px;";
		val++
	} else {
		regDate.style.border = "5px solid green";
		regDateError.textContent = "";
	}

	// Supplier Id (@email)
	let supplierIdRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if (supplierId.value === "") {
		supplierId.style.border = "4px solid red";
		supplierIdError.textContent = "Please enter your supplierId";
		supplierIdError.style =
			"color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif; margin-left:15px;";
		val++
	} else if (!supplierId.value.match(supplierIdRegex)) {
		supplierId.style.border = "4px solid red";
		supplierIdError.textContent = "supplierId should follow the right order.";
		supplierIdError.style =
			"color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif; margin-left:15px;";
		return false;
	} else {
		supplierId.style.border = "3px solid red";
		supplierIdError.textContent = "";
	}

	// product image
	if (prodImage.value == "") {
		prodImage.style.border = "4px solid red";
		prodImageError.textContent = "Please upload your product image";
		prodImageError.style =
			"color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif; margin-left:15px;";
		val++
	} else {
		prodImage.style.border = "5px solid green";
		prodImageError.textContent = "";
	}

	// Product Category
	if (prodCategory.value == "") {
		prodCategory.style.border = "4px solid red";
		prodCategoryError.textContent = "Please select your category";
		prodCategoryError.style =
			"color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif; margin-left:15px;";
		// return false
		val++
	} else {
		prodCategory.style.border = "5px solid green";
		prodCategoryError.textContent = "";
	}

	//Unique Number**************************
	const fORegex = /^FO-([0-9]{3})+$/;

	if (uniqueNo.value == "") {
		uniqueNo.style.border = "4px solid red";
		uniqueNoError.textContent = "Enter your Unique number";
		uniqueNoError.style =
			"color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif; margin-left:15px;";
		// return false
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

	//Product type***************************
	if (prodType.value == "") {
		prodType.style.border = "4px solid red";
		prodTypeError.textContent = "Please select your prodType";
		prodTypeError.style =
			"color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif; margin-left:10px;";
		val++
	} else {
		prodType.style.border = "5px solid green";
		prodTypeError.textContent = "";
	}

	// Product Quantity
	if (prodQuantity.value == "") {
		prodQuantity.style.border = "4px solid red";
		prodQuantityError.textContent = "Please input your prodQuantity";
		prodQuantityError.style =
			"color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif; margin-left:10px;";
		val++
	} else {
		prodQuantity.style.border = "5px solid green";
		prodQuantityError.textContent = "";
	}

	// Payment Mode
	if (paymentMode.value == "") {
		paymentMode.style.border = "4px solid red";
		paymentModeError.textContent = "Please select your paymentMode";
		paymentModeError.style =
			"color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif; margin-left:10px;";
		val++
	} else {
		paymentMode.style.border = "5px solid green";
		paymentModeError.textContent = "";
	}

	// Price
	if (price.value == "") {
		price.style.border = "4px solid red";
		priceError.textContent = "Please input your price";
		priceError.style =
			"color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif; margin-left:10px;";
		val++
	} else {
		price.style.border = "5px solid green";
		priceError.textContent = "";
	}

	// Delivery mode
	if (deliveryMode.value == "") {
		deliveryMode.style.border = "4px solid red";
		deliveryModeError.textContent = "Please select your deliveryMode";
		deliveryModeError.style =
			"color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif; margin-left:10px;";
		val++
	} else {
		deliveryMode.style.border = "5px solid green";
		deliveryModeError.textContent = "";
	}

	// Direction
	if (direction.value == "") {
		direction.style.border = "4px solid red";
		directionError.textContent = "Please enter your direction";
		directionError.style =
			"color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif; margin-left:15px;";
		val++
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
};
