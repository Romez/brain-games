import random from 'lodash/random';
import gameEngine from '..';
import inc from '../utils/inc';

const maxRamdomNumber = 100;

const isPrime = (num) => {
  const square = x => x * x;

  const isDevider = (testDevider, x) => x % testDevider === 0;

  const findDevider = (x, testDevider) => {
    if (square(testDevider) > x) {
      return x;
    }

    if (isDevider(testDevider, x)) {
      return testDevider;
    }

    return findDevider(x, inc(testDevider));
  };

  const firstTestDevider = 2;

  return num === findDevider(num, firstTestDevider);
};

const title = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const play = () => {
  const question = random(maxRamdomNumber);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';

  return { question, rightAnswer };
};

export default () => gameEngine(title, play);
