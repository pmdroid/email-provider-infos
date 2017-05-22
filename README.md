# email-provider-infos
[![CircleCI](https://circleci.com/gh/pmdroid/email-provider-infos.svg?style=svg)](https://circleci.com/gh/pmdroid/email-provider-infos)
[![codecov](https://codecov.io/gh/pmdroid/email-provider-infos/branch/master/graph/badge.svg)](https://codecov.io/gh/pmdroid/email-provider-infos)

- currently are ony the 10 most popular email domain are supported
- feel free to open a pull request to add more

## Install

```sh
npm install --save email-provider-infos
```

## Usage
See [docs](./DOC.md)
```js
const emaild = require('email-provider-infos');
const inbox = emaild.getInbox('someemail@gmail.com');
```
