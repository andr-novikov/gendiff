import _ from 'lodash';

const stringify = (value) => {
  if (_.isString(value)) {
    return `'${value}'`;
  }
  if (_.isObject(value)) {
    return '[complex value]';
  }
  return value;
};

const plain = (value) => {
  const iter = (currentValue, parent = '') => {
    const lines = currentValue
      .filter((obj) => obj.status !== 'unchanged')
      .map((obj) => {
        const property = parent ? `${parent}.${obj.key}` : obj.key;
        switch (obj.status) {
          case 'nested':
            return iter(obj.children, property);
          case 'removed':
            return `Property '${property}' was removed`;
          case 'added':
            return `Property '${property}' was added with value: ${stringify(obj.value)}`;
          case 'updated':
            return `Property '${property}' was updated. From ${stringify(obj.oldValue)} to ${stringify(obj.newValue)}`;
          default:
            throw new Error(`Unknown difference: '${obj.status}'!`);
        }
      });

    return lines.join('\n');
  };

  return iter(value);
};

export default plain;
