import {env} from 'node:process';
import { config } from 'dotenv';
config();

console.log('My var: ', env.MY_VAR);
