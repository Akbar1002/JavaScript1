"use strict";

function gradeCalculator(score) {
  // change score to the percentage by adding % sign//
  const percentage = score + "%";
  let grade;
  //math floor can change fraction to whole number,in order to file the number//
  switch (Math.floor(score / 10)) {
    case 10:
    case 9:
      grade = "A";
      break;
    case 8:
      grade = "B";
      break;
    case 7:
      grade = "C";
      break;
    case 6:
      grade = "D";
      break;
    case 5:
      grade = "E";
      break;
    case 4:
      grade = "F";
      break;
    default:
      grade = "F";
      break;
  }
  console.log(`You got a ${grade} (${percentage})!`);
}
gradeCalculator(100);
gradeCalculator(90);
gradeCalculator(80);
gradeCalculator(70);
gradeCalculator(65);
gradeCalculator(50);
gradeCalculator(40);
gradeCalculator(30);
gradeCalculator(0);
