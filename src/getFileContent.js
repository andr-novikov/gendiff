import path from 'path';
import { cwd } from 'process';
import { readFileSync } from 'fs';

const getFileContent = (filepath) => {
  const currentDirectory = cwd();
  const absolutePath = path.resolve(currentDirectory, filepath);
  const json = readFileSync(absolutePath, 'utf8');
  const obj = JSON.parse(json);
  return obj;
};

export default getFileContent;