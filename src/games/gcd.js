import random from 'lodash/random';

const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

export const title = 'Find the greatest common divisor of given numbers.';

const maxRandomNumber = 100;

export const play = () => {
  const firstNum = random(maxRandomNumber);
  const secondNum = random(maxRandomNumber);

  const question = `${firstNum} ${secondNum}`;
  const rightAnswer = gcd(firstNum, secondNum);

  const check = userAnswer => String(rightAnswer) === userAnswer;

  return {
    question,
    rightAnswer,
    check,
  };
};
