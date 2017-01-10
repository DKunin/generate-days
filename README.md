# Generate days

> Simple module to generate days of the month

NB: Currently there is an error, counting week number for january, will fix soon

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Contribute](#contribute)
- [License](#license)

## Install

```
npm i generate-days
```

## Usage

```
import generateDays from 'generate-days';

// Month is zero based

const january = generateDays(0, 2017);

console.log(january);
//  [
//      { dayIndex: 6, weekIndex: 1, date: '1-1-2017' },
//      ...
//      { dayIndex: 1, weekIndex: 5, date: '31-1-2017' }
//  ]

```

## Contribute

PRs accepted.

## License

MIT © Dmitri Kunin
