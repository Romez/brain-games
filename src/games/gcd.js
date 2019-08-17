import random from 'lodash/random';
import gameEngine from '..';

const maxRandomNumber = 100;

const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

const title = 'Find the greatest common divisor of given numbers.';

const play = () => {
  const firstNum = random(maxRandomNumber);
  const secondNum = random(maxRandomNumber);

  const question = `${firstNum} ${secondNum}`;
  const rightAnswer = String(gcd(firstNum, secondNum));

  return { question, rightAnswer };
};

export default () => gameEngine(title, play);
