import { Engine } from 'json-rules-engine';
import rules from './bears.json';

export function config() {
  return Promise.resolve();
};

export function isEligible({ facts }) {
  const rulesEngine = new Engine(rules.decisions, {
    allowUndefinedFacts: true,
  });
  return rulesEngine.run(facts);
};
