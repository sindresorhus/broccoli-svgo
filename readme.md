# [broccoli](https://github.com/joliss/broccoli)-svgo [![Build Status](https://travis-ci.org/sindresorhus/broccoli-svgo.png?branch=master)](https://travis-ci.org/sindresorhus/broccoli-svgo)

> Minimize SVG using [SVGO](https://github.com/svg/svgo)


## Install

```
npm install --save broccoli-svgo
```


## Example

```js
var svgo = require('broccoli-svgo');
tree = svgo(tree, options);
```


## API

### svgo(tree, options)

#### options

[Options](https://github.com/sindresorhus/grunt-svgmin#available-optionsplugins) are passed to SVGO.


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
