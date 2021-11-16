# JSON Schema Inline Validation

You can write inline schemas to validate the response body.

```yaml
  - name: update user
    request:
      path: /user
      method: put
    response:
      json_schema:
        type: inline
        $ref: >
          {
            "type": "object",
            "properties": {
              "dob": {
                "type": "string",
                "format": "date-time"
              }
            },
            "required": "dob"
          }
```

**See also:**

- [Example: Inline JSON Schema Validation](https://github.com/matmar10/rest-ez/blob/master/test/cli/src/suites/jsonschema.suite.yml)
- [Using Swagger / Open API](/docs/response-validation/body/swagger-open-api)
- [JSON Schema Spec](http://json-schema.org/)

<br><br>

> :ToCPrevNext