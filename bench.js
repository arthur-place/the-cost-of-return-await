//@ts-check

const Benny = require('benny');
const fs = require('fs');

const allTargets = fs.readdirSync('./dist');

Benny.suite(
  'Return await tests',

  ...allTargets.flatMap((target) => {
    const { doWait, dontWait, justReturn } = require(`./dist/${target}`);

    // Format name
    // babel.js -> Babel
    let name = target.replace('.js', '');
    name = name.charAt(0).toUpperCase() + name.slice(1);

    return [
      Benny.add(`${name}: Async return await`, () => doWait()),
      Benny.add(`${name}: Return await`, () => dontWait()),
      Benny.add(`${name}: Just return`, () => justReturn())
    ];
  }),

  Benny.cycle(),
  Benny.complete(),

  Benny.save({
    format: 'chart.html',
    file: 'result'
  })
);
