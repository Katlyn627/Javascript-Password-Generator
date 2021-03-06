# Javascript-Password-Generator

## Screenshot of Deployed Page

<img src = "assets\images\Screenshot Pass-Gen1.png">
<img src = "assets\images\Screenshot Pass-Gen2.png">

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```
## The Process

```
Create and understand how the Javascript will work with the HTML to create a reliable and safe password.

* HTML: Didn't need to edit HTML as it was provided.

* Javascript:
    * Created variables for numbers, characters and symbols.
    * Added and edited event listener that was given with code
    * Created password generator function
    * Created If/Else statements to make password generator function work
        * Consolidated code using && (AND) and || (OR) operators
    * Created pasword variable with empty array
    * Created for loop to randomly select variables    
    * Joined password array with user input
    * Created function taking user input and creating textcontent

* CSS: Didn't need to edit CSS as it was provided.
```

# Deployment 

Public Page: https://katlyn627.github.io/Javascript-Password-Generator/

Github Page: https://github.com/Katlyn627/Javascript-Password-Generator
