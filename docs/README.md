# Sudoo-Abacus

[![Continuous Integration](https://github.com/SudoDotDog/Sudoo-Abacus/actions/workflows/ci.yml/badge.svg)](https://github.com/SudoDotDog/Sudoo-Abacus/actions/workflows/ci.yml)
[![codecov](https://codecov.io/gh/SudoDotDog/Sudoo-Abacus/branch/master/graph/badge.svg)](https://codecov.io/gh/SudoDotDog/Sudoo-Abacus)
[![npm version](https://badge.fury.io/js/%40sudoo%2Fabacus.svg)](https://www.npmjs.com/package/@sudoo/abacus)
[![downloads](https://img.shields.io/npm/dm/@sudoo/abacus.svg)](https://www.npmjs.com/package/@sudoo/abacus)

Simple calculate for js

## Install

```sh
yarn add @sudoo/abacus
# Or
npm install @sudoo/abacus --save
```

## Usage

Abacus calculation using it's own parser.

```ts
import { Abacus } from "@sudoo/abacus";

const abacus: Abacus = Abacus.fromExpression('5 + ( ( 1 + 2 ) * 4 ) - 3');
abacus.calculate(); // 14
```

More usage example is working in progress, see source code for more details.
