/* Write your code below. Good luck! 🙂 */
const massMark = 88;
const heightMark = 169;

const massJohn = 92;
const heightJohn = 195;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);

console.log(BMIMark, BMIJohn);

const markHigherBMI = BMIMark > BMIJohn;

console.log(markHigherBMI);
