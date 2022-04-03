![REST-EZ](https://github.com/blossomfinance/rest-ez/blob/master/docs/images/logo.png?raw=true "REST-EZ Logo")

## What is it?

REST-EZ is a **declarative**, **spec based** test framework for `REST` & `GraphQL` APIs.

You can test APIs without writing code, but can also write code when needed. REST-EZ reads API test specs from YAML files and can runs them serially or in parallel.

Test reports can be generated in several formats including HTML and JSON.

## How does it work?

**Build a test suite by providing a set of request and response validation specification in a YAML file.**

Each suite can have one or more specs. REST-EZ builds the request, sends it to server and validates response as per the specification.

Choose to validate any or all of following

- Status code
- Headers
- Cookies
- Response JSON body
- Response JSON schema

_or Provide a custom Javascript function to validate the response_

[Read the docs to learn more](https://blossomfinance.github.io/rest-ez/)


## Links

- [Documentation](https://blossomfinance.github.io/rest-ez/)
- [Issue Tracker](https://github.com/blossomfinance/rest-ez/issues)


## Getting Started

>To run just-api, you will need Node.js v10.x.x or newer.

### Installation
```sh
$ npm install rest-ez --save-dev
```

Following is a simple example showing usage of REST-EZ.

```sh
$ mkdir specs
$ vim specs/starwars-service.yml
```

Write following suite in your editor

```yaml
meta:
  name: Star Wars suite
configuration:
  scheme: https
  host: swapi.co
  base_path: /api
specs:
  - name: get Luke Skywalker info
    request:
      path: /people/1/
      method: get
    response:
      status_code: 200
      headers:
        - name: content-type
          value: !!js/regexp application/json
      json_data:
        - path: $.name
          value: Luke Skywalker
```

Back in the terminal

```sh
$ ./node_modules/.bin/just-api

   ✓ get Luke Skywalker info (1216ms)

  Done: specs/starwars-service.yml (Passed)

0 skipped, 0 failed, 1 passed (1 tests)
0 skipped, 0 failed, 1 passed (1 suites)
Duration: 1.3s
```

### Testing GraphQL APIs

Following example tests a GraphQL API that returns Person info for a given name.

Create a YAML suite and run just-api.

```yaml
meta:
  name: GraphQL Starwars service
configuration:
  host: swapi.graph.cool
  scheme: https
specs:
  - name: Get Details of a character
    request:
      method: post
      headers:
        - name: content-type
          value: application/json
      payload:
        body:
          type: json
          content:
            query: >
             {
              Person(name: "Luke Skywalker") {
                name,
                id,
                gender
               }
              }
            variables: null
            operationName: null
    response:
      status_code: 200
      json_data:
        - path: $.data.Person.name
          value: Luke Skywalker
```

### A chained request flow with hook and custom validation

When you need to test complex chained API flows, run dependencies in hooks to fetch pre-requisite data
and pass it to actual test.

Following example shows how to run dependencies using a hook, get data and validating response with a custom validator function.

```yaml
meta:
  name: Starwars suite
configuration:
  scheme: https
  host: swapi.co
  base_path: /api
specs:
  - name: get R2-D2 info
    request:
      path: /people/3/
      method: get
    response:
      status_code: 200
      json_data:
        - path: $.name
          value: R2-D2

  - name: search R2-D2 info
    before_test:
      run_type: inline
      inline:
        function: !js/asyncFunction >
          async function() {
            var response = await this.runSpec('get R2-D2 info');
            var jsonData = JSON.parse(response.body);
            this.test.query_params = { name:  jsonData.name };
          }
    request:
      path: /people
      method: get
    response:
      status_code: 200
      custom_validator:
        run_type: inline
        inline:
          function: !!js/function >
            function() {
              var jsonData = JSON.parse(this.response.body);
              var r2d2 = jsonData.results.find(result => result.name === 'R2-D2');
              if (!r2d2)
                throw new Error('R2-D2 not returned in search results');
            }
```

Note: You can also place custom JS functions in a module and specify the function name, module path in YAML to import.

More advanced stuff can be done with REST-EZ. Documentation says it all.
Take a look at [REST-EZ Website](http://blossomfinance.github.io/rest-ez/) for detailed documentation.


## Maintainers

[Matthew J. Martin](matthew.mar10@blossomfinance.com)

## License

[MIT-licensed](https://github.com/blossomfinance/rest-ez/blob/master/LICENSE)

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
- [ ] ~~Documentation improvements~~
    - ✅ ~~Upgrade markdown static site generator (something without python dependency)~~
    - ✅ ~~Example function with arguments usage~~
    - ✅ ~~JSON schema validation de-referencing schema $refs~~
    - ✅ ~~Specify node within a schema file using JSON path~~
    - [ ] Examples directly using files within _node\_modules_
- [ ] Reporter improvements & enhancements
    - ✅ ~~TAP (test anything protocol) support~~
    - [ ] JSON output to console or file option
    - [ ] Clearly document reporter options in CLI
- [ ] Replace commander with yargs for improved CLI docs & defaults
- [ ] Example of how to use faker.js using reusable function
- [ ] Code Quality - add linter/hinter/prettier or whatever spec is used
- [ ] Update to use ECMA6 modules & deprecate Babel (possibly TypeScript?)


## Contributing

### Running Tests

1. Install deps `npm install`
3. Install & run test API `npm run test-api`
5. (In a new window) run tests `npm test`

### Releasing

`npm run release`

This command should automatically:

1. Determine next release version from conventional commit history
2. Update the CHANGELOG.md
3. Rev package.json, commit, & tag, etc.
4. Publish to npm
5. Create a Github release

### Testing

Tests have two components

- **JS chai/mocha tests** about the sample suite/specs in `test/cli/[suite].spec.js`
- **REST-EZ suites/specs** in `test/cli/src/suites/[suite].spec.yaml`

You will likely need to create/modify both a **REST-EZ suites/specs`**
and also the accompanying **JS chai/mocha tests** to add test coverage.


## Features

Mostly here for SEO purposes:

- Runs test suites in parallel/serial mode
- Supports all widely used HTTP methods
- Supports x-www-form-urlencoded requests, Multipart requests, File uploads
- Built-in Response Validation Constructs (Headers, Cookies, Status code, JSON body, JSON schema)
- Custom Response validator functions
- Supports running custom inline or module javascript sync/async functions
- Supports Hooks (Before All, After All, Before Each, After Each, Before Test, After Test)
- Custom suite configuration
- Chained Request flows
- Define/override Request path, query params, path params, headers, body at runtime
- Suite and test context for reuse
- Supports importing specs from one or more test suites
- Intrasuite and Intersuite spec dependencies
- Reusing test specification
- Retry failed tests
- Looping: Generate 'n' number of tests with a list
- Built-in HTML, JSON reporters
- Can generate reports in multiple formats for the same run
- Logging HTTP request/response data for failed tests
- Proper error reporting
- Can run tests matching with a given pattern/string
- Skipping tests with specification
- Disable or Enable redirections
- Reports test duration
- Allows user to plug-in custom reporters
