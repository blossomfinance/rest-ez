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

REST-EZ is a **declarative**, **specification based** test framework for HTTP (ex: REST & GraphQL) APIs. In short, you test APIs without writing code (_declarative_, not _procedural_).

### How does it work?

**YAML files define sets of requests & response validations**

Each **suite** can have one or more **specs**. For each **spec**, REST-EZ:

1. [Builds the request](/docs/request/request-basics)
2. Sends the request to the server
3. [Validates the response](/docs/response-validation/overview)

## Documentation

- [Installation](/docs/getting-started/installation)
- [Getting Started](/docs/getting-started/rest-api)
- [Basic Concepts](/docs/basics/overview)
- [Requests](/docs/request/request-basics)
    - [Headers](/docs/request/headers)
    - [Cookies](/docs/request/cookies)
    - [Query Parameters](/docs/request/query-parameters)
    - [Path Parameters](/docs/request/query-parameters)
    - **Request Body**
        - [JSON Body](/docs/request/payload-body/json-body)
        - [Binary Data](/docs/request/payload-body/binary-data)
        - [URL Encoded Form Data](/docs/request/payload-body/url-encoded-form-data)
        - [URL Encoded Form Data](/docs/request/payload-body/url-encoded-form-data)
        - [Multi-Part Form Data](/docs/request/payload-body/multi-part-form-data)
    - [File Uploads](/docs/request/file-uploads)
    - [Additional Options](/docs/request/additional-options)
- [Response Validation](/docs/response-validation/overview)
    - [Status Code Validation](/docs/response-validation/status-code)
    - [Cookie Validation](/docs/response-validation/cookies)
    - [Header Validation](/docs/response-validation/headers)
    - [Body Validation](/docs/response-balidation/body/overview)
        - [JSON Path](/docs/response-validation/body/json-path)
        - [JSON Schema Inline](/docs/response-validation/body/json-schema-inline)
        - [JSON Schema File](/docs/response-validation/body/json-schema-file)
        - [Swagger / Open API](/docs/response-validation/body/swagger-open-api)
- [Lifecycle Hooks](/docs/hooks/overview)
    - **Hook Types**
        - [JS Inline Functions](/docs/hooks/types#js-synchronous-functions)
        - [JS Async Inline Functions](/docs/hooks/types#js-async-functions)
        - [JS Modules](/docs/hooks/types#js-from-external-files)
    - **List of Hooks**
        - [before_all](/docs/hooks/list#before_all)
        - [after_all](/docs/hooks/list#after_all)
        - [before_each](/docs/hooks/list#before_each)
        - [after_each](/docs/hooks/list#after_each)
        - [before_test](/docs/hooks/list#before_test)
        - [after_test](/docs/hooks/list#after_test)
    - **Hook Context**
        - [Suite Context](/docs/hooks/context#suite)
        - [Test Context](/docs/hooks/context#test)
        - [Response Context](/docs/hooks/context#response)
- [Reusing Specs & DRY](/docs/reusing-specs/overview)
    - [Looping](/docs/reusing-specs/looping)
    - [Yaml Anchors](/docs/reusing-specs/yaml-anchors)
    - [Run Existing Spec](/docs/reusing-specs/run-spec-in-js)
- [Command Line Interface (CLI)](/docs/cli)
    - [Debugging](/docs/cli#debugging)
    - [Running Suites in Parallel](/docs/cli#running-suites-parallel)
    - [Reporters](/docs/cli#reporters)
    - [Options](/docs/cli#options)

## Acknowledgements

👏👏👏 **Enormous thanks to [Kiran Mandadi](https://github.com/kiranz)**,

Original creator of [rest-ez](https://kiranz.github.io/rest-ez/) upon which this project is based (forked).

👏👏👏 **Thanks to corporate sponsors**

- [Blossom Finance](https://blossomfinance.com/) ethical investments in micro businesses
- [LaunchGood](https://www.launchgood.com/) crowdfunding incredible Muslims

## Roadmap & TODO

- ✅ ~~Full support for de-referencing schema $refs~~
- ✅ ~~Allow specifying node within a schema file using JSON pointer~~
- ✅ ~~Pass arguments to inline or module-based functions to allow creater re-use~~~
- ✅ ~~Documentation improvements~~
    - ✅ ~~Upgrade markdown static site generator (something without python dependency)~~
    - ✅ ~~Example function with arguments usage~~
    - ✅ ~~JSON schema validation de-referencing schema $refs~~
    - ✅ ~~Specify node within a schema file using JSON path~~
    - [ ] Examples directly using files within _node\_modules_
- [ ] Example of how to use faker.js using reusable function
- [ ] Code Quality - add linter/hinter/prettier or whatever spec is used

> :ToCPrevNext
