# Vectorious

[![NPM](https://nodei.co/npm/vectorious.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/vectorious/)

![travis](https://img.shields.io/travis/mateogianolio/vectorious.svg) [![code climate](https://codeclimate.com/github/mateogianolio/vectorious/badges/gpa.svg)](https://codeclimate.com/github/mateogianolio/vectorious) [![test coverage](https://codeclimate.com/github/mateogianolio/vectorious/badges/coverage.svg)](https://codeclimate.com/github/mateogianolio/vectorious/coverage)

Vectorious is a high performance linear algebra library. It is written in
JavaScript using [nblas](https://github.com/mateogianolio/nblas) for single- and double-precision C++ bindings to CBLAS. In the future the goal is to also include C++ bindings to LAPACK. With native fallbacks,
it can be used without the bindings in supported browsers.

```bash
$ npm install vectorious
$ npm test
$ npm run benchmark
```

**Browser**

Download a [release](https://github.com/mateogianolio/vectorious/releases) and use it like this:

```html
<script src="vectorious-4.0.0.js"></script>
<script>
  // e.g. var vector = new vectorious.Vector()
</script>
```

Or you can compile the release yourself by running `gulp javascript` in the repository root, which will generate a `vectorious-x.x.x.js`-file in the `dist` folder.

## [Documentation](https://github.com/mateogianolio/vectorious/wiki)

## [Benchmarks](https://github.com/mateogianolio/vectorious/wiki/Benchmarks)
