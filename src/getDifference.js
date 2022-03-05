import _ from 'lodash';

const getDifference = (data1, data2) => {
  const keys1 = _.keys(data1);
  const keys2 = _.keys(data2);
  const keys = _.sortBy(_.union(keys1, keys2));

  const lines = keys.map((key) => {
  if (!_.has(data1, key)) {
      return `  + ${key}: ${data2[key]}`;
    } else if (!_.has(data2, key)) {
      return `  - ${key}: ${data1[key]}`;
    } else if (data1[key] !== data2[key]) {
      return [`  - ${key}: ${data1[key]}`, `  + ${key}: ${data2[key]}`];
    } else {
      return `    ${key}: ${data1[key]}`;
    }
  }, '');

  const result = ['{', ...lines.flat(), '}'].join('\n');
  return result;
};

export default getDifference;