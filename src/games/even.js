import random from 'lodash/random';

const isEven = number => number % 2 === 0;

export const title = 'Answer "yes" if number even otherwise answer "no"';

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
