import random from 'lodash/random';
import gameEngine from '..';

const minRandomNumber = -10;
const maxRamdomNumber = 10;

const isPrime = (num) => {
  const firstPrimeNumber = 2;

  if (num < firstPrimeNumber) {
    return false;
  }

  const isDevider = (testDevider, x) => x % testDevider === 0;

  const findDevider = (x, testDevider) => {
    if (testDevider ** 2 > x) {
      return x;
    }

    if (isDevider(testDevider, x)) {
      return testDevider;
    }

    return findDevider(x, testDevider + 1);
  };

  return num === findDevider(num, firstPrimeNumber);
};

const title = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const play = () => {
  const question = random(minRandomNumber, maxRamdomNumber);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';

  return { question, rightAnswer };
};

export default () => gameEngine(title, play);
