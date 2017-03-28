# vitormalencar.com :atom_symbol:


## Features

* Offline Caching (via `serviceWorker`)
* SASS & Autoprefixer
* Asset Versioning (aka "cache-busting")
* ES2015 (ES6) and ES2016 (ES7) support
* Webpack Bundle Analysis (see [dashboard](#dashboard))
* Hot Module Replacement (HMR) for all files
* Preact's [Developer Tools](#preact-developer-tools)
* [Lighthouse](https://github.com/GoogleChrome/lighthouse) certified
  ![lightouse](src/static/img/lighthouse.jpg)

## Development

### Commands

#### build

```
$ yarn build
```

Compiles all files. Output is sent to the `dist` directory.

#### start

```
$ yarn start
```

Runs your application (from the `dist` directory) in the browser.

#### dev

```
$ yarn dev
```

Like [`start`](#start), but will auto-compile & auto-reload the server after any file changes within the `src` directory.

#### Deploy to GH-PAGES

```
$ yarn deploy
```

MIT © [Vitor Alencar](https://vitormalencar.com)
