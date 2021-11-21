# JSON Schema File

Validate the response body using an external JSON Schema file.

Both **JSON** and **YAML** files are supported.

> NOTE: All $refs are dynamically de-referenced automatically, both locally and remotely.

## Root Schema

Use an external file from the root-level schema.

```yaml
  - name: get users
    request:
      path: /users
      method: get
    response:
      json_schema:
        type: file
        $ref: static/schemas/users.json # path to the expected schema file
```

<br><br>

## Sub-Property

Validate against some sub-property within a schema file by using a [JSON Pointer](https://rapidjson.org/md_doc_pointer.html) in the `$ref`

> 💡 HINT: this is very useful if you already have an Open API / Swagger spec since

```yaml
  - name: get users
    request:
      path: /users
      method: get
    response:
      json_schema:
        type: file
        # uses property $.components.schemas.users
        # within file 'static/schemas/open-api.json'
        $ref: 'static/schemas/open-api.yml#/components/schemas/users'
```

> 💡 NOTE: paths containing a forward slash can be URL-encoded as %2F

<br><br>

**See also:**

- [Example: JSON Schema Body Validation](https://github.com/matmar10/rest-ez/blob/master/test/cli/src/suites/jsonschema.suite.yml))
- [Using Swagger / Open API](/docs/response-validation/body/swagger-open-api)
- [JSON Schema Spec](http://json-schema.org/)
- [JSON Pointer](https://rapidjson.org/md_doc_pointer.html)

<br><br>

> :ToCPrevNext