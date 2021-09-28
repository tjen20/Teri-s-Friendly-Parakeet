// Assignment code here
function generatePassword(){
    var passwordLength = parseInt(prompt('How long do you want your password to be?'));
    var lowercase = confirm('Do you want lowercase in your password?');
    var uppercase = confirm('Do you want uppercase in your password?');
    var numeric = confirm('Do you want to include numbers?');
    var specialCharacters = confirm('Do you want to include special characters?');
    
    var lowercaseCharacters = 'abcdefghijklmnopqrstuvwxyz'
    var uppercaseCharacters = 'ABCDEFGHIJKLMNOPQURSTUVWXYZ'
    var numericCharacters = '1234567890'
    var specialCharacterOptions = '!@#$%^&*()-+_='
    var passwordCharacterOptions = ''

    if (passwordLength < 8 || passwordLength >128) {
        alert('Must be between 8 and 128 characters')
    }

    if (lowercase == true) {
        passwordCharacterOptions = passwordCharacterOptions + lowercaseCharacters
    }

    if (uppercase == true) {
        passwordCharacterOptions = passwordCharacterOptions + uppercaseCharacters
    }

    if (numeric == true) {
        passwordCharacterOptions = passwordCharacterOptions + numericCharacters
    }

    if (specialCharacters == true) {
        passwordCharacterOptions = passwordCharacterOptions + specialCharacterOptions
    }

    if (lowercase == false && uppercase == false && numericCharacters == false && specialCharacters == false){
        alert('Must select at least one category')
        return
    }

    console.log(passwordLength, lowercase, uppercase, numeric, specialCharacters, passwordCharacterOptions)
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
