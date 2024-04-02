#!/usr/bin/env node
import { greeting, askName } from '../src/index.js';

greeting();

const name = askName();

console.log(`Hello, ${name}!`);
