# Function Types

REST-EZ supports three ways of writing custom JS:

- [JS Inline Functions](#js-synchronous-functions)
- [JS Inline Async Functions](#js-async-functions)
- [JS From External Files](#js-from-external-files)

These types have access to different [Context](/docs/hooks/context)

<br><br>

## Inline Functions

REST-EZ utilizes the following special yaml types to enable the use of JS functions:

- `!!js/function` an syncronous JS function
- `!js/asyncFunction` an asynchronous JS function

<br><br>

### JS Synchronous Functions

Basic usage:

```yaml
# basic function (synchronous)
run_type: inline
inline:
  function: !!js/function >
    function () {
      // ...
    }
```

<br>

Use the `arguments` property to pass an array of arguments:

```yaml
# basic function (synchronous)
run_type: inline
inline:
  arguments:
    - Kiran Mandadi
  function: !!js/function >
    function (name) {
      console.log(`Hello, ${name}.`);
    }

```

<br><br>

### JS Async Functions

Basic usage:

```yaml
# async function
run_type: inline
inline:
  function: !js/asyncFunction >
    async function () {
      // return new Promise((resolve, reject) => { ... });
      // -- or --
      // return await doSomething();
    }
```

<br>

Use the `arguments` property to pass an array of arguments:

```yaml
# async function
run_type: inline
inline:
  arguments:
    - name: Matthew
      dob: 1984-03-02
  function: !js/asyncFunction >
    async function (options) {
      // return await doSomething(options.name, options.dob);
      // -- or --
      // return new Promise((resolve, reject) => { ... });
    }
```

<br><br>

> ⚠️ NOTE: using require or import inside inline function is not yet supported. Use the JS modules approach below:

<br><br>

## JS From External Files

You can run code from any external file:

> :Tabs
> > :Tab title=Yaml Suite File
> >
> > ```yaml | some-suite.yml
> > run_type: module
> > module:
> >   module_path: 'path/to/a/file.js'
> >   function_name: nameOfSomeFunction
> > ```
>
> > :Tab title=JS File
> >
> > ```js | path/to/a/file.js
> > module.exports = {
> >   someFunction: function () {
> >     // do something
> >   }
> > };
> > ```

<br>

Use the `arguments` property to pass an array of arguments:

> :Tabs
> > :Tab title=Yaml Suite File
> >
> > ```yaml | some-suite.yml
> > run_type: module
> > module:
> >   arguments:
> >     - Argument one is a string.
> >     - { name: 'Person', age: 72 }
> >     - [ 'argument', 3, 'is', an', 'array' ]
> >   module_path: 'path/to/a/file.js'
> >   function_name: nameOfSomeFunction
> > ```
>
> > :Tab title=JS File
> >
> > ```js | path/to/a/file.js
> > module.exports = {
> >   someFunction: function (arg1, arg2) {
> >     // do something
> >   }
> > };
> > ```

<br><br>