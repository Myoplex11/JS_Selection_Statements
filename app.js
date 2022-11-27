console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

//Exercise1:
let favoriteNumber = 78;
let userChoice = prompt("Please enter a number");
userChoice = parseInt(userChoice);

if (isNaN(userChoice)) {
  console.log("Your entry is invalid please try again.")
} else if (userChoice > favoriteNumber) {
    console.log("too high")
} else if (userChoice < favoriteNumber) {
    console.log("too low")
} else {
    console.log("Congratulations!!!")
}

//Exercise2:
let birthMonth = prompt("What is your birth month");
birthMonth = birthMonth.toLowerCase();
switch(birthMonth) {
  case "december":
  case "january":
  case "february":
    console.log("Winter");
    break;
  case "march":
  case "april":
  case "may":
    console.log("Spring");
    break;
  case "june":
  case "july":
  case "august":
    console.log("Summer");
    break;
  case "september":
  case "october":
  case "november":
    console.log("Fall");
    break;
  default:
    console.log("Thats not a valid month");

}


//Exercise 3:
let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

switch(typeId) {
  case "01":
    type = "Tank top";
    break;
  case  "02":
    type = "T-Shirt";
    break;
  case  "03":
    type = "Long Sleeve";
    break;
  case "04":
    type = "Sweat Shirt";
    break;
  default:
    type = "Other";

}

switch(colorId) {
  case  "BL":
    color = "Black";
    break;
  case "Bl":
    color = "Blue";
    break;
  case  "RD":
    color = "Red";
    break;
  case  "PU":
    color = "Purple";
    break;
  default:
    color = "White";


}

switch (sizeId) {
  case "S":
    size = "Small";
    break;
  case  "M":
    size = "Medium";
    break;
  case  "L":
    size = "Large";
    break
  case "XL":
    size = "Extra Large"
    break
  default:
    size = "One Size Fits ALL"

}

console.log(`Product: ${size} ${color} ${type}`);
