import random from 'lodash/random';
import gameEngine from '..';

const maxRandomNumber = 20;

const isEven = number => number % 2 === 0;

const title = 'Answer "yes" if number even otherwise answer "no"';

const play = () => {
  const question = random(maxRandomNumber);
  const rightAnswer = isEven(question) ? 'yes' : 'no';

  return { question, rightAnswer };
};

export default () => gameEngine(title, play);
