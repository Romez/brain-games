import readlineSync from 'readline-sync';
import { green } from 'chalk';
import * as even from './games/even';
import * as calc from './games/calc';
import * as gcd from './games/gcd';
import * as progression from './games/progression';
import * as prime from './games/prime';

const games = {
  even,
  calc,
  gcd,
  progression,
  prime,
};

const maxTries = 3;

export const greetUser = userName => `Hello, ${userName}`;

const startGame = (gameName) => {
  const { play, title } = games[gameName];

  console.log('Welcome to the Brain Games!');

  console.log(title);

  const userName = readlineSync.question('May I have your name? ');
  console.log(greetUser(userName));

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
