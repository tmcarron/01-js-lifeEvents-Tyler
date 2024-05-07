"use strict";

let hours = Number(prompt("Please enter the number of hours worked"));
let wage = Number(prompt("Please enter the hourly wage"));
let totalEarning = 0;
for (let i = 0; i < hours; i++) {
  if (i < 40) {
    totalEarning += wage;
  } else {
    totalEarning += wage * 1.5;
  }
}
console.log("Your total earning is " + totalEarning);
