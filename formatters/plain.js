import _ from 'lodash';

const format = (value) => {
  if (value === null || _.isBoolean(value) || _.isNumber(value)) {
    return value;
  } if (_.isObject(value)) {
    return '[complex value]';
  }
  return `'${value}'`;
};

const plain = (value) => {
  const iter = (currentValue, key) => {
    const currentKey = key ? `${key}.` : '';
    const lines = currentValue.map((obj) => {
      switch (obj.status) {
        case 'unchanged':
          return obj.children ? iter(obj.children, `${currentKey}${obj.key}`) : '';
        case 'removed':
          return `Property '${currentKey}${obj.key}' was removed`;
        case 'added':
          return `Property '${currentKey}${obj.key}' was added with value: ${format(obj.value)}`;
        case 'updated':
          return `Property '${currentKey}${obj.key}' was updated. From ${format(obj.oldValue)} to ${format(obj.newValue)}`;
        default:
          return '';
      }
    });
    return _.compact(lines).join('\n');
  };

  return iter(value);
};

export default plain;
