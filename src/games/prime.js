import random from 'lodash/random';

const square = num => num * num;

const isDevides = (a, b) => b % a === 0;

const findDevisor = (num, testDevisor) => {
  if (square(testDevisor) > num) {
    return num;
  }

  if (isDevides(testDevisor, num)) {
    return testDevisor;
  }

  return findDevisor(num, testDevisor + 1);
};

const getSmallestDevisor = num => findDevisor(num, 2);

const isPrime = num => num === getSmallestDevisor(num);

const maxQuestionNum = 100;

export const title = 'Answer "yes" if given number is prime. Otherwise answer "no"}.';

export const play = () => {
  const question = random(maxQuestionNum);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  const check = userAnswer => userAnswer === rightAnswer;

  return {
    question,
    rightAnswer,
    check,
  };
};
