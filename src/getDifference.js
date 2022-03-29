import _ from 'lodash';

const getDifference = (data1, data2) => {
  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);
  const keys = _.sortBy(_.union(keys1, keys2));

  const result = keys.map((key) => {
    if (_.isPlainObject(data1[key]) && _.isPlainObject(data2[key])) {
      const children = getDifference(data1[key], data2[key]);
      return { key, status: 'nested', children };
    } if (!_.has(data1, key)) {
      const value = data2[key];
      return { key, status: 'added', value };
    } if (!_.has(data2, key)) {
      const value = data1[key];
      return { key, status: 'removed', value };
    } if (!_.isEqual(data1[key], data2[key])) {
      const oldValue = data1[key];
      const newValue = data2[key];
      return {
        key, status: 'updated', oldValue, newValue,
      };
    }
    const value = data1[key];
    return { key, status: 'unchanged', value };
  });
  return result;
};

export default getDifference;
