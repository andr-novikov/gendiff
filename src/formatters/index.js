import stylish from './stylish.js';
import plain from './plain.js';
import json from './json.js';

export default (obj, formatName) => {
  switch (formatName) {
    case 'plain':
      return plain(obj);
    case 'json':
      return json(obj);
    default:
      return stylish(obj);
  }
};
