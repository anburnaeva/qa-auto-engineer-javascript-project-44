import readlineSync from "readline-sync";

import { greeting } from "../src/index.js";

import { askName } from "../src/index.js";

import { generateRandomNumber } from "../src/index.js";

import { findGCD } from "../src/index.js";

// Функция для запуска игры

const startGCD = () => {
  greeting();
  const name = askName();
  console.log(`Hello, ${name}!`);
  console.log("Find the greatest common divisor of given numbers?");

  let correctAnswersCount = 0;

  // Цикл для трёх раундов игры

  while (correctAnswersCount < 3) {
    const randomNumber1 = generateRandomNumber(1, 100);
    const randomNumber2 = generateRandomNumber(1, 100);
    console.log(`Question: ${randomNumber1} ${randomNumber2}`);

    const userAnswer = readlineSync.question("Your answer: ");

    const correctAnswer = findGCD(randomNumber1, randomNumber2);

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

export default startGCD;
