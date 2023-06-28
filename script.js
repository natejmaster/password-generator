// Assignment Code
var generateBtn = document.querySelector("#generate");

//For reference sake, this line and below is where my code is written.
function generatePassword() {
  //When prompted for the length of the password, then user chooses a length between 8 characters and 128 characters
  let charLength = window.prompt("How many characters long do you want your password to be? (choose between the range of 8 and 128)")
  //Still need to add when prompt response is not a number to reject criteria
  if (charLength < 8 || charLength > 128) {
    window.alert("The value you submitted is not within the acceptable range")
    return generatePassword();
  }
  //Still need to write the for loop that will make the password the entered length.
  //Establish an array for possible character variables
  //When asked for character types to include in the password, then I confirm whether or not to include certain character types */
    //include or exclude lowercase
    let includeLowercase = window.confirm ("Do you want to include lowercase characters?")
    if (includeLowercase === true) {
    }
    //include or exclude uppercase
    let includeUppercase = window.confirm ("Do you want to include uppercase characters?")
    if (includeUppercase === true) {
    }
    //include or exclude numeric
    let includeNumeric = window.confirm ("Do you want to include numeric characters?")
    if (includeNumeric === true) {
    }
    //include or exclude special characters.
    let includeSpecial = window.confirm ("Do you want to include special characters?")
    if (includeSpecial === true) {
    }
    //This type prompt should be validated to ensure at least one character type was selected
 //Password that matches select criteria is generated
//When password is generated, it is either printed as an alert or on the page
//This is where my code stops */

// Write password to the #password input
};
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
