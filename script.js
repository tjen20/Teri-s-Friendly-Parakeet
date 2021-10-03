// Assignment code here
function generatePassword(){
    const passwordLength = parseInt(prompt('How long do you want your password to be?'))
    if (passwordLength < 8 || passwordLength >128) {
        window.alert('Password must be between 8 and 128 characters')

    };
    const lowercase = confirm('Do you want lowercase in your password?');
    const uppercase = confirm('Do you want uppercase in your password?');
    const numeric = confirm('Do you want to include numbers?');
    const specialCharacters = confirm('Do you want to include special characters?');
    
    const lowercaseCharacters = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseCharacters = 'ABCDEFGHIJKLMNOPQURSTUVWXYZ';
    const numericCharacters = '1234567890';
    const specialCharacterOptions = '!@#$%^&*()-+_=';
    var passwordCharacterOptions = '';

    function passwordCharacterOptions() {
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

    if (lowercase == false && uppercase == false && numericCharacters == false && specialCharacters == false) {
        window.alert('Must select at least one category')
        return
    }
    }

    if (generatePassword = '') {
        generatePassword();
      }

    function randomNum(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
      }

    let passwordStr = ('');

    for (let i = 0; i < passwordLength; i++) {
        passwordStr += passwordCharacterOptions[randomNum(0, generatePassword.length)];
  }

    return passwordStr;
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
generateBtn.addEventListener("click", writePassword)