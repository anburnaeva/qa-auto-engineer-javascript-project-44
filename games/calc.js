import readlineSync from "readline-sync";

import { greeting } from "../src/index.js";

import { askName } from "../src/index.js";

import { generateRandomExpression } from "../src/index.js";

// Функция для запуска игры

const startCalc = () => {
  greeting();
  const name = askName();
  console.log(`Hello, ${name}!`);
  console.log("What is the result of the expression?");

  let correctAnswersCount = 0;

  // Цикл для трёх раундов игры

  while (correctAnswersCount < 3) {
    const randomExpression = generateRandomExpression();
    console.log(`Question: ${randomExpression}`);

    const userAnswer = readlineSync.question("Your answer: ");

    const correctAnswer = eval(randomExpression);

    if (String(userAnswer) !== String(correctAnswer)) {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
      );
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log("Correct!");
    correctAnswersCount += 1;
  }

  console.log(`Congratulations, ${name}!`);
};

export default startCalc;
