import { Command } from 'commander';
import genDiff from './genDiff.js';

const program = new Command();

export default () => {
  program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .option('-f, --format <type>', 'output format')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => {
    const diff = genDiff(filepath1, filepath2);
    console.log(diff);
  })
  .parse();
};
//const options = program.opts();