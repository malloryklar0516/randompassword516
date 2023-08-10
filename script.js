// Assignment Code
var generateBtn = document.querySelector("#generate");
var criteriaLower;
var criteriaUpper;
var criteriaSpecial;
var criteriaNum;
var criteriaArr = [criteriaLower,criteriaUpper,criteriaSpecial,criteriaNum];
var passwordLength;
var passwordCriteria;
var specialChar = "!#$%&'()*+,-./:;<=>?@[]^_{|}`~" + `"`;
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var numChar = "1234567890";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charArr = [lowerCase, upperCase, specialChar, numChar];
//function asking user to select desired password criteria
function criteriaPrompts(){
  criteriaArr[0]  =confirm("do you want to include lowercase characters?");
  console.log("Include lowercase: " + criteriaArr[0]);  
  criteriaArr[1] = confirm("do you want to include uppercase characters?");
  console.log("Include uppercase: " + criteriaArr[1]);
  criteriaArr[3] = confirm("do you want to include numbers?");
  console.log("Include numbers: " + criteriaArr[3]);
  criteriaArr[2] = confirm("do you want to include special characters?");
  console.log("Include Special Characters: " + criteriaArr[2]);
  if (!criteriaArr[0] && !criteriaArr[1] && !criteriaArr[2] && !criteriaArr[3]){
    var message = alert("You must select at least one of the password criteria.");
    criteriaPrompts();
  }
  }
//function that 
function generatePassword(){

  var passwordCriteria =alert("You may choose between uppercase, lowercase, numeric and special characters");
  var passwordLength = prompt("What will be the length of your password? Choose between 8 and 128 characters.");
  console.log("Password Length: " + passwordLength);
  if (!passwordLength) {
    alert("Entry required.");
  } else if (passwordLength < 8 || passwordLength > 12){
    passwordLength = prompt("The length must be between 8 and 128 characters. Please re-enter.");
    console.log("Password length " + passwordLength);
}
else if (passwordLength >= 8 && passwordLength <= 12){
  criteriaPrompts();
}
var passwordChar="";
for (i = 0; i < criteriaArr.length; i++){
  if(criteriaArr[i]){
    passwordChar = passwordChar.concat(charArr[i]);
  }
}
console.log(passwordChar);

var pw = "";
var char;
for(var i=0; i < passwordLength; i++) {
  char = passwordChar[Math.floor(Math.random()*passwordChar.length)];
  pw = pw.concat(char);
}
console.log(pw);
return pw;
}

 


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
