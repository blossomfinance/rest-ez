## [1.5.0](https://github.com/matmar10/rest-ez/compare/v1.4.0...v1.5.0) (2021-11-10)


### Features

* allow passing arguments to inline & module functions ([e195791](https://github.com/matmar10/rest-ez/commit/e1957919e463c70b26958fa02cfa5500d87a244c)), closes [#8](https://github.com/matmar10/rest-ez/issues/8)
* allow use of suite context & args inside loop ([c305b40](https://github.com/matmar10/rest-ez/commit/c305b409bfaf28d58ddc7cd74b7a63b4d26562f1))


### Bug Fixes

* handle relative paths to schemas ([45b3dfc](https://github.com/matmar10/rest-ez/commit/45b3dfcac215daaa404198c165f14c56c5ab34ae)), closes [#5](https://github.com/matmar10/rest-ez/issues/5)


### Continuous Integration

* fix incorrect set up script for running test API ([2bac8f7](https://github.com/matmar10/rest-ez/commit/2bac8f7c7f009ac923f26838e35815a20d76d98c))
* make package scripts more consistent ([bb232cc](https://github.com/matmar10/rest-ez/commit/bb232cc9cf228ff71bdfb2cac71508b171f02d25))
* privately scope to avoid npm similar name rejection ([2fd4c78](https://github.com/matmar10/rest-ez/commit/2fd4c78ee156a43cc11d4b5220e98a15b66fc5a7))


### Tests

* adjust expected duration of test ([fff8354](https://github.com/matmar10/rest-ez/commit/fff835480613a57c7599b7bd026e202a572f9117))


### Documentation

* add logo & credits ([3a7ba73](https://github.com/matmar10/rest-ez/commit/3a7ba736b1f48f4c8a6a0641e4dd6e3a590a4629))
* move logo image ([8db6625](https://github.com/matmar10/rest-ez/commit/8db6625f27ff9ebacaffdac0ba6fff3758ce67a7))
* update README to reflect gulp deprecation ([21b8b05](https://github.com/matmar10/rest-ez/commit/21b8b05d6575b45878bfa9959d6f1291def95830))
* use @codedoc/cli to generate new docs ([8f992af](https://github.com/matmar10/rest-ez/commit/8f992af486fb2115837dffbb0f0f757546308b29))

## [1.4.0](https://github.com/matmar10/just-api/compare/v1.3.1...v1.4.0) (2021-09-30)


### Features

* allow passing arguments to inline & module functions ([af14285](https://github.com/matmar10/just-api/commit/af14285eea47ffe8588eaf154e9d95144f54afa0)), closes [#8](https://github.com/matmar10/just-api/issues/8)


### Bug Fixes

* handle relative paths to schemas ([26e0452](https://github.com/matmar10/just-api/commit/26e04527f5bb3b2847328887a3cc584778368c68)), closes [#5](https://github.com/matmar10/just-api/issues/5)
* update test cases to handle new json schema resolution ([1579352](https://github.com/matmar10/just-api/commit/15793525da571d85255d1098f442f16df3b70b0b)), closes [#4](https://github.com/matmar10/just-api/issues/4)

### [1.3.1](https://github.com/matmar10/just-api/compare/v1.3.0...v1.3.1) (2021-09-19)


### Bug Fixes

* properly de-reference $ref inline within specified sub-schema ([88f6e70](https://github.com/matmar10/just-api/commit/88f6e7095e5274ab50251f3db95a12ca00198095))

## [1.3.0](https://github.com/matmar10/just-api/compare/v1.2.8...v1.3.0) (2021-09-19)


### Features

* validate json body from compound schema, dereference $refs, & allow specifying json pointer witin file ([de518ee](https://github.com/matmar10/just-api/commit/de518ee4ef1aee0a43f1bc9ed3ed2823e2893a6a))

### [1.2.8](https://github.com/matmar10/just-api/compare/v1.2.7...v1.2.8) (2021-08-08)


### Continuous Integration

* deprecate gulp ([c703848](https://github.com/matmar10/just-api/commit/c7038482a1f7d8f9c103f3c5e36bf8dd263794d7)), closes [kiranz/just-api#40](https://github.com/kiranz/just-api/issues/40)
* ignore temp build directory ([e3513f0](https://github.com/matmar10/just-api/commit/e3513f0fa2a7d6d3e62192e4b131bbdda868f86c)), closes [kiranz/just-api#40](https://github.com/kiranz/just-api/issues/40)


### Tests

* ignore generated lockfile from installed json-server test API ([0df890c](https://github.com/matmar10/just-api/commit/0df890c761be34c969396b4613c90d0861950590))
* install mock test server data during server setup ([ab5b0c3](https://github.com/matmar10/just-api/commit/ab5b0c396c1d36d4c302665a836cf4603fedb7a9)), closes [kiranz/just-api#30](https://github.com/kiranz/just-api/issues/30)
* update server API to eliminate deprecation warnings ([7f79f4f](https://github.com/matmar10/just-api/commit/7f79f4fe4b9fa1d227fe80461ffa722a6e25dca9))

### [1.2.7](https://github.com/matmar10/just-api/compare/v1.2.6...v1.2.7) (2021-08-07)

### [1.2.6](https://github.com/matmar10/just-api/compare/v1.2.5...v1.2.6) (2021-08-06)


### Documentation

* add conventional commit plugin for release-it ([06d4eea](https://github.com/matmar10/just-api/commit/06d4eea58389a804df3229d60ecd6a7d910a4bf0))
* add release command ([b1191a2](https://github.com/matmar10/just-api/commit/b1191a271c0a9499f6bd2c2a9d2ca6769b78e3c7))

### [1.2.5](https://github.com/matmar10/just-api/compare/v1.2.5...v1.2.6) (2019-08-24)

### [1.2.4](https://github.com/matmar10/just-api/compare/v1.2.5...v1.2.6) (2018-12-21)

### [1.2.3](https://github.com/matmar10/just-api/compare/v1.2.5...v1.2.6) (2018-12-21)

### [1.2.2](https://github.com/matmar10/just-api/compare/v1.2.5...v1.2.6) (2018-10-20)

### [1.2.1](https://github.com/matmar10/just-api/compare/v1.2.5...v1.2.6) (2018-10-20)

## [1.2.0](https://github.com/matmar10/just-api/compare/v1.2.5...v1.2.6) (2018-08-26)

### [1.1.3](https://github.com/matmar10/just-api/compare/v1.2.5...v1.2.6) (2018-08-02)

### [1.1.2](https://github.com/matmar10/just-api/compare/v1.2.5...v1.2.6) (2018-08-01)

### [1.1.1](https://github.com/matmar10/just-api/compare/v1.2.5...v1.2.6) (2018-07-02)

## [1.1.0](https://github.com/matmar10/just-api/compare/v1.2.5...v1.2.6) (2018-06-26)

### [1.0.9](https://github.com/matmar10/just-api/compare/v1.2.5...v1.2.6) (2018-06-24)

### [1.0.8](https://github.com/matmar10/just-api/compare/v1.2.5...v1.2.6) (2018-06-23)

### [1.0.7](https://github.com/matmar10/just-api/compare/v1.2.5...v1.2.6) (2018-06-21)

### [1.0.6](https://github.com/matmar10/just-api/compare/v1.2.5...v1.2.6) (2018-06-18)

