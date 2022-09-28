// Check the user's answer from prompts
function check_choice(userchoice) {
  var booleanfunc; // turns Y into y and N into n
  /* userchoice =  */userchoice.toLowerCase()
  if (userchoice == "y" || userchoice == "yes") {
    booleanfunc = true; // returns true if Y

  } if (userchoice == "n" || userchoice== "no") {
    booleanfunc = false; // returns false if N
  }
  return booleanfunc; // Will return true or false (Y or N)
}

if (userchoice === null) {
  return;
}


const prompts = document.querySelector('#password');

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var very_important_password = "" // Make empty variable for password string
  
  var user_prompt_1 = prompt("Do you want upper case?");
  var user_prompt_2 = prompt("Do you want lower case?");
  var user_prompt_3 = prompt("Do you want numeric?");
  var user_prompt_4 = prompt("Do you want special characters?");
  var user_prompt_5 = prompt("How many characters do you want?");
  
  var user_answer_1 = check_choice(user_prompt_1);
  var user_answer_2 = check_choice(user_prompt_2);
  var user_answer_3 = check_choice(user_prompt_3);
  var user_answer_4 = check_choice(user_prompt_4);
  var user_answer_5 = user_prompt_5;
  
  if (user_answer_1 === true) {
    very_important_password = very_important_password + "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }
  if (user_answer_2 === true) {
    very_important_password = very_important_password + "abcdefghijklmnopqrstuvwxyz"// Checking if choice 2 is true
  }
  if (user_answer_3 === true) {
    very_important_password = very_important_password + "0123456789" // Checking if choice 2 is true
  }
  if (user_answer_4 === true) {
    very_important_password = very_important_password + "~`!@#$%^&*()_-+={[}]|\:;\"'<,>.?/" // Checking if choice 2 is true
  }
  var final_password = ""
  if (user_answer_5 >= 8 && user_answer_5 <= 128) {
    for (let i = 0; i < user_answer_5; i++) {
      final_password += very_important_password[Math.floor(Math.random() * (very_important_password.length))]
    }
    document.getElementById("password").value = final_password;
  }
  console.log(user_prompt_5);
  console.log(user_answer_5);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
