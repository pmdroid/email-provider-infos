# emaild
[![CircleCI](https://circleci.com/gh/pmdroid/emaild.svg?style=svg)](https://circleci.com/gh/pmdroid/emaild)
[![codecov](https://codecov.io/gh/pmdroid/emaild/branch/master/graph/badge.svg)](https://codecov.io/gh/pmdroid/emaild)

- currently are ony the 10 most popular email domain are supported
- feel free to open a pull request to add more

## Install

```sh
npm install --save emaild
```

## Usage
See [docs](./DOC.md)
```js
const emaild = require('emaild');
const inbox = emaild.getInbox('someemail@gmail.com');
```
