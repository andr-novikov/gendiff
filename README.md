# Diff generator:
[![Actions Status](https://github.com/andr-novikov/gendiff/workflows/hexlet-check/badge.svg)](https://github.com/andr-novikov/gendiff/actions)
[![Node CI](https://github.com/andr-novikov/gendiff/actions/workflows/nodejs.yml/badge.svg)](https://github.com/andr-novikov/gendiff/actions/workflows/nodejs.yml)
[![Maintainability](https://api.codeclimate.com/v1/badges/d4596dd5b8dc7892536a/maintainability)](https://codeclimate.com/github/andr-novikov/gendiff/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/d4596dd5b8dc7892536a/test_coverage)](https://codeclimate.com/github/andr-novikov/gendiff/test_coverage)

---

**Gendiff** is a program with command-line interface (CLI) that compares two configuration files and shows a difference.

**Utility features:**
- Support for different input formats: yaml, json
- Generating a report in different formats: plain text, stylish and json
- The program can work with both relative and absolute paths to files

## Installation
```
$ git clone git@github.com:andr-novikov/frontend-project-lvl2.git
$ make install
$ npm link
```

## Help for the utility:
```
Usage: gendiff [options] <filepath1> <filepath2>

Compares two configuration files and shows a difference.

Options:
  -V, --version        output the version number
  -f, --format [type]  output format (default: "stylish")
  -h, --help           display help for command
```
## Demonstration
### Comparing files in stylish format
[![asciicast](https://asciinema.org/a/oF3TkF3VlpiTMPf9nwb5TwV34.svg)](https://asciinema.org/a/oF3TkF3VlpiTMPf9nwb5TwV34)

### Comparing files in plain format
[![asciicast](https://asciinema.org/a/YOKz2HSHEB9tLF4yRLwlruR5C.svg)](https://asciinema.org/a/YOKz2HSHEB9tLF4yRLwlruR5C)

### Comparing files in json format
[![asciicast](https://asciinema.org/a/wfZTwR3Qhjj86Gog6t8MayZxV.svg)](https://asciinema.org/a/wfZTwR3Qhjj86Gog6t8MayZxV)