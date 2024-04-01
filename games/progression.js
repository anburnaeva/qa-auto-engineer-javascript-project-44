import readlineSync from 'readline-sync';
import { greeting, askName, getProgression } from '../src/index.js';

// Функция для запуска игры

const startProgression = () => {
  greeting();

  const name = askName();

  console.log(`Hello, ${name}!`);
  console.log('What number is missing in the progression?');

  let correctAnswersCount = 0;

  // Цикл для трёх раундов игры

  while (correctAnswersCount < 3) {
    const progression = getProgression(3, 10);

    console.log(`Question: ${progression.list}`);

    const userAnswer = readlineSync.question('Your answer: ');

    const correctAnswer = progression.hiddenNumber;

    if (String(userAnswer) !== String(correctAnswer)) {
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

export default startProgression;
