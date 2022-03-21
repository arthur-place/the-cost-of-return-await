#!/bin/bash

build () {
  tsc index.js --target $1 --out dist/$1.js --allowJs
}

rm -rf dist

build es5 &
build es6 &
build es2017 &
babel index.js --out-file dist/babel.js &

wait