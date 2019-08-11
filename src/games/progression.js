import random from 'lodash/random';

const maxStartNum = 10;
const minDifference = 2;
const maxDifference = 5;
const maxProgressionLength = 10;

const makeProgression = (item, next, acc = []) => {
  if (acc.length >= maxProgressionLength) {
    return acc;
  }

  return makeProgression(next(item), next, acc.concat(item));
};

export const title = 'What number is missing in the progression?';

export const play = () => {
  const startNum = random(maxStartNum);
  const difference = random(minDifference, maxDifference);

  const progression = makeProgression(startNum, item => item + difference);

  const randomIdx = random(maxProgressionLength - 1);
  const rightAnswer = progression[randomIdx];
  const question = progression.map((item, idx) => (idx === randomIdx ? '..' : item)).join(' ');
  const check = userAnswer => String(rightAnswer) === userAnswer;

  return {
    question,
    rightAnswer,
    check,
  };
};
