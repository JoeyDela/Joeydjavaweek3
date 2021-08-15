// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var capChar =["A","B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharacters =["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+"];
var numericCharacters =["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
function question() {
  var charLen = prompt("how many charters do you want? (between 8-128)");
  console.log(charLen);
  if (charLen < 8) {
    alert("please enter a number higher than 8!");
    return question();
  } else if (charLen > 128){
    alert("please enter a number lower than 129!");
    return question();
  }
  var lowerCase = confirm("do you wnat to use lower case?");
  console.log(lowerCase);
  var specialCase = confirm("do you want to use special characters?");
  console.log(specialCase);
  var numerCharacters = confirm("do you want to use numeric characters?");
  console.log(numerCharacters);
  var capChar = confirm("do you want to use upper case?");
  if (lowerCase === false && specialCase === false && numerCharacters === false && charLen === false){
    alert("please choice at least one!");
    return question();
  }
  var botwChest = {
    charLen: charLen,
    capChar: capChar,
    lowerCase: lowerCase,
    specialCase: specialCase,
    numerCharacters: numerCharacters,
  }
  return botwChest;
}

function random(input) {
  var link = Math.floor(Math.random() * input.length);
  var sun = input[link];
  return sun;
}
 function generatePassword() {
   var result = []
   var zelda = question()
   var run = []
  var oak = []

  if(zelda.capChar){
    run = run.concat(capChar)
    oak.push(random(capChar));
    console.log(oak);
    console.log(run);
  }
  if(zelda.lowerCase){
    run = run.concat(lowerChoice)
    oak.push(random(lowerChoice));
    console.log(oak);
    console.log(run);
  }
  if(zelda.specialCase){
    run = run.concat(specialCharacters)
    oak.push(random(specialCharacters));
    console.log(run);
    console.log(oak);
  }
  if(zelda.numerCharacters){
    run = run.concat(numericCharacters)
    oak.push(random(numericCharacters));
    console.log(run);
    console.log(oak);
  }

  for (var i = 0; i < zelda.charLen; i++){
    var upper = random(run)
    result.push(oak);
    console.log(run);
    console.log(oak);
  }
  for ( var i = 0; i < oak.length; i++){
    result[i] = oak[i]
  }
  console.log(oak);
  return result.join("")
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
   passwordText.value = password;

   }



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
