import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
import generateDiff from '../src/genDiff.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test('getDifferenceJSON', () => {
  const diff = generateDiff(getFixturePath('file1.json'), getFixturePath('file2.json'));
  const expectDiff = fs.readFileSync(getFixturePath('expect.txt'), 'utf8');
  expect(diff).toEqual(expectDiff);
});

test('getDifferenceYML', () => {
  const diff = generateDiff(getFixturePath('file1.yml'), getFixturePath('file2.yaml'));
  const expectDiff = fs.readFileSync(getFixturePath('expect.txt'), 'utf8');
  expect(diff).toEqual(expectDiff);
});
