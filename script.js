// Assignment Code
var generateBtn = document.querySelector("#generate");

//Function that generates the password
function generatePassword() {
  //Empty strings for the generated password and library of available characters (these will be populated later in the function)
  let generatedPassword = " "
  let availableChars = " "
  //When prompted for the length of the password, then user chooses a length between 8 characters and 128 characters
  let charLength = window.prompt("How many characters long do you want your password to be? (choose between the range of 8 and 128)")
  //If they choose a number outside this value, they are alerted and the function restarts
  if (charLength < 8 || charLength > 128) {
    window.alert("The value you submitted is not within the acceptable range")
    return generatePassword();
  }
  //If they choose a value that is not a number, they are alerted and the function restarts
  if (isNaN(charLength)) {
    window.alert("The value you entered is not a number")
    return generatePassword();
  }
  //Runs a function that uses four window.confirm methods to either add or exclude different sets of characters from the library of available characters
  function includeChars() {
    //include or exclude lowercase
    let includeLowercase = window.confirm("Do you want to include lowercase characters? (choose 'cancel' if you don't)")
    if (includeLowercase === true) {
      availableChars += "abcdefghijklmnopqrstuvwxyz";
    }
    //include or exclude uppercase
    let includeUppercase = window.confirm("Do you want to include uppercase characters? (choose 'cancel' if you don't)")
    if (includeUppercase === true) {
      availableChars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    //include or exclude numeric
    let includeNumeric = window.confirm("Do you want to include numeric characters? (choose 'cancel' if you don't)")
    if (includeNumeric === true) {
      availableChars += "0123456789"
    }
    //include or exclude special characters.
    let includeSpecial = window.confirm("Do you want to include special characters? (choose 'cancel' if you don't)")
    if (includeSpecial === true) {
      availableChars += "!@#%^&*$()-+=[]:;?><,."
    }
    //Validate that the user has selected at least one set of characters
    if (includeLowercase !== true && includeUppercase !== true && includeNumeric !== true && includeSpecial !== true) {
      window.alert("You must include at least one set of characters");
      return includeChars();
    }
  }
  //This function chooses which characters from the newly populated availableChars set to use at random.
  includeChars();
  for (i = 0; i < charLength; i++) {
    let randomCharacter = availableChars.charAt(Math.floor(Math.random() * availableChars.length));
    generatedPassword += randomCharacter;
  };

  // Write password to the #password input
  return generatedPassword
};
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
