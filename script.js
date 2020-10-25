// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// GENERATE NEW PASSWORD
function generatePassword() {
  const pwc_lowercase = 'abcdefghijklmnopqrstuvwxyz'
  const pwc_uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const pwc_numeric = '0123456789'
  const pwc_special = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
  // RETRIEVE THE LENGTH OF THE PASSWORD. 
  var error_msg = ""
  var msg = "How long should the password be? Must be 8 to 128 Characters only"
  while (true) {
    var pw_length_responce = prompt((error_msg ? error_msg + "\n" : "") + msg)
    var pw_length = parseInt(pw_length_responce)
    // MUST BE NUMBERS ONLY AND MINIMUM 8 TO MAXIMUM 128 CHARACTERS ONLY 
    if (pw_length == NaN) {
      error_msg = "Not a number. Please try again."
    } else if (pw_length_responce == "") {
      error_msg = "No answer was provided. Please try again."
    } else if (pw_length < 0) {
      error_msg = "No negative number. Try again."
    } else if (pw_length < 8) {
      error_msg = "Too short. The password must have at least 8 characters."
    } else if (pw_length > 128) {
      error_msg = "Too long. The password must have maximum of 128 characters only."
    } else {
      break
    }
  }
  // GET THE CHARACTOR TYPES FOR THE PASSWORD.
  error_msg = ""
  msg = "What types of charaters would you like to include in your password?\n" +
      "Add any or all of the following options:\n" +
      "L = lowercase\n" +
      "U = uppercase\n" +
      "N = numeric\n" +
      "S = special characters\n"
  while (true) {
    var pw_charaters = prompt((error_msg ? error_msg + "\n" : "") + msg)
    var pw_lowercase = false
    var pw_uppercase = false
    var pw_numeric = false
    var pw_special = false
    var pw_options = ""
    // CONFIRM THE USER PASSED IN CORRECT OPTIONS.
    for (const char of pw_charaters) {
      switch (char.toUpperCase()) {
        case 'L': if (!pw_lowercase) {
          pw_lowercase = true
          pw_options += pwc_lowercase
        }; break
        case 'U': if (!pw_uppercase) {
          pw_uppercase = true
          pw_options += pwc_uppercase
        }; break
        case 'N': if (!pw_numeric) {
          pw_numeric = true
          pw_options += pwc_numeric
        }; break
        case 'S': if (!pw_special) {
          pw_special = true
          pw_options += pwc_special
        }; break
      }
    }
    if (pw_options != "") {
      break
    } else if (pw_charaters == "") {
      error_msg = "No answer provided. Try again."
    } else {
      error_msg = "The answer provided was not one of the options. Please select at least one."
    }
  }
  // FINAL PASSWORD RESULT.
  var output = ""
  let len = pw_options.length
  for (let i = 0; i < pw_length; i++) {
    let r = Math.floor(Math.random() * len)
    let c = pw_options[r]
    output += c
  }
  return output
}