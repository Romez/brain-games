import readlineSync from 'readline-sync';
import { green } from 'chalk';
import inc from './utils/inc';

const maxTries = 3;

export const greetUser = userName => `Hello, ${userName}`;

const startGame = (title, play) => {
  console.log('Welcome to the Brain Games!');

  console.log(title);

  const userName = readlineSync.question('May I have your name? ');
  console.log(greetUser(userName));

  const runGame = (triesCount = 0) => {
    if (triesCount >= maxTries) {
      return green(`Congratulations ${userName}!`);
    }

    const { question, rightAnswer } = play();
    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== rightAnswer) {
      return `'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`;
    }

    console.log(green('Correct!'));

    return runGame(inc(triesCount));
  };

  const gameResult = runGame();
  console.log(gameResult);
};

export default startGame;
