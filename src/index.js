import readlineSync from 'readline-sync';
import { green } from 'chalk';

const maxTries = 3;

export const greetUser = userName => `Hello, ${userName}`;

const startGame = (title, play) => {
  console.log('Welcome to the Brain Games!');

  console.log(title);

  const userName = readlineSync.question('May I have your name? ');
  console.log(greetUser(userName));

  for (let i = 0; i < maxTries; i += 1) {
    const { question, rightAnswer } = play();
    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== rightAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log(green('Correct!'));
  }

  console.log(green(`Congratulations ${userName}!`));
};

export default startGame;
