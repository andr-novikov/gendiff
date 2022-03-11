import path from 'path';
import { cwd } from 'process';
import { readFileSync } from 'fs';
import parse from './parsers.js';

const getFileContent = (filepath) => {
  const currentDirectory = cwd();
  const absolutePath = path.resolve(currentDirectory, filepath);
  const content = readFileSync(absolutePath, 'utf8');
  const format = path.extname(filepath);
  return parse(content, format);
};

export default getFileContent;
