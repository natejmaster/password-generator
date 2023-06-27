// Assignment Code
var generateBtn = document.querySelector("#generate");

//For reference sake, this line and below is where my code is written.
//When the button is clicked, user is presented with a series of prompts
  //When prompted for password criteria, I select which criteria to include
  //When prompted for the length of the password, then user chooses a length between 8 characters and 128 characters
  //When asked for character types to include in the password, then I confirm whether or not to include certain character types
    //include or exclude lowercase
    //include or exclude uppercase
    //include or exclude numeric
    //include or exclude special characters.
  //This type prompt should be validated to ensure at least one character type was selected
  //Password that matches select criteria is generated
  //When password is generated, it is either printed as an alert or on the page
//This is where my code stops
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
