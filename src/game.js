import readlineSync from "readline-sync";

// Функция для генерации случайного числа
const generateRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

// Функция для проверки чётности числа
const isEven = (num) => num % 2 === 0;

// Функция для запуска игры
const startBrainEvenGame = () => {
  console.log("Welcome to the Brain Games!");
  const name = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let correctAnswersCount = 0;

  // Цикл для трёх раундов игры
  while (correctAnswersCount < 3) {
    const randomNumber = generateRandomNumber(1, 100);
    console.log(`Question: ${randomNumber}`);

    const userAnswer = readlineSync.question("Your answer: ");

    const correctAnswer = isEven(randomNumber) ? "yes" : "no";

    if (userAnswer.toLowerCase() !== correctAnswer) {
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

export default startBrainEvenGame;
