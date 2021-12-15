// Caits user prompts

//Array of options for password generator 

var specialCharacters = ["~","!","@","#","$","%","^","&","*",")","("];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];


// link to the generate button or is that already done with event listener? 

function generatePassword (){
var passwordLength = window.prompt ("How many characters would you like your password to be")
var askspecialCharacters = window.confirm ("Click OK to include any special characters")
var asknumbers = window.confirm ("Click OK to include numbers")
var askuppercase = window.confirm ("Click OK to include uppercase letters")
var asklowercase = window.confirm ("Click OK to include lowercase letters")




//set up empty array, this is where the all the user options will be stored
var characterSet = []

// empty string for random password characters to be stored 
var generatedPassword = "";

//prompt for password length and error message
if (passwordLength < 8 || passwordLength > 128) {
  window.alert("Invalid response, please choose a number between 8 and 128");
  passwordLength = window.prompt ("How many characters would you like your password to be")
}

console.log("passwordLength", passwordLength);

// concat each option into characterSet Array
if (askspecialCharacters === true) {
  characterSet=characterSet.concat(specialCharacters);
}
if (asknumbers === true) {
  characterSet=characterSet.concat(numbers);
}
if (askuppercase === true) {
  characterSet=characterSet.concat(upperCase);
}
if (asklowercase === true) {
  characterSet=characterSet.concat(lowerCase);
}
//enter console logs to check arrays are showing up
console.log (characterSet);

//set up for loop
for (var i=0; i <passwordLength; i++) {
  var index = Math.floor(Math.random() * characterSet.length);
 // need to continue the loop and concat the letters to generated password. 
  generatedPassword += writePassword(characterSet, characterSet +1);
  }
  
return "password123";
// generatedPassword = generatedPassword;
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to activate button
generateBtn.addEventListener("click", writePassword);


