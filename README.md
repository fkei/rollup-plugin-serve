# Rollup plugin to server the bundle

<a href="LICENSE">
  <img src="https://img.shields.io/badge/license-MIT-brightgreen.svg" alt="Software License" />
</a>
<a href="https://github.com/fkei/rollup-plugin-server/issues">
  <img src="https://img.shields.io/github/issues/fkei/rollup-plugin-server.svg" alt="Issues" />
</a>
<a href="http://standardjs.com/">
  <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg" alt="JavaScript Style Guide" />
</a>
<a href="https://npmjs.org/package/rollup-plugin-server">
  <img src="https://img.shields.io/npm/v/rollup-plugin-server.svg?style=flat-squar" alt="NPM" />
</a>
<a href="https://github.com/fkei/rollup-plugin-server/releases">
  <img src="https://img.shields.io/github/release/fkei/rollup-plugin-server.svg" alt="Latest Version" />
</a>


## forked from [thgh/rollup-plugin-serve](thgh/rollup-plugin-serve)


## Installation
```
npm install --save-dev rollup-plugin-server
```

## Usage
```js
// rollup.config.js
import server from 'rollup-plugin-server'

export default {
  entry: 'entry.js',
  dest: 'bundle.js',
  plugins: [
    server('dist')
  ]
  // ssl: true, // optional
}
```

### Options

By default it serves the current project folder. Change it by passing a string:
```js
server('public')    // will be used as contentBase

// Default options
server({
  // Launch in browser (default: false)
  open: true,

  // Show server address in console (default: true)
  verbose: false,

  // Folder to serve files from
  contentBase: '',

  // Multiple folders to serve from
  contentBase: ['dist', 'static'],

  // Set to true to return index.html instead of 404
  historyApiFallback: false,

  // Options used in setting up server
  host: 'localhost',
  port: 10001,
  
  ssl: true, // optional
  // @see https://nodejs.org/api/https.html#https_https_createserver_options_requestlistener
  ssl_key: fs.readFileSync('server.key'), // optional
  ssl_cert: fs.readFileSync('server.crt'), // optional
  //ssl_ciphers: ... // optional Intermediate compatibility (default) @see https://wiki.mozilla.org/Security/Server_Side_TLS

  // Any data can be set in the response header
  customResponseHeaders: {
    'X-PING': 'PONG',
    // ...
  }
})
```

## Test

HTTP

```
$ cd ./test
$ ../node_modules/.bin/rollup -c rollup.config.js
```
> Browser access : http://localhost:10001, http://localhost:10001/base1, http://localhost:10001/base2

HTTPS

```
$ cd ./test
$ ../node_modules/.bin/rollup -c rollup.config.ssh.js
```
> Browser access : https://localhost:10001, https://localhost:10001/base1, https://localhost:10001/base2

## Contributing

Contributions and feedback are very welcome.

To get it running:
  1. Clone the project.
  2. `npm install`
  3. `npm run build`

## Credits

- [Kei Funagayama](https://github.com/fkei)
- Fork source : [Thomas Ghysels](https://github.com/thgh)
- [All Contributors][link-contributors]

## License

The MIT License (MIT). Please see [License File](LICENSE) for more information.

[link-authors]: https://github.com/thgh, https://github.com/fkei
[link-contributors]: ../../contributors
[rollup-plugin-server]: https://www.npmjs.com/package/rollup-plugin-server
