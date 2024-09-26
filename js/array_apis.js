// Q1. make a string out of an array
{
  const fruits = ["apple", "banana", "orange"];
  console.log(fruits.toString());

  // use this..
  const result = fruits.join("/");
  console.log(result);
}

// Q2. make an array out of a string
{
  const fruits = "🍎, 🥝, 🍌, 🍒";
  const basket = [];
  basket.push(fruits);
  console.log(basket);

  // use this..
  const result = fruits.split(",");
  console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(array);
  console.log(result);
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  //   const result = array.splice(0, 2);
  //   console.log(array);
  //   console.log(result);
  // splice : modifies array itself

  //use this..
  const result = array.slice(2, 5);
  console.log(array);
  console.log(result);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}

const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

// Q5. find a student with the score 90
{
  students.forEach((student) =>
    console.log(
      student.score === 90
        ? `${student.name} is with the score 90`
        : `${student.name} is not with the score 90`
    )
  );
  //use this..
  const result = students.find((student) => student.score === 90);
  console.log(result);
}

// Q6. make an array of enrolled students
{
  //   const enrolledStudent = [];
  //   students.forEach((student) =>
  //     student.enrolled == true ? enrolledStudent.push(student.name) : ""
  //   );
  //   console.log(`enrolled student : ${enrolledStudent}`);

  // use this
  const result = students.filter((student) => student.enrolled === true);
  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  //   const studentScore = [];
  //   students.forEach((student) => studentScore.push(student.score));
  //   console.log(studentScore);

  // use this
  const result = students.map((student) => student.score);
  console.log(result);
}
// Q8. check if there is a student with the score lower than 50
{
  //   const lowerScore = studentScore.find((score) => score < 50);
  //   console.log(lowerScore === 0 ? false : true);

  const result = students.filter((student) => student.score < 50);
  console.log(result);
  //use this.. 어느 하나라도 만족
  console.clear;
  const truth = students.some((student) => student.score < 50);
  console.log(truth);
  //모든 배열 조건 만족
  const falsity = !students.every((student) => student.score >= 50);
  console.log(falsity);
}
// Q9. compute students' average score
console.clear;
{
  //   let sum = 0;
  //   let studentScoreLength = studentScore.length;

  //   const sumFunction = (a, b) => a + b;

  //   studentScore.forEach((score) => {
  //     sum = sumFunction(sum, score);
  //   });
  // const averageScore = sum / studentScoreLength;
  // console.log(averageScore);

  //use this..
  const result = students.reduce((prev, curr) => {
    console.log("-----");
    console.log(prev);
    console.log(curr);
    return prev + curr.score;
  }, 0);
  console.log(result / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result = students.map((student) => student.score).join();
  console.log(result);
}
//   console.log(studentScore.toString());
// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
//   console.log(studentScore.sort().toString());
{
  const result = students
    .map((student) => student.score)
    .sort()
    .join();
  console.log(result);
}
