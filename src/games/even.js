import chalk from 'chalk';
import random from 'lodash/random';

const isEven = number => number % 2 === 0;
const { red, bold } = chalk;

export const title = `Answer ${red('"yes"')} ${bold('if')} number even otherwise answer ${red('"no"')}`;
export const play = () => {
  const maxRandomNumber = 20;
  const question = random(maxRandomNumber);
  const rightAnswer = isEven(question) ? 'yes' : 'no';

  const check = userAnswer => rightAnswer === userAnswer;

  return {
    question,
    rightAnswer,
    check,
  };
};
