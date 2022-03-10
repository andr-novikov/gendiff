import { fileURLToPath } from 'url';
import path from 'path';
import generateDiff from '../src/genDiff.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const str = `{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`;

test('getDifferenceRelativePath', () => {
  expect(generateDiff('./__fixtures__/file1.json', './__fixtures__/file2.json')).toEqual(str);
});

test('getDifferenceAbsolutePath', () => {
  expect(generateDiff(getFixturePath('file1.json'), getFixturePath('file2.json'))).toEqual(str);
});
