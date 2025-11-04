// Exercise 1: Complex Arithmetic and Standard Rules
var finalResult = 3 + 5 * (10 / 2) - (8 - 4);
// 3+5*(10/2)-(8-4) => 3+5*5-4 => 3+25-4 = 24
console.log(finalResult);

// Exercise 2: Case Sensitivity Test
var projectIdentifier = "COMP484";
ProjectIdentifier = "JS_Advanced";
/*This line will fail because JavaScript is case-sensitive*/
projectIdentifier = "JS_Advanced";
console.log(projectIdentifier);

// Exercise 3: String Quoting Challenge
var courseDescription = "The course is \"interactive\" and involves 'scripting' logic.";
console.log(courseDescription);

// Exercise 4: Escaping and Console Output
var errorMessage = 'An internal server error occurred: \"Access Denied\"';
// The double quotes around Access Denied are escaped above using a backslash as required.
console.log(errorMessage);

// Exercise 5: Type Coercion with Non-Plus Operators
var valueA = 10;
var valueB = "4";
var resultSubtraction = valueA - valueB;
console.log("valueA - valueB = " + resultSubtraction);    
var resultMultiplication = valueA * valueB;
console.log("valueA * valueB = " + resultMultiplication);
// B is coerced to be a nomral integer

// Exercise 6: Understanding `null` and `undefined` Types
var unassignedVar; // Declare without assigning = "undefined"
var explicitNull = null;
console.log("typeof unassignedVar = " + typeof unassignedVar); // expected "undefined"
console.log("typeof explicitNull = " + typeof explicitNull);     // historically "object"
/* The `typeof` operator returns "object" for `null` due to a long-standing bug in JavaScript's
	original implementation. In the language's underlying representation, values were stored with
	a type tag in the lower bits; `null` was represented with the bit-pattern that made `typeof`
	report it as an "object". This is now part of the language specification for compatibility,
	so `typeof null` still returns "object" even though `null` is its own primitive value. */

// Ecercise 7: Boolean Assignment and Type Identification
var isBlocking = true;
console.log(typeof isBlocking); // should log "boolean"
isBlocking = "true"; //reassign to string
console.log(typeof isBlocking); // should log "string"

// Exercise 8: Invalid Variable Naming
  // 1) Identifier cannot start with a digit
  //    var 1stPlace = "Alice";
  // 2) Identifier cannot contain spaces, use camelCase or underscores instead
  //    var my variable = 10; 
  // 3) Hyphens are not allowed in identifiers (interpreted as subtraction)
  //    var total-cost = 20;

// Exercise 9: Chained Shorthand Arithmetic
var counterValue = 50;
counterValue /= 5; // counterValue = counterValue / 5 => 10
counterValue -= 3; // counterValue = counterValue - 3 => 7
console.log("counterValue = " + counterValue);

// Exercise 10: Prefix vs. Postfix Unary Operators
var x = 10;
var y_post = x++;
console.log("y_post = " + y_post); // y_post gets the value before increment (10)
console.log("x after y_post = " + x); // x is now 11
x = 10; // reset x
var z_pre = ++x;
console.log("z_pre = " + z_pre); // z_pre gets the value after increment (11)
console.log("x after z_pre = " + x); // x is now 11
/*  Postfix (x++): The value is assigned before incrementing.
    Prefix (++x): The value is incremented first, then assigned. */

// Exercise 11: Loose Equality and Coercion
var testNumber = 0;
var testBoolean = false;
if (testNumber == testBoolean) {
    console.log("testNumber and testBoolean are loosely equal");}
/* JavaScript's type coercion with == converts the operands to
	the same type before comparison, in this case false
	is converted to the number 0, so 0 == 0 is true. */

// Exercise 12: Strict Inequality Test
  var versionA = 10.0; // number
  var versionB = "10.0"; // string
  if (versionA !== versionB) {
    console.log("versionA and versionB are NOT strictly equal");} 
  else {
    console.log("versionA and versionB are strictly equal");}

// Exercise 13: Logical OR and AND Combination
var isLoggedIn = true;
var isSubscriber = true;
var isTrialExpired = false;
if ((isLoggedIn && isSubscriber) || (isLoggedIn && !isTrialExpired)) {
    console.log("Access granted");}
else {
    console.log("Access denied");}

// Exercise 14: Simulating XOR using Nested Conditionals
var conditionA = true;
var conditionB = false;
if ((conditionA && !conditionB) || (!conditionA && conditionB)) {
      console.log("XOR Success");} 
else {console.log("XOR Fail");}

// Exercise 15: Converting IF/ELSE to Ternary Operator
var scriptLoadType = "deferred";
var loadStatus;
if (scriptLoadType === "deferred") {
    loadStatus = "Non-blocking";} 
else {loadStatus = "Potentially Blocking";}
// rewrite using ternary operator
var loadStatusTernary = scriptLoadType === "deferred" ? "Non-blocking" : "Potentially Blocking";
console.log("Regular if/else result: " + loadStatus);
console.log("Ternary operator result: " + loadStatusTernary);

// Exercise 16: Commenting and Code Structure
/* calculates the total time taken to render a web page,
   including HTML parsing and JavaScript execution times.
   helps identify potential performance bottlenecks */
function calculateRenderTime() {
    // Calculate time between DOM ready and full page load
}

// Exercise 17: Date Object Formatting Challenge (MM/DD/YYYY)
console.log("Right now it is " + Date());

// Exercise 18: Mixed Type Arithmetic Explanation
var val1 = 20;
var val2 = "5";
var sumResult = val1 + val2;
var diffResult = val1 - val2;
console.log("sumResult = " + sumResult);
console.log("diffResult = " + diffResult);
/* When the + operator is used on a number and string,
   Java performs string concatenation instead of addition, 
   so 20 + "5" becomes "20" + "5" resulting in "205". 
   However, for operators like -, it converts the string
   to a number, so 20 - "5" becomes 20 - 5 resulting in 15. */

// Exercise 19: Conditional based on Type Check
var dataInput = 484;
if (typeof dataInput === "number") {
    console.log("Input is numeric."); } 
else {
    dataInput = true;
    console.log("New type of dataInput: " + typeof dataInput);}

// Exercise 20: Simulating DOM Manipulation Timing Failure (Conceptual)
/*
Three common issues that can occur with DOM manipulation timing:
1. Script in <head>: If you place this code in the <head> without 'defer' or 'async',
   it will run before the DOM is ready, causing "Cannot read property 'appendChild' 
   of null" because document.body doesn't exist yet.
2. No DOM Ready check: Even with script at bottom of <body>, it's best practice
   to verify the DOM is ready before manipulating it.
3. Dynamic content: Some frameworks might modify the DOM asynchronously,
   so waiting for DOMContentLoaded isn't always enough.

Solutions:
1. Use 'defer' attribute: <script defer src="script.js"></script>
2. Place script at end of <body>
3. Use event listeners for DOM ready state
*/
document.addEventListener('DOMContentLoaded', function() {
    var h1Element = document.createElement("h1");
    h1Element.textContent = "Interactive Layer Loaded";
    if (document.body) {
        document.body.appendChild(h1Element);
    } else {
        console.error("Document body not found");
    }
});



