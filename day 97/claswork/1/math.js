import { add } from './utils.js';
import { log } from './logger.js';

export function addAndLog(a, b) {
  const result = add(a, b);
  log(result);
  return result;
}