import readlineSync from 'readline-sync';

import {
  greeting,
  askName,
  generateRandomNumber,
  isEven,
} from '../src/index.js';

// Функция для запуска игры

const startBrainEvenGame = () => {
  greeting();
  const name = askName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let correctAnswersCount = 0;

  // Цикл для трёх раундов игры

  while (correctAnswersCount < 3) {
    const randomNumber = generateRandomNumber(1, 100);
    console.log(`Question: ${randomNumber}`);

    const userAnswer = readlineSync.question('Your answer: ');

    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

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

export default startBrainEvenGame;
