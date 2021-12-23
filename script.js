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

  var upperCasedCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var lowerCasedCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var specialCharacters = ["@","%","+","\\","/","*","!","#","$","^","?",":",",","(",")","{","}","[","]","~","-","_",".","=",];
  var numericCharacters = ["0","1","2","3","4","5","6","7","8","9"];

  let pass = []

  if (hasUpperCase) pass = pass.concat(upperCasedCharacters);
  if (hasLowerCase) pass = pass.concat(lowerCasedCharacters);
  if (hasSpecial) pass = pass.concat(specialCharacters);
  if (hasNumbers) pass = pass.concat(numericCharacters);

  var passwordInfo = []
  for (let i = 0; i < passwordLength; i++) {
    password.info.push(pass[Math.floor(math.random() * pass.length)])
  }
  return passwordInfo.join('')
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function getLength() {
  var passwordLength = parseInt(prompt("Enter length of desired Password between 8 and 128 characters"));
  
  if (passwordLength >= 8 && passwordLength <= 128) {
    else {getLength};
  }
}
