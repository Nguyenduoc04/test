inputPhysic = prompt("Enter the value of physic");
inputChemistry = prompt("Enter the value of chemistry");
inputScience = prompt("Enter the value of science");
let physic = parseFloat(inputPhysic);
let chemistry = parseFloat(inputChemistry);
let science = parseFloat(inputScience);

let avg = (physic + chemistry + science) / 3;
document.write("The average of the three subjects is " + avg.toFixed(2));