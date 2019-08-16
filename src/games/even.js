import random from 'lodash/random';
import gameEngine from '..';

const isEven = number => number % 2 === 0;

const title = 'Answer "yes" if number even otherwise answer "no"';

const maxRandomNumber = 20;

const play = () => {
  const question = random(maxRandomNumber);
  const rightAnswer = isEven(question) ? 'yes' : 'no';

  return { question, rightAnswer };
};

export default () => gameEngine(title, play);
