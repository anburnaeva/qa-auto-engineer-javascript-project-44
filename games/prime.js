import readlineSync from 'readline-sync';

import {
  generateRandomNumber,
  greeting,
  isPrimeNumber,
  askName,
} from '../src/index.js';

// Функция для запуска игры

const startPrime = () => {
  greeting();

  const name = askName();

  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  let correctAnswersCount = 0;

  // Цикл для трёх раундов игры

  while (correctAnswersCount < 3) {
    const number = generateRandomNumber(5, 45);

    console.log(`Question: ${number}`);

    const userAnswer = readlineSync.question('Your answer: ');

    const correctAnswer = isPrimeNumber(number) ? 'yes' : 'no';

    if (userAnswer.toLowerCase() !== correctAnswer) {
      const message = `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`;
      console.log(message);
      console.log(`Let's try again, ${name}!`);

      return;
    }

    console.log('Correct!');
    correctAnswersCount += 1;
  }

  console.log(`Congratulations, ${name}!`);
};

export default startPrime;
