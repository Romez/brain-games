import readlineSync from 'readline-sync';
import chalk from 'chalk';
import { play as evenPlay, title as evenTitle } from './games/even';
import { play as calcPlay, title as calcTitle } from './games/calc';

const { green } = chalk;

const games = {
  even: { title: evenTitle, play: evenPlay },
  calc: { title: calcTitle, play: calcPlay },
};

export const greetUser = userName => `Hello, ${userName}`;

const startGame = (gameName) => {
  const { play, title } = games[gameName];

  console.log('Welcome to the Brain Games!');

  console.log(title);

  const userName = readlineSync.question('May I have your name? ');
  console.log(greetUser(userName));

  const maxTries = 3;

  const runGame = (tries = 0) => {
    if (tries >= maxTries) {
      return green(`Congratulations ${userName}!`);
    }

    const { question, rightAnswer, check } = play();
    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (!check(userAnswer)) {
      return `'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`;
    }

    console.log(green('Correct!'));

    return runGame(tries + 1);
  };

  const gameResult = runGame();
  console.log(gameResult);
};

export default startGame;
