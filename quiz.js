// Created a variable holding an empty array labeled tree to hold the output of treeGrower.
var tree = [];

// The variable inputFields holds an object with heightInput: for the user's desired tree height, and characterInput for the desired character to be used to build the tree.
var inputFields = {
  heightInput: "",
  characterInput: ""
};

// This function labeled treeGrower allows the keys inside the inputFields object to recognize the value of the input placed inside of them. The parseInt was required in order to get a actual numerical value from the user number input, instead of a string. It then calls treeChecker function.
var treeGrower = function() {
  inputFields.heightInput = parseInt(document.getElementById("height").value);
  inputFields.characterInput = document.getElementById("char").value;
  treeChecker(inputFields);
  tree = [];
}

// This function contains an if,else statement that says if the height and character input fields are equal (===) to a blank field or nothing ("") then it will display an alert that says the fields must have value. Else, it will begin to run the for loop. The for loop will place an empty space in the front of the first character and decrease it with every loop. While the other will increase the character and decrease the space.
var treeChecker = function (inputFields) {
  if (inputFields.heightInput === "" || inputFields.characterInput === "") {
    alert ("Both fields must have a value!")
  }
  else {
    for (i = 0; i < inputFields.heightInput - 1; i++) {
      tree.unshift(" ");
    }
    tree.push(inputFields.characterInput);
    console.log(tree.join(""));
    for (k = 0; k < inputFields.heightInput - 1; k++) {
      tree.push(inputFields.characterInput);
      tree.push(inputFields.characterInput);
      tree.shift(" ");
      console.log(tree.join(""));
    }
  }
};

function enterKey (event) {
if (event.which === 13) {
  treeGrower(tree = [])
  console.log(event);
  }
}

// tree growing button
var button = document.getElementById("treeGrowerBut");
// event listeners for button, height and character.
button.addEventListener("click", treeGrower);
height.addEventListener("keypress", enterKey);
char.addEventListener("keypress", enterKey);
