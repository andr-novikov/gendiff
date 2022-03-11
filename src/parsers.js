import yaml from 'js-yaml';

export default (content, format) => {
  if (format === '.yml' || format === '.yaml') {
    return yaml.load(content);
  }
  return JSON.parse(content);
};
