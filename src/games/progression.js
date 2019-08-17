import random from 'lodash/random';
import last from 'lodash/last';
import gameEngine from '..';

const maxFirstNum = 10;
const minStep = 1;
const maxStep = 5;
const progressionLength = 10;

const makeProgression = (firstNum, maxLength, step) => {
  const iter = acc => (acc.length === maxLength ? acc : iter(acc.concat(last(acc) + step)));
  return iter([firstNum]);
};

const title = 'What number is missing in the progression?';

const play = () => {
  const firstNum = random(maxFirstNum);
  const progressionStep = random(minStep, maxStep);

  const progression = makeProgression(firstNum, progressionLength, progressionStep);

  const hiddenProgressionIndex = random(progressionLength - 1);
  const rightAnswer = String(progression[hiddenProgressionIndex]);
  const question = progression.map((item, idx) => (idx === hiddenProgressionIndex ? '..' : item)).join(' ');

  return { question, rightAnswer };
};

export default () => gameEngine(title, play);
