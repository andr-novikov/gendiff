import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
import genDiff from '../src/genDiff.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test('getDifferenceStylish', () => {
  const diff = genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'));
  const expectDiff = fs.readFileSync(getFixturePath('expect-stylish.txt'), 'utf8');
  expect(diff).toEqual(expectDiff);
});

test('getDifferenceStylishYML', () => {
  const diff = genDiff(getFixturePath('file1.yml'), getFixturePath('file2.yaml'));
  const expectDiff = fs.readFileSync(getFixturePath('expect-stylish.txt'), 'utf8');
  expect(diff).toEqual(expectDiff);
});

test('getDifferencePlain', () => {
  const diff = genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'), 'plain');
  const expectDiff = fs.readFileSync(getFixturePath('expect-plain.txt'), 'utf8');
  expect(diff).toEqual(expectDiff);
});

test('getDifferenceJSON', () => {
  const diff = genDiff(getFixturePath('file1.yml'), getFixturePath('file2.yaml'), 'json');
  const expectDiff = fs.readFileSync(getFixturePath('expect-json.txt'), 'utf8');
  expect(diff).toEqual(expectDiff);
});
