//@ts-check

const Benny = require('benny');
const fs = require('fs');

// All justReturns are exactly the same.
const { justReturn } = require('./dist/es2017');

const allTargets = fs.readdirSync('./dist');

Benny.suite(
  'Return await tests',

  ...allTargets.flatMap((target) => {
    const { doWait, dontWait } = require(`./dist/${target}`);

    // Format name
    // babel.js -> Babel
    let name = target.replace('.js', '');
    name = name.charAt(0).toUpperCase() + name.slice(1);

    return [
      Benny.add(`${name}: async () => await work()`, () => doWait()),
      Benny.add(`${name}: () => await work()`, () => dontWait())
    ];
  }),

  // All justReturns are exactly the same.
  Benny.add('() => work()', () => justReturn()),

  Benny.cycle(),
  Benny.complete(),

  Benny.save({
    folder: './results',
    format: 'chart.html',
    file: 'result'
  }),
  Benny.save({
    folder: './results',
    format: 'csv',
    file: 'result'
  })
);
