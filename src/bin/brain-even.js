#!/usr/bin/env node

import readlineSync from 'readline-sync';
import chalk from 'chalk';
import random from 'lodash/random';
import { greetUser, isEven } from '..';

const { red, bold, green } = chalk;

console.log('Welcome to the Brain Games!');

console.log(`Answer ${red('"yes"')} ${bold('if')} number even otherwise answer ${red('"no"')}`);

const userName = readlineSync.question('May I have your name? ');

const greeting = greetUser(userName);

console.log(greeting);

const maxTries = 3;
const maxRandomNumber = 20;

const runGame = (triesCount = 0) => {
  if (triesCount >= maxTries) {
    return green(`Congratulations ${userName}!`);
  }

  const randomNumber = random(maxRandomNumber);
  console.log(`Question: ${randomNumber}`);

  const userAnswer = readlineSync.question('Your answer: ');
  const rightAnswer = isEven(randomNumber) ? 'yes' : 'no';

  if (userAnswer !== rightAnswer) {
    return `'${userAnswer}' is wrong answer ;(. Correct answer was ${rightAnswer}.\nLet's try again, ${userName}!`;
  }

  console.log(green('Correct!'));

  return runGame(triesCount + 1);
};


const gameResult = runGame();
console.log(gameResult);
