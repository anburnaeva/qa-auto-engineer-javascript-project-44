import readlineSync from "readline-sync";

//Функция для приветствия

export const greeting = () => {
  console.log("Welcome to the Brain Games!");
};

//Функция для вопроса об имени

export const askName = () => {
  return readlineSync.question("May I have your name? ");
};

// Функция для генерации случайного числа

export const generateRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

// Функция для проверки чётности числа
export const isEven = (num) => num % 2 === 0;

// Функция для выбора оператора

export const getRandomOperator = () => {
  const operators = ["+", "-", "*"];
  const randomIndex = generateRandomNumber(0, operators.length - 1);
  return operators[randomIndex];
};

//Функция для генерации выражения

export const generateRandomExpression = () => {
  const operand1 = generateRandomNumber(1, 10);
  const operand2 = generateRandomNumber(1, 10);
  const operator = getRandomOperator();

  return `${operand1} ${operator} ${operand2}`;
};
