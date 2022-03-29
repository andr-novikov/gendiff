import _ from 'lodash';

const getIndent = (depth) => {
  const replacer = ' ';
  const spacesCount = 4;
  const indentSize = depth * spacesCount;
  const currentIndent = replacer.repeat(indentSize - 2);
  const bracketIndent = replacer.repeat(indentSize - spacesCount);

  return [currentIndent, bracketIndent];
};

const stringify = (value, depth) => {
  if (!_.isObject(value)) {
    return `${value}`;
  }

  const [currentIndent, bracketIndent] = getIndent(depth);
  const lines = Object
    .entries(value)
    .map(([key, val]) => `${currentIndent}  ${key}: ${stringify(val, depth + 1)}`);

  return ['{', ...lines, `${bracketIndent}}`].join('\n');
};

const stylish = (value) => {
  const iter = (currentValue, depth) => {
    const [currentIndent, bracketIndent] = getIndent(depth);
    const symbols = { added: '+ ', removed: '- ', unchanged: '  ' };
    const lines = currentValue.map((obj) => {
      switch (obj.status) {
        case 'nested':
          return `${currentIndent}  ${obj.key}: ${iter(obj.children, depth + 1)}`;
        case 'updated': {
          const str1 = `${currentIndent}- ${obj.key}: ${stringify(obj.oldValue, depth + 1)}`;
          const str2 = `${currentIndent}+ ${obj.key}: ${stringify(obj.newValue, depth + 1)}`;
          return `${str1}\n${str2}`;
        }
        default:
          return `${currentIndent}${symbols[obj.status]}${obj.key}: ${stringify(obj.value, depth + 1)}`;
      }
    });

    return ['{', ...lines, `${bracketIndent}}`].join('\n');
  };

  return iter(value, 1);
};

export default stylish;
