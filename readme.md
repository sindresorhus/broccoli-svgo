# [broccoli](https://github.com/joliss/broccoli)-svgo

> Minify SVG using [SVGO](https://github.com/svg/svgo)

*Issues with the output should be reported on the SVGO [issue tracker](https://github.com/svg/svgo/issues).*


## Install

```sh
npm install --save-dev broccoli-svgo
```


## Usage

```js
const SVO = require('broccoli-svgo');
tree = new SVO(tree, options);
```


## API

### SVGO(tree, [options])

#### options

[Options](https://github.com/sindresorhus/grunt-svgmin#available-optionsplugins) are passed to `SVGO`.


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
