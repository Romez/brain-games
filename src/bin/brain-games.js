#!/usr/bin/env node

import readlineSync from 'readline-sync';
import greetUser from '..';

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');

const greeting = greetUser(userName);

console.log(greeting);
