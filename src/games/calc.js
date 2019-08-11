import { cons, car, cdr } from '@hexlet/pairs';
import {
  multiply,
  subtract,
  random,
  add,
} from 'lodash';

export const title = 'What is the result of the expression?';

const operations = [
  cons('+', add),
  cons('*', multiply),
  cons('-', subtract),
];

const getOperationName = car;
const getOperationAction = cdr;

const getRandomOperation = () => operations[random(operations.length - 1)];

const maxRandomNumber = 40;

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
