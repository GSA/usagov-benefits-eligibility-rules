import { Engine } from 'json-rules-engine';
import rules from './bears.json';

export function config() {
  return Promise.resolve();
};

export function isElegible({ facts }) {
  const rulesEngine = new Engine(rules.decisions);
  return rulesEngine.run(facts);
};
