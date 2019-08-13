import { cons, car, cdr } from '@hexlet/pairs';
import random from 'lodash/random';

const operations = [
  cons('+', (x, y) => x + y),
  cons('*', (x, y) => x * y),
  cons('-', (x, y) => x - y),
];

const getOperationName = operation => car(operation);
const getOperationAction = operation => cdr(operation);

const getRandomOperation = () => operations[random(operations.length - 1)];

const maxRandomNumber = 40;

export const title = 'What is the result of the expression?';

export const play = () => {
  const firstNum = random(maxRandomNumber);
  const secondNum = random(maxRandomNumber);
  const operation = getRandomOperation();

  const question = `${firstNum} ${getOperationName(operation)} ${secondNum}`;
  const rightAnswer = getOperationAction(operation)(firstNum, secondNum);
  const check = userAnswer => userAnswer === String(rightAnswer);

  return {
    question,
    rightAnswer,
    check,
  };
};
