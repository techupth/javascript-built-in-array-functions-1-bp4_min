const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(totalScore,students) {
  return  students.score + totalScore 
}
let result = students.reduce(getAverageStudentScore,0)
let avgResult = result/students.length
console.log(avgResult)
