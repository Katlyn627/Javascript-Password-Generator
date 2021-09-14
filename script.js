var enter;
var confirmNumberofChars;
var confirmCharSymbols;
var confirmUppercaseChars;
var confirmLowercaseChars;
// Password variable values 
// Special characters/symbols
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// Numeric characters
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Alphabetical characters
alphaChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Space for the Uppercase conversion
space = [];
// Choices declared outside the if statement
var choices;
// Convert letters to uppercase 
var toUpper = function (x) {
    return x.toUpperCase();
};
// Create variable for Uppercase conversion
alphaChar2 = alphaChar.map(toUpper);

var getPass = document.querySelector("#generate");

getPass.addEventListener("click", function () {
    pass = generatePassword();
    document.getElementById("password").placeholder = pass;
});

// Assignment code create function to generate password
function generatePassword() {
    // Asks for user input
    enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
    // First if statement for user validation 
    if (!enter) {
        alert("This needs a value");
    } else if (enter < 8 || enter > 128) {
        // Validates the users choice input
        // Starts user input prompts
        enter = parseInt(prompt("You must choose between 8 and 128"));

    } else {
        // Continues once user inputs are valid and complete
        confirmNumberofChars = confirm("Will this contain numbers?");
        confirmCharSymbols = confirm("Will this contain special characters?");
        confirmUppercaseChars = confirm("Will this contain Uppercase letters?");
        confirmLowercaseChars = confirm("Will this contain Lowercase letters?");
    };
    // First if statement taking users choices to determine password outcome
    // If statement for all negative outcomes
    if (!confirmCharSymbols && !confirmNumberofChars && !confirmUppercaseChars && !confirmLowercaseChars) {
        choices = alert("You must choose a criteria!");

    }
    // else if for all positive outcomes with and or operators
    else if (confirmCharSymbols && confirmNumberofChars && confirmUppercaseChars && confirmLowercaseChars) {

        choices = character.concat(number, alphaChar, alphaChar2);
    }
    // else if for 3 positive outcomes of choices with and or operators
    else if ((confirmCharSymbols && confirmNumberofChars && confirmUppercaseChars) || (confirmCharSymbols && confirmNumberofChars && confirmLowercaseChars) || (confirmCharSymbols && confirmLowercaseChars && confirmUppercaseChars) || (confirmNumberofChars && confirmLowercaseChars && confirmUppercaseChars)) {
        choices = character.concat(number, alphaChar, alphaChar2);
    }
    
    // else if for 2 positive outcomes of choices with and or operators
    else if ((confirmCharSymbols && confirmNumberofChars) || (confirmCharSymbols && confirmLowercaseChars) || (confirmCharSymbols && confirmUppercaseChars) || (confirmLowercaseChars && confirmNumberofChars) || (confirmLowercaseChars && confirmUppercaseChars) || (confirmNumberofChars && confirmUppercaseChars)) {
        choices = character.concat(number, alphaChar, alphaChar2);
    } 
    // else if for 1 positive outcome choice with and or operators
    else if ((confirmCharSymbols) || (confirmNumberofChars) || (confirmLowercaseChars)) {
        choices = character;
    }
    // created space variable to fill uppercase conversion
    else if (confirmUppercaseChars) {
        choices = space.concat(alphaChar2);
    };
    // Create var password placeholder for empty array when length is chosen
    var password = [];
    // Create for loop to randomly select password variables
    for (var i = 0; i < enter; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }
    // Join Password array with user Input
    var pass = password.join("");
    UserInput(pass);
    return pass;
}
// Created function input to use textcontent
function UserInput(pass) {
    document.getElementById("password").textContent = pass;

}