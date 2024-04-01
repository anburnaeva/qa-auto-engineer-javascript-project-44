import readlineSync from 'readline-sync';

// Функция для приветствия

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
};

// Функция для вопроса об имени

export const askName = () => readlineSync.question('May I have your name? ');

// Функция для генерации случайного числа

export const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Функция для проверки чётности числа
export const isEven = (num) => num % 2 === 0;

// Функция для выбора оператора

export const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = generateRandomNumber(0, operators.length - 1);
  return operators[randomIndex];
};

// Функция для генерации выражения

export const generateRandomExpression = () => {
  const operand1 = generateRandomNumber(1, 10);
  const operand2 = generateRandomNumber(1, 10);
  const operator = getRandomOperator();

  return `${operand1} ${operator} ${operand2}`;
};

// Функция для определения НОД

export const findGCD = (a, b) => {
  // Находим остаток от деления большего числа на меньшее
  let remainder;
  while (b !== 0) {
    remainder = a % b;
    // eslint-disable-next-line no-param-reassign
    a = b;
    // eslint-disable-next-line no-param-reassign
    b = remainder;
  }
  // Возвращаем наибольший делитель, который оказался равным b
  return a;
};

export const getProgression = (start, length) => {
  const difference = generateRandomNumber(2, 4);
  const hiddenIndex = generateRandomNumber(0, length - 1);

  const result = [];
  let hiddenNumber;

  // Вычисляем каждый элемент прогрессии и добавляем его в массив

  for (let i = 0; i < length; i += 1) {
    const nextNum = start + i * difference;

    if (i === hiddenIndex) {
      hiddenNumber = nextNum;
      result.push('..'); // Заменяем случайное число двумя точками
    } else {
      result.push(nextNum); // Генерируем элементы прогрессии
    }
  }

  return {
    list: result,
    hiddenNumber,
  };
};

export const isPrimeNumber = (n) => {
  if (n <= 1) {
    return false;
  }
  if (n === 2) {
    return true;
  }
  if (n % 2 === 0) {
    return false; // Проверка на чётность, исключаем чётные числа, кроме 2
  }
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    // Проверяем только нечётные делители
    if (n % i === 0) {
      return false; // Найден делитель, число составное
    }
  }
  return true; // Если не найдено делителей, кроме 1 и самого числа, то число простое
};
