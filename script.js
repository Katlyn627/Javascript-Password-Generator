
// Start by generating values of password function
var enter;
var confirmNumberofChars;
var confirmCharSymbols;
var confirmUppercaseChars;
var confirmLowercaseChars;
// Special symbols
symbols = ["!“#$%&’()*+,-./:;<=>?@[\]^_`{|}"];
//Numeric characters
number = [1,2,3,4,5,6,7,8,9,0];
// Alphabetical characters
charAlpha= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// Choices delcared outside of if statement
var choices;
// Convert letters to uppercase
var toUpperCase = function (x){
  return x.toUpperCase();
};
// Create variable for uppercase conversion
charAlpha2 = charAlpha.map(toUpper);

// Assignment Code
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", function(){
  password = generatePassword();
  document.getElementById("password").placeholder = password;
});
// Start function to generate a password
function writePassword() {
  enter = window.prompt("How many characters would you like in your password? Choose between 2 and 128");
  // First if statement for user validation 
  if(!enter){
    alert("This needs a value");
  }
  else if(enter < 8 || enter > 128){
    // Validates the users chice and input
    // Start user input prompts
    enter = window.prompt("You must choose between 8 and 128");
  }
  else {
    confirmNumberofCharacters = confirm("Will this contain numbers?");
    confirmCharSymbols = confirm("Will this contain special characters?");
    confirmUppercaseChars = confirm("Will this contain Uppercase letters?");
    confirmLowercaseChars = confirm("Will this contain Lowercase letters?");
    };
  }
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  
}

