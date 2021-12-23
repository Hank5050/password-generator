// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var upperCasedCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var lowerCasedCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var specialCharacters = ["@","%","+","\\","/","*","!","#","$","^","?",":",",","(",")","{","}","[","]","~","-","_",".","=",];
  var numericCharacters = ["0","1","2","3","4","5","6","7","8","9"];
  
  var passwordLength = prompt("Enter length of desired Password");
  parseInt(passwordLength);
  if (passwordLength < 8) {
    alert("Password must be at least 8 characters");
    return;
  } else if (passwordLength > 128) {
    alert("Password can be no greater than 128 characters");
    return;
  }
  
  var hasUpperCase = confirm("Would you like to include uppercase characters?");
  var hasLowerCase = confirm("Would you like to include lowercase characters?");
  var hasSpecial = confirm("Would you like to include special characters?");
  var hasNumbers = confirm("Would you like to include numbers?");

  var possibleChars = ""
  if (hasUpperCase) {
    for (let x in upperCasedCharacters) {
      possibleChars += upperCasedCharacters[x];
    };
  }

  if (hasLowerCase) {
    for (let x in lowerCasedCharacters) {
      possibleChars += lowerCasedCharacters[x];
    };
  }

  if (hasSpecial) {
    for (let x in specialCharacters) {
      possibleChars += specialCharacters[x];
    };
  }

  if (hasNumbers) {
    for (let x in numericCharacters) {
      possibleChars += numericCharacters[x];
    };
  }

  if (!hasUpperCase && !hasLowerCase && !hasSpecial && !hasNumbers) {
    alert("Must select at least one character option");
    return;
  }

  var password = "";
  for (var i=0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * possibleChars.length);
    password += possibleChars[randomNumber];
  }

  return password;


}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



