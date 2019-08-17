import random from 'lodash/random';
import gameEngine from '..';

const maxRandomOpenrand = 40;

const operations = [
  ['+', (x, y) => x + y],
  ['*', (x, y) => x * y],
  ['-', (x, y) => x - y],
];

const getOperationName = operation => operation[0];
const getOperationAction = operation => operation[1];

const title = 'What is the result of the expression?';

const play = () => {
  const firstNum = random(maxRandomOpenrand);
  const secondNum = random(maxRandomOpenrand);
  const randomOperation = operations[random(operations.length - 1)];

  const question = `${firstNum} ${getOperationName(randomOperation)} ${secondNum}`;
  const rightAnswer = String(getOperationAction(randomOperation)(firstNum, secondNum));

  return { question, rightAnswer };
};

export default () => gameEngine(title, play);
