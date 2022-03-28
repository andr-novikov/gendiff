import _ from 'lodash';

const stringify = (value, replacer = ' ', spacesCount = 4) => {
  const iter = (currentValue, depth) => {
    if (!_.isObject(currentValue)) {
      return `${currentValue}`;
    }

    const indentSize = depth * spacesCount;
    const currentIndent = replacer.repeat(indentSize - 2);
    const bracketIndent = replacer.repeat(indentSize - spacesCount);
    const map = { added: '+ ', removed: '- ', unchanged: '  ' };

    const linesObj = (!_.isPlainObject(currentValue)) ? '' : Object
      .entries(currentValue)
      .map(([key, val]) => `${currentIndent}  ${key}: ${iter(val, depth + 1)}`);

    const linesChild = (_.isPlainObject(currentValue)) ? '' : currentValue.map((obj) => {
      if (obj.status === 'updated') {
        const str1 = `${currentIndent}- ${obj.key}: ${iter(obj.oldValue, depth + 1)}`;
        const str2 = `${currentIndent}+ ${obj.key}: ${iter(obj.newValue, depth + 1)}`;
        return [str1, str2].join('\n');
      }
      const str = `${currentIndent}${map[obj.status]}${obj.key}: `;

      if (obj.children) {
        const children = iter(obj.children, depth + 1);
        return `${str}${children}`;
      }

      const valueObj = iter(obj.value, depth + 1);
      return `${str}${valueObj}`;
    });

    return [
      '{',
      ...linesObj,
      ...linesChild,
      `${bracketIndent}}`,
    ].join('\n');
  };

  return iter(value, 1);
};

export default stringify;
