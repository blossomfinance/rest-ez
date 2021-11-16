# Response Body Validation Overview

- [Exact Value](#exact-value)
- [JSON Path](#json-path)
    - [Exact Match](#exact-value)
    - [Regular Expression](#regular-expression)
- [JSON Schema Inline](/docs/response-validation/body/json-schema-inline)
- [JSON Schema File](/docs/response-validation/body/json-schema-file)
- [Swagger / Open API](/docs/response-validation/body/swagger-open-api)

<br><br>

## Exact Value

Check the response body exactly matches some value

```yaml
# TODO
```

<br><br>

## JSON Path

### Exact Value

Check the property at the specified path matches an exact value:

```yaml
  - name: get users
    request:
      path: /users
      method: get
    response:
      json_data:
        - path: $.[0].firstName
          value: john
```

<br><br>

### Regular Expression

Check for a regex match at the specified path:

```yaml
  - name: get users
    request:
      path: /users
      method: get
    response:
      json_data:
        - path: $.[0].zipcode
          value: !!js/regex /^\d{5}$/
```

**See also:** [Example: Validation of JSON Data](https://github.com/matmar10/rest-ez/blob/master/test/cli/src/suites/jsondata.suite.yml)

<br><br>
