import getDifference from './getDifference.js';
import getFileContent from './getFileContent.js';
import formatter from '../formatters/index.js';

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const data1 = getFileContent(filepath1);
  const data2 = getFileContent(filepath2);
  const diff = getDifference(data1, data2);
  return formatter(diff, formatName);
};

export default genDiff;
