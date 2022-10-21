# Simple-Frontend-Logger
Want to save logs during frontend web development in a file? Just use logger.log() and get logs in .log / .txt / .json format

[![Version npm](https://img.shields.io/npm/v/simple-frontend-logger.svg?style=flat-square)](https://www.npmjs.com/package/simple-frontend-logger)

[![NPM](https://nodei.co/npm/simple-frontend-logger.png?downloads=true&downloadRank=true)](https://nodei.co/npm/simple-frontend-logger/)

## Usage

``` js
const logger = require('simple-frontend-logger');
logger.level = 2;
logger.fileFormat = 'JSON';

logger.log(0, "This is an error message");
logger.log(1, "This is a warn message");
logger.log(2, "This is an info message");
logger.log(3, "This is a debug message");

logger.error("This is an error message");
logger.warn("This is a warn message");
logger.info("This is an info message");
logger.debug("This is a debug message");

```

## Logging

Logging levels in `simple-frontend-logger` is assumed to be numerically **ascending**
from most important to least important._

``` js
const levels = {
  error: 0,
  warn: 1,
  info: 2,
  debug: 3
};
```

A logger accepts the following parameters:

| Name          | Default                     |  Description    |
| ------------- | --------------------------- | --------------- |
| `level`       | `3`                    | Log only if log level of message is less than or equal to this level  |
| `_save_logs_key`      | `q` | Press Ctrl+q to save logs on your machine            |
| `_console_logs_key`      | `b`       | Press Ctrl+b to log all logs on your console           |
| `_clear_logs_key`  | `m`     | Press Ctrl+b to clear all logs                  |
| `fileFormat` | `SIMPLE`                      | Logs are saved in .txt in simple format, `LOG` and `JSON` format are also available |


## Installation

``` bash
npm install simple-frontend-logger
```

``` bash
yarn add simple-frontend-logger
```

#### Author: Tejas Vaij
