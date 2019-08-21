import random from 'lodash/random';
import gameEngine from '..';

const minRandomNumber = -10;
const maxRamdomNumber = 100;

const isPrime = (num) => {
  const firstPrimeNumber = 2;

  if (num < firstPrimeNumber) {
    return false;
  }

  const isDivider = (testDivider, x) => x % testDivider === 0;

  const findDivider = (x, testDivider) => {
    if (testDivider ** 2 > x) {
      return x;
    }

    if (isDivider(testDivider, x)) {
      return testDivider;
    }

    return findDivider(x, testDivider + 1);
  };

  return num === findDivider(num, firstPrimeNumber);
};

const title = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const play = () => {
  const question = random(minRandomNumber, maxRamdomNumber);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';

  return { question, rightAnswer };
};

export default () => gameEngine(title, play);
