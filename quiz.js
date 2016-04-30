//the variable inputOne was created for the id= "height" for the first input tag, and the variable inputTwo was created for the id= "char" for the second input tag in my HTML. They were given the key, getElementById() in order to get the info that would be put into the by the DOM.
// var inputOne = document.getElementById("height");
// var inputTwo = document.getElementById("char");


//this for loop takes the length of inputOne (whatever the user chooses at this point) and increases it everytime it loops. An event listener was added that waits for a users mouse click.
// for (var i = 0; i < inputOne.length; i++) {
// 	inputOne.item[i].addEventListener("click", handleSectionClick);
// }

//Button: for this variable labeled button, the document.getElementById was used and labeled "TreeButton" and given the addEventListener attribute for function heightButton and charButton to listen for the input event.
// var button = document.getElementById("TreeButton").addEventListener("click", heightButton);addEventListener("click", charButton)
// ;

//this is the for loop for inputTwo (Character) and carries out the same job as the for loop for inputOne.
// for (var i = 0; i < inputTwo.length; i++) {
//   inputTwo.item(i).addEventListener("click", handleSectionClick);
// }


// function TreeButton() {
//     var totalNumberofRows = 7;
//     var arr = new Array();
//     for (var i = 1; i <= totalNumberofRows; i++) {
//         for (var j = 1; j <= i; j++) {

//             arr.push(j);
//             console.log(j);
//         }
//         console.log(" ");
//     }
// }


//this is a function. Functions are a block of code designed to perform a particular task. This function takes the user inserted value and allows my button to work to display that user inserted value within the console. Val 1 is my made up variable.
// function heightButton() {
// 	var val1 = inputOne.value;
// 	console.log(val1);
// }

//Similar to the heightButton function, but for the value of the Character input. Given the made up variable val2, because it is the second value to be entered in order to build the character tree.
// function charButton() {
//    var val2 = inputTwo.value;
//    console.log(val2);
// }

var tree = [];

var inputFields = {
  heightInput: "",
  characterInput: ""
};

var treeGrower = function() {
  inputFields.heightInput = document.getElementById("height").value;
  inputFields.characterInput = document.getElementById("char").value;
  treeChecker(inputFields);



var treeChecker = function () {
    if (inputFields.heightInput == "" || inputFields.characterInput == "") {
      alert ("Both fields must have a value!")
    }
      else {
      for (j = 0; inputFields.heightInput - 1; j++) {
        tree.unshift("");
      }
      tree.push(inputFields.characterInput);
      console.log(tree.join(""));
      for (i = 0; i <input.branches-1; i++) {
          tree.push(inputFields.characterInput);
          tree.push(inputFields.characterInput);
          tree.shift(" ");
          console.log(tree.join(""));
      }
      }
}
}


 var button = document.getElementById("treeGrower");
 button.addEventListener("click", treeGrower)

 inputFields.addEventListener("click", treeGrower);
 // characterInput.addEventListener("click", treeGrower);

// var height = document.getElementById("char");

// for (var i = 0; i < height.length; i++) {
//   heightIn.item(i).addEventListener("click", handleSectionClick);
// }
// console.log(i);
// function displayDate() {
    // document.getElementById("demo").innerHTML = Date();
// }