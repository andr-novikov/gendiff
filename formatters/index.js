import stylish from './stylish.js';
import plain from './plain.js';
import json from './json.js';

export default (obj, formatName) => {
  if (formatName === 'plain') {
    return plain(obj);
  }
  if (formatName === 'json') {
    return json(obj);
  }
  return stylish(obj);
};
