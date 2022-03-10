import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const getFixturePath = (filename) => {
  const a = path.join(__dirname, '..', '__fixtures__', filename);
  console.log(a);
  return a;
};

export const readFile = (filename) => {
  const r = fs.readFileSync(getFixturePath(filename), 'utf-8');
  console.log(r);
  return r;
};

// const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');


const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');




const gendiff = (data1, data2, replacer = ' ', spacesCount = 2) => {
  const keys1 = _.keys(data1);
  const keys2 = _.keys(data2);
  const keys = _.sortBy(_.union(keys1, keys2));

  const iter = (keys, depth) => {
    const indentSize = depth * spacesCount;
    const currentIndent = replacer.repeat(indentSize);
    const bracketIndent = replacer.repeat(indentSize - spacesCount);

    const lines = keys.map((key) => {
      if (!_.has(data1, key)) {
        return `${currentIndent}+ ${key}: ${data2[key]}`;
      } else if (!_.has(data2, key)) {
        return `${currentIndent}- ${key}: ${data1[key]}`;
      } else if (data1[key] !== data2[key]) {
        return [`${currentIndent}- ${key}: ${data1[key]}`, `${currentIndent}+ ${key}: ${data2[key]}`];
      } else {
        return `${currentIndent}  ${key}: ${data1[key]}`;
      }
    }, '');

    return ['{', ...lines.flat(), `${bracketIndent}}`].join('\n');

  };

  const result = iter(keys, 1);
  console.log(result);
  return result;
};
