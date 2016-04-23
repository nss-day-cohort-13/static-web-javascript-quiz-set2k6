//the variable inputOne was created for the id= "height" for the first input tag, and the variable inputTwo was created for the id= "char" for the second input tag in my HTML. They were given the getElementById() method in order to get the info that would be put into the by the DOM.
var inputOne = document.getElementById("height");
var inputTwo = document.getElementById("char");


//this for loop takes the length of inputOne (whatever the user chooses at this point) and increases it everytime it loops. An event listener was added that waits for a users mouse click.
for (var i = 0; i < inputOne.length; i++) {
	inputOne.item[i].addEventListener("click", handleSectionClick);
}

//Button: for this variable labeled button, the document.getElementById was used and labeled "TreeButton" and given the addEventListener attribute for function heightButton and charButton to listen for the input event.
var button = document.getElementById("TreeButton").addEventListener("click", heightButton);addEventListener("click", charButton)
;

//this is the for loop for inputTwo (Character) and carries out the same job as the for loop for inputOne.
for (var i = 0; i < inputTwo.length; i++) {
  inputTwo.item(i).addEventListener("click", handleSectionClick);
}

//this is a function. Functions are a block of code designed to perform a particular task. This function takes the user inserted value and allows my button to work to display that user inserted value within the console. Val 1 is my made up variable.
function heightButton() {
	var val1 = inputOne.value;
	console.log(val1);
}

//Similar to the heightButton function, but for the value of the Character input. Given the made up variable val2, because it is the second value to be entered in order to build the character tree.
function charButton() {
   var val2 = inputTwo.value;
   console.log(val2);
}






// var button = document.getElementById("hBut");

// var height = document.getElementById("char");

// for (var i = 0; i < height.length; i++) {
//   heightIn.item(i).addEventListener("click", handleSectionClick);
// }
// console.log(i);
// function displayDate() {
    // document.getElementById("demo").innerHTML = Date();
// }