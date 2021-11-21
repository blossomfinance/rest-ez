# Validation Overview

- [General Assertions](#general-assertions)
    - [Exact Value](#exact-value)
    - [Regular Expression](#regular-expression)
    - [Custom Validator](#custom-validator)
        - [Inline JS Function](#inline-js-function)
        - [JS Module](#js-module)
- [Status Code](/docs/response-validation/status-code)
- [Cookies](/docs/response-validation/cookies)
- [Headers](/docs/response-validation/headers)
- [Body Validation](/docs/response-balidation/body/overview)
    - [JSON Path](/docs/response-validation/body/json-path)
    - [JSON Schema Inline](/docs/response-validation/body/json-schema-inline)
    - [JSON Schema File](/docs/response-validation/body/json-schema-file)
    - [Swagger / Open API](/docs/response-validation/body/swagger-open-api)


<br><br>

## General Assertions

These assertions work similary for cookies & headers.

**See also:**

- [Examples: Header Validation](https://github.com/matmar10/rest-ez/blob/master/test/cli/src/suites/headers.suite.yaml)
- [Examples: Cookie Validation](https://github.com/matmar10/rest-ez/blob/master/test/cli/src/suites/cookies.suite.yml)

<br><br>

### Exact Value

Assert some property matches an exact literal value.

```yaml
  - name: get users
    request:
      path: /users
      method: get
    response:
      headers:
        - name: content-type
          value: application/json
      cookies:
        - name: x-xsrf-token
          value: 4f3b2209-3b75-4a8a-bd10-d0b8f02a9c07
```

<br><br>

### Regular Expression

Assert some property matches a regular expression.

```yaml
  - name: get users
    request:
      path: /users
      method: get
    response:
      headers:
        - name: content-type
          value: !!js/regexp /json/
      cookies:
        - name: x-xsrf-token
          value: !!js/regexp /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/
```

<br><br>

### Custom Validator

Write custom code to do your own assertions.

Functions context is bound to the spec context, so `this.response` has all the relevant properties.

**Properties:**

- `response.body`
- `response.statusCode`
- `response.statusMessage`
- `response.headers`
- `response.body`
- `response.duration`

<br><br>

#### Inline JS Function

```yaml
  - name: get users
    request:
      path: /users
      method: get
    response:
      status_code: 200
      custom_validator:
        run_type: inline
        inline:
          function: !!js/function >
            function() {
              var users = JSON.parse(this.response.body);
              if (!users.length) {
                throw new Error('no users found');
              }
              if (users[0].firstName !== 'john') {
                throw new Error('first user in list is not john');
              }
              if (this.response.duration > 2000) {
                throw new Error('request took longer than expected');
              }
            }
```

<br><br>

#### JS Module

```yaml
  - name: get users
    request:
      path: /users
      method: get
    response:
      status_code: 200
      custom_validator:
        run_type: module
        module:
          module_path: lib/helpers/path-to-a-file.js
          function_name: validateUsersList
```

<br><br>
