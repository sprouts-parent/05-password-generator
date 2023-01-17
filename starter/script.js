// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
//my code starts here -------------------------------------------------------------------------
//declaring variables to be used in subsequent functions
  var characterAmount;
  var getSpecialCharacters;
  var getNumeric;
  var getUpper;
  var getLower; 
  var possibleCharacters;

function getPasswordOptions() { // Function to prompt user for password options
  characterAmount = 0;
  getSpecialCharacters = false;
  getNumeric = false;
  getUpper = false;
  getLower = false;
    characterAmount = prompt("Enter the number of characters you require in your password (between 10 and 64 characters):");
    characterAmount = parseInt(characterAmount);
      console.log("characterAmount = ", characterAmount);
    if (Number.isNaN(characterAmount)){ // added in case user inputs letters/special characters
    alert("The password length must be a number. Please retry and enter a numeric value between 10 and 64:");
    return getPasswordOptions();
    }
      if (characterAmount <= 9 || characterAmount > 64) {
        alert("Your password length does not meet requirements, please pick a number between 10 and 64!"); // length of password (10 to 64 characters)
        return getPasswordOptions();
      }
  //character types (lowercase, UPPERCASE, Numeric, Special Characters) (booleans)
  getSpecialCharacters = confirm("Would you like to include special characters in your password?");
    console.log(getSpecialCharacters);
    if (getSpecialCharacters) { 
      possibleCharacters = possibleCharacters.concat(specialCharacters);
    } // using .concat to join two strings for password generation to make a new one without affecting original
  getNumeric = confirm("Would you like to include numbers in your password?");
    console.log(getNumeric);
    if (getNumeric) {
      possibleCharacters = possibleCharacters.concat(numericCharacters);
    }
  getUpper = confirm("Would you like to include UPPERCASE letters in your password?");
    console.log(getUpper);
    if (getUpper) {
      possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
    }
  getLower = confirm("Would you like to include lowercase letters in your password?");
    console.log(getLower);
    if (getLower) {
      possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
    }
  console.log("Possible characters = ", possibleCharacters);
  //at least one character type selected otherwise code will not run
      if (getSpecialCharacters != true && getNumeric != true && getUpper != true && getLower != true)  {
        alert("You must select at least one option to generate your password!");
        return getPasswordOptions();
      }
}

// Function for getting a random element from an array
function getRandom(arr) {
return arr[Math.floor(Math.random() * arr.length)];     
//Math.random for selected arrays (* array.length) limited depending on password length entered by user 
}

// Function to generate password with user input
function generatePassword() {
  possibleCharacters = [];
  getPasswordOptions();
  var randomPassword = "";
  for (let i = 0; i < characterAmount; i++) {
    randomPassword += getRandom(possibleCharacters);
  } //for loop grabs character amount inputted by user
  return randomPassword;
}

//------------------------------------------------------
// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);