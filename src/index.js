import { Engine } from 'json-rules-engine';
import rules from './bears.json';

const onSuccess = async (event, almanac) => {
  almanac.addRuntimeFact('benefit.va.bronzeMedalion', 1);
};

const onFailure = async (event, almanac) => {
  almanac.addRuntimeFact('benefit.va.bronzeMedalion', 0);
};

export function config() {
  return Promise.resolve();
};

export function isElegible({ facts }) {

  rules.decisions.filter(d => d.event.type === 'benefit.va.bronzeMedalion').forEach((d) => {
    d.onSuccess = onSuccess;
    d.onFailure = onFailure;
  });

  const rulesEngine = new Engine(rules.decisions, {
    allowUndefinedFacts: true,
  });
  return rulesEngine.run(facts);
};
