var enter;
var confirmNumberofChars;
var confirmCharSymbols;
var confirmUppercaseChars;
var confirmLowercaseChars;
// Password variable values
// Special symbols
symbols = ["!“#$%&’()*+,-./:;<=>?@[\]^_`{|}"];
//Numeric characters
number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// Alphabetical characters
charAlpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Space for uppercase characters
space = [];
// Choices delcared outside of if statement
var choices;
// Convert letters to uppercase
var toUpperCase = function (x) {
  return x.toUpperCase();
};
// Create variable for uppercase conversion
charAlpha2 = charAlpha.map(toUpper);
// fixed event listener so button worked
var getPass = document.querySelector("#generate");

getPass.addEventListener("click", function () {
    pass = generatePassword();
    document.getElementById("password").placeholder = pass;
});

// Assignment Code
function generatePassword()
{
    // Asks for users inputs
      enter = window.prompt("How many characters would you like in your password? Choose between 2 and 128");
    // First if statement for user validation 
    if (!enter) {
      alert("This needs a value");
      } else if (enter < 8 || enter > 128) {
    // Validates the users chice and input
    // Start user input prompts
      enter = window.prompt("You must choose between 8 and 128");
      } else {
      // Continues once user iputs are valid and complete
      confirmNumberofCharacters = confirm("Will this contain numbers?");
      confirmCharSymbols = confirm("Will this contain special characters?");
      confirmUppercaseChars = confirm("Will this contain Uppercase letters?");
      confirmLowercaseChars = confirm("Will this contain Lowercase letters?");
      };
    // First if statement taking users choice to determine password outcome
    // If statement for all negative outcomes
    if (!confirmCharSymbols && !confirmNumberofCharacters && !confirmUppercaseChars && !confirmLowercaseChars) {
      choices = alert("You must choose a criteria!");
      
    }
      // else if for all posotive outcomes
    else if (confirmCharSymbols && confirmNumberofCharacters && confirmUppercaseChars && confirmLowercaseChars) {
      
      choices = symbols.concat(number, charAlpha, charAlpha2); {
    }
    // If else if for 3 posotive outcome of choices
    else if (confirmCharSymbols && confirmNumberofChars && confirmUppercaseChars) {
          choices = symbols.concat(number, charAlpha);
          }
    else if (confirmCharSymbols && confirmNumberofChars && confirmLowercaseChars) {
          choices = symbols.concat(number, charAlpha)
          }
    else if (confirmCharSymbols && confirmLowercaseChars && confirmUppercaseChars) {
          choices = symbols.concat(charAlpha, charAlpha2);
          }
    else if (confirmNumberofChars && confirmLowercaseChars && confirmUppercaseChars) {
          choices = number.concat(charAlpha, charAlpha2);
          }
          // If else if for 2 positive outcome of choices 
    else if (confirmCharSymbols && confirmNumberofChars) {
              choices = symbols.concat(number);
              }
    else if (confirmCharSymbols && confirmLowercaseChars) {
              choices = symbols.concat(charAlpha);
              }
    else if (confirmCharSymbols && confirmUppercaseChars) {
              choices = symbols.concat(alpha2);
              }
    else if (confirmLowercaseChars && confirmNumberofChars) {
              choices = charAlpha.concat(number);
              }
    else if (confirmLowercaseChars && confirmUppercaseChars) {
              choices = charAlpha.concat(charAlpha2);
              }
    else if (confirmNumberofChars && confirmUppercaseChars) {
              choices = number.concat(charAlpha2);
              }
                // If else if for 1 positive outcome of choices
                // Else if for 1 positive option
    else if (confirmCharSymbols) {
                choices = symbols;
                }
    else if (confirmNumberofChars) {
                choices = number;
                }
    else if (confirmLowercaseChars) {
      choices = charAlpha;
                }
                // Created space variable to fill uppercase conversion
    else if (confirmUppercase) {
      choices = space.concat(charAlpha2);
              };
                  // Create var password placeholder for empty array when length is chosen
                var passwordText = [];
                // Create for loop to randomly select password variables
                for (var i = 0; i < enter; i++) {
                var pickChoices = choices[Math.floor(Math.random() * choices.length)];
                password.push(pickChoices);
                }

                var pass = password.join("");
                UserInput(pass);
                return pass;
}
}

function UserInput(pass){
      document.getElementById("password").textContent = pass;
}
