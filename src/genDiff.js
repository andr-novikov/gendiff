import getDifference from './getDifference.js';
import getFileContent from './getFileContent.js';

const genDiff = (filepath1, filepath2) => {
  const data1 = getFileContent(filepath1);
  const data2 = getFileContent(filepath2);
  const diff = getDifference(data1, data2);
  return diff;
};

export default genDiff;
