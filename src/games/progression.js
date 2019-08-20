import random from 'lodash/random';
import last from 'lodash/last';
import gameEngine from '..';

const maxFirstNum = 10;
const minStep = 1;
const maxStep = 5;
const maxProgressionLength = 10;

const makeProgression = (firstNum, progressionLength, step) => {
  const iter = (acc) => {
    if (acc.length === progressionLength) {
      return acc;
    }
    const progressionItem = last(acc) + step;
    return iter(acc.concat(progressionItem));
  };

  return iter([firstNum]);
};

const title = 'What number is missing in the progression?';

const play = () => {
  const firstNum = random(maxFirstNum);
  const progressionStep = random(minStep, maxStep);

  const progression = makeProgression(firstNum, maxProgressionLength, progressionStep);

  const hiddenElementIndex = random(maxProgressionLength - 1);
  const rightAnswer = String(progression[hiddenElementIndex]);
  const question = progression.map((item, idx) => (idx === hiddenElementIndex ? '..' : item)).join(' ');

  return { question, rightAnswer };
};

export default () => gameEngine(title, play);
