> :DarkLight
> > :InLight
> >
> > ![REST-EZ](./docs/images/logo.png "REST-EZ Logo")
>
> > :InDark
> >
> > ![REST-EZ](./docs/images/logo-dark.png "REST-EZ Logo Dark")

## Overview

### What is it?

REST-EZ is a **declarative**, **specification based** test framework for `REST` & `GraphQL` APIs.

Users can test APIs without writing code, but they can also tap into code when they want to. It reads API test specification from YAML files and runs them in serial/parallel mode.

Test reports can be generated in several formats including HTML and JSON.

### How does it work?


**Build a test suite by providing a set of request and response validation specification in a YAML file.**

Each suite can have one or more specs. REST-EZ builds the request, sends it to server and validates response as per the specification.

Choose to validate any or all of following

- Status code
- Headers
- Cookies
- Response JSON body
- Response JSON schema

_or Provide a custom Javascript function to validate the response_

## Documentation

- [Getting Started](/docs/getting-started)
- [Basic Concepts](/docs/basic-concepts)
- [CLI](/docs/cli)
- [Features](/docs/features)
- [Reporters](/docs/reporters)
- [Examples](/docs/examples)

## Acknowledgements

Enormous thanks to [Kiran Mandadi](https://github.com/kiranz), the original creator of the [rest-ez](https://kiranz.github.io/rest-ez/) project form which this project is heavily based (forked).

## Roadmap & TODO

- [x] Full support for de-referencing schema $refs
- [x] Allow specifying node within a schema file using JSON pointer
- [x] Pass arguments to inline or module-based functions to allow creater re-use
- [ ] Documentation improvements
    - [ ] Example function with arguments usage
    - [ ] JSON schema validation de-referencing schema $refs
    - [ ] Specify node within a schema file using JSON path
    - [ ] Example of how to use faker.js using reusable function
- [ ] Code Quality - add linter/hinter/prettier or whatever spec is used

> :ToCPrevNext
