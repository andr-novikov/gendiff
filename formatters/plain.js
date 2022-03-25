import _ from 'lodash';

const format = (value) => {
  if (value === null || _.isBoolean(value)) {
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
      if (obj.children) {
        return iter(obj.children, `${currentKey}${obj.key}`);
      } if (obj.status === 'remove') {
        return `Property '${currentKey}${obj.key}' was removed`;
      } if (obj.status === 'add') {
        return `Property '${currentKey}${obj.key}' was added with value: ${format(obj.value)}`;
      } if (obj.status === 'update') {
        return `Property '${currentKey}${obj.key}' was updated. From ${format(obj.oldValue)} to ${format(obj.newValue)}`;
      }
      return '';
    });
    return _.compact(lines).join('\n' );
  };

  return iter(value);
};

export default plain;
