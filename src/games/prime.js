import random from 'lodash/random';
import gameEngine from '..';
import inc from '../utils/inc';

const square = num => num * num;

const isDevider = (testDevider, num) => num % testDevider === 0;

const findDevider = (num, testDevider) => {
  if (square(testDevider) > num) {
    return num;
  }

  if (isDevider(testDevider, num)) {
    return testDevider;
  }

  return findDevider(num, inc(testDevider));
};

const firstTestDevider = 2;
const getSmallestDevider = num => findDevider(num, firstTestDevider);

const isPrime = num => num === getSmallestDevider(num);

const maxQuestionNum = 100;

const title = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const play = () => {
  const question = random(maxQuestionNum);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';

  return {
    question,
    rightAnswer,
  };
};

export default () => gameEngine(title, play);
