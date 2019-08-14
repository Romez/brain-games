import { cons, car, cdr } from '@hexlet/pairs';
import random from 'lodash/random';
import gameEngine from '..';

const operations = [
  cons('+', (x, y) => x + y),
  cons('*', (x, y) => x * y),
  cons('-', (x, y) => x - y),
];

const getOperationName = operation => car(operation);
const getOperationAction = operation => cdr(operation);

const getRandomOperation = () => operations[random(operations.length - 1)];

const maxRandomNumber = 40;

const title = 'What is the result of the expression?';

const play = () => {
  const firstNum = random(maxRandomNumber);
  const secondNum = random(maxRandomNumber);
  const operation = getRandomOperation();

  const question = `${firstNum} ${getOperationName(operation)} ${secondNum}`;
  const rightAnswer = String(getOperationAction(operation)(firstNum, secondNum));

  return {
    question,
    rightAnswer,
  };
};

export default () => {
  gameEngine(title, play);
};
