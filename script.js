//                                     STRING METHODS

/*Question no 1: Write a program that takes two user inputs for first and
last name using prompt and merge them in a new variable
titled fullName. Greet the user using his full name.*/
var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var fullName = firstName + " " + lastName;
document.write("Assalamualaikum, " + fullName + "!" );

/*Question no 2: Write a program to take a user input about his favorite
mobile phone model. Find and display the length of user
input in your browser*/
var phoneModel = prompt("What is your favorite mobile phone model?");
var inputLength = phoneModel.length;
document.write("Your favorite mobile phone model is " + phoneModel + ".<br />" + "Length of string :" + inputLength);

/*Question no 3: Write a program to find the index of letter “n” in the word
“Pakistani” and display the result in your browser*/
var word = "Pakistani";
var index = word.indexOf("n");
document.write("String: " + word + "<br />" + "Index of 'n' is " + index );

/*Question no 4: Write a program to find the last index of letter “l” in the
word “Hello World” and display the result in your browser*/
var word = "Hello World";
var lastIndex = word.lastIndexOf("l");
document.write("String: " + word + "<br />" + "Last Index of 'l' is " + lastIndex);

/*Question no 5: Write a program to find the character at 3rd index in the
word “Pakistani” and display the result in your browser.*/
var word = "Pakistani";
var character = word.charAt(3);
document.write("String: " + word + "<br />" + "Character at index 3: " + character);

/*Question no 6: Repeat Q1 using string concat() method.*/
var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var fullName = firstName.concat(" ", lastName);
document.write("Hello, " + fullName + "!");

/*Question no 7: Write a program to replace the “Hyder” to “Islam” in the
word “Hyderabad” and display the result in your browser.*/
var city = "Hyderabad";
var newCity = city.replace("Hyder", "Islam");
document.write("City Name: "+ city + "<br />");
document.write("After replacement: " + newCity);

/*Question no 8: Write a program to replace all occurrences of “and” in the
string with “&” and display the result in your browser.
var message = “Ali and Sami are best friends. They play cricket and
football together.”;*/
var message = "Ali and Sami are best friends. They play cricket and football together.";
var newMessage = message.replace(/and/g, "&");
document.write("Original message: " + message + "<br />");
document.write("New message: " + newMessage);

/*Question no 9: Write a program that converts a string “472” to a number
472. Display the values & types in your browser.*/
var str = "472";
var num = Number(str);
document.write("Value: " + str + "<br>");
document.write("Type: " + typeof str + "<br>");
document.write("Value: " + num + "<br>");
document.write("Type: " + typeof num + "<br>");

/*Question no 10: Write a program that takes user input. Convert and
show the input in capital letters.*/
var userInput = prompt("Enter a string:");
var upperCaseInput = userInput.toUpperCase();
document.write("User Input: " + userInput + "<br>");
document.write("Ypper Case: " + upperCaseInput);

/*Question no 11: Write a program that takes user input. Convert and
show the input in title case.*/
var userInput = prompt("Enter a string:");
var words = userInput.split(" ");
for (var i = 0; i < words.length; i++) {
  words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
}
var titleCase = words.join(" ");
document.write("User Input: " + userInput + "<br>");
document.write("Title Case: " + titleCase);

/*Question no 12: Write a program that converts the variable num to
string.
var num = 35.36 ;
Remove the dot to display “3536” display in your browser.*/
var num = 35.36;
var numStr = num.toString().replace(".", "");
document.write("Number: " + num + "<br>");
document.write("Result: " + numStr);

/*Question no 13: Write a program to take user input and store username
in a variable. If the username contains any special symbol
among [@ . , !], prompt the user to enter a valid username.
For character codes of [@ .*/
var username = prompt("Enter your username:");
var isValid = true;
for (var i = 0; i < username.length; i++) {
  var charCode = username.charCodeAt(i);
  if (charCode === 33 || charCode === 44 || charCode === 46 || charCode === 64) {
    isValid = false;
    break;
  }
}
if (isValid) {
  alert("Your username is valid!");
} else {
  alert("Please enter a valid username without special symbols like '@', '.', ',', '!'");
}

/*Question no 14: You have an array
A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
Write a program to enable “search by user input” in an
array. After searching, prompt the user whether the given
item is found in the list or not.
Note: Perform case insensitive search. Whether the user
enters cookie, Cookie, COOKIE or coOkIE, program
should inform about its availability.*/
var bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Welcome to our bakery. What do you want to order?");
var isFound = false;
for (var i = 0; i < bakeryItems.length; i++) {
  if (userInput.toLowerCase() === bakeryItems[i]) {
    isFound = true;
    alert(userInput + " is available at index " + i + " in our bakery");
    break;
  }
}
if (!isFound) {
  alert("We are sorry. " + userInput + " is not available in our bakery.");
}

/*Question no 15: Write a program to take password as an input from
user. The password must qualify these requirements:
a. It should contain alphabets and numbers
b. It should not start with a number
c. It must at least 6 characters long
If the password does not meet above requirements,
prompt the user to enter a valid password.
For character codes of a-z, A-Z & 0-9, refer to ASCII
table at the end of this document.*/
var password = prompt("Enter your password:");
var firstChar = password.charAt(0);
if (password.length < 6) {
    alert("Password must be at least 6 characters long. Please enter a valid password.");
} else if (!isNaN(firstChar)) {
    alert("Password cannot begin with a number. Please enter a valid password.");
} else if (!/\d/.test(password) || !/[a-zA-Z]/.test(password)) {
    alert("Password must contain alphabets and numbers. Please enter a valid password.");
} else {
    alert("Password is valid.");
}

/*Question no 16: Write a program to convert the following string to an
array using string split method.
var university = “University of Karachi”;
Display the elements of array in your browser.*/
var university = "University of Karachi";
var arr = university.split("");
for (var i = 0; i < arr.length; i++) {
  if (arr[i] === " ") {
    document.write("<br>");
  } else {
    document.write(arr[i] + "<br>");
  }
}

/*Question no 17: Write a program to display the last character of a user
input.*/
var userInput = prompt("Enter a string:");
var lastChar = userInput.charAt(userInput.length-1);
alert("User Input: " + userInput +"\nLast character of input: " + lastChar );

/*Question no 18: You have a string “The quick brown fox jumps over the
lazy dog”. Write a program to count number of
occurrences of word “the” in given string.*/
var str = "The quick brown fox jumps over the lazy dog";
var count = (str.match(/\bthe\b/gi) || []).length;
document.write("Text: " + str + "<br>");
document.write("There are " + count + " occurence(s) of word 'the'");
