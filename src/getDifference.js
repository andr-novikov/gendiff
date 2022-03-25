import _ from 'lodash';

const getDifference = (obj1, obj2) => {
  const iter = (data1, data2) => {
    const keys1 = _.keys(data1);
    const keys2 = _.keys(data2);
    const keys = _.sortBy(_.union(keys1, keys2));

    const result = keys.reduce((acc, key) => {
      const tree = {};
      tree.key = key;
      tree.status = 'default';

      if (_.isPlainObject(data1[key]) && _.isPlainObject(data2[key])) {
        tree.children = iter(data1[key], data2[key]);
      } else if (!_.has(data1, key)) {
        tree.status = 'add';
        tree.value = data2[key];
      } else if (!_.has(data2, key)) {
        tree.status = 'remove';
        tree.value = data1[key];
      } else if (data1[key] !== data2[key]) {
        tree.status = 'update';
        tree.oldValue = data1[key];
        tree.newValue = data2[key];
      } else {
        tree.value = data1[key];
      }

      acc.push(tree);
      return acc;
    }, []);
    return result;
  };

  const diff = iter(obj1, obj2);
  return diff;
};

export default getDifference;
