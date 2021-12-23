// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var passwordLength = getLength();
  var hasUpperCase = confirm("Would you like to include uppercase characters?");
  var hasLowerCase = confirm("Would you like to include lowercase characters?");
  var hasSpecial = confirm("Would you like to include special characters?");
  var hasNumbers = confirm("Would you like to include numbers?");

  var upperCasedCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
  var lowerCasedCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  var numericCharacters = ["0","1","2","3","4","5","6","7","8","9"]
  var specialCharacters = ["@","%","+","\\","/","*","!","#","$","^","?",":",",","(",")","{","}","[","]","~","-","_",".","=",]
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
