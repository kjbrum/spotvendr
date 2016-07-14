// Initialize parse
function initialize() {
	Parse.initialize("xxxxx","xxxxx");
}

// Handle the login form
function login() {
	Parse.User.logIn(document.getElementById("emailLogin").value, document.getElementById("passwordLogin").value, {
		success: function(user) {
			//window.location = '#hello'
			var user = Parse.User.current();
			if(user.get("Type") == false)
				alert("Works, user is ");
			else
				alert("Works, user is ");
		},
		error: function(user, error) {
			alert("try again,Kyle display error label");
			window.location = 'index.html'
		}
	});
};

// Handle the rentr signup form
function signUpRenter() {
	var user = new Parse.User();
	user.set("username", document.getElementById("emailRenter").value);
	user.set("password", document.getElementById("passwordRenter").value);
	user.set("FirstName", document.getElementById("firstNameRenter").value);
	user.set("LastName", document.getElementById("lastNameRenter").value);
	user.set("email", document.getElementById("emailRenter").value);
	user.set("Type",false);

	user.signUp(null, {
		success: function(user) {
			window.location = 'app.html'
		},
		error: function(user, error) {
			// Show the error message somewhere and let the user try again.
			alert("Error: " + error.code + " " + error.message);
		}
	});
};

// Handle the vendr signup form
function signUpVendr() {
	var user = new Parse.User();
	user.set("username", document.getElementById("emailVendr").value);
	user.set("password", document.getElementById("passwordVendr").value);
	user.set("FirstName", document.getElementById("firstNameVendr").value);
	user.set("LastName", document.getElementById("lastNameVendr").value);
	user.set("email", document.getElementById("emailVendr").value);
	user.set("Type",true);

	user.signUp(null, {
		success: function(user) {
			window.location = 'app.html'
		},
		error: function(user, error) {
			// Show the error message somewhere and let the user try again.
			alert("Error: " + error.code + " " + error.message);
		}
	});
};

// Handle the email notification signup form
function signUpAll() {
	var GeneralUser = Parse.Object.extend("GeneralUsers");
	var newUser = new GeneralUser();
	newUser.set("Firstname", document.getElementById("firstNameAll").value);
	newUser.set("Lastname", document.getElementById("lastNameAll").value);
	newUser.set("email", document.getElementById("emailAll").value);

	newUser.save(null, {
		success: function (schedule) {
			//should now use php and ajax to email user
			$('#signup-form-wrapper').hide();
			$('#signup-thank-you').fadeIn();
		},
		error: function (schedule, error) {
		alert("did not do it");
			//show error message
			// The save failed.
			// error is a Parse.Error with an error code and description.
		}
	});
};

function contact() {

	var contact = Parse.Object.extend("Contact");
	var contactUs = new contact();
	contactUs.set("email", document.getElementById("emailContact").value);
	contactUs.set("fullName", document.getElementById("fullNameContact").value);
	contactUs.set("message", document.getElementById("messageContact").value);
	contactUs.set("phone", document.getElementById("phoneContact").value);

	contactUs.save(null, {
		success: function (schedule) {
			$('#contact-form-wrapper').hide();
			$('#contact-thank-you').fadeIn();
			//show and hide div
		},
		error: function (schedule, error) {
		alert("did not do it");
		alert("WE NEED A ERROR LABEL");
			//show error message
			// The save failed.
			// error is a Parse.Error with an error code and description.
		}
	});

}
