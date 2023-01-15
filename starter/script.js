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

var passwordChoices = {
  characterAmount: "",
  getSpecialCharacters: false,
  getNumeric: false,
  getUpper: false,
  getLower: false
} //create object variable from user preferences to use in later code

// Function to prompt user for password options
function getPasswordOptions() {
  characterAmount = prompt("Enter the number of characters you require in your password (between 10 and 64 characters):");
  console.log(characterAmount);
    if (characterAmount <= 9 || characterAmount > 64) {
      prompt("Your password length does not meet requirements, please pick a number between 10 and 64!"); // length of password (10 to 64 characters)
    }
  //character types (lowercase, UPPERCASE, Numeric, Special Characters) (true or false)
  getSpecialCharacters = confirm("Would you like to include special characters in your password?");
  console.log(getSpecialCharacters);
  getNumeric = confirm("Would you like to include numbers in your password?");
  console.log(getNumeric);
  getUpper = confirm("Would you like to include UPPERCASE letters in your password?");
  console.log(getUpper);
  getLower = confirm("Would you like to include lowercase letters in your password?");
  console.log(getLower);
  //at least one character type selected otherwise code will not run
    if (getSpecialCharacters != true && getNumeric != true && getUpper != true && getLower != true)  {
      alert("You must select at least one option to generate your password!");
      return getPasswordOptions();
    }

}

getPasswordOptions();

// Function for getting a random element from an array
function getRandom(arr) {
//Math.random for selected (if statements?) arrays (* array.length) needs to be limited depending on password length entered by user 
//for loop
}

// Function to generate password with user input
function generatePassword() {

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