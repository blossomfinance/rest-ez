# URL Encoded Form Data

URL encoded form data (old school style) can be submitted using the `form` property.

> ⚠️ Note: when using the `form` property with URL encoded data, you **MUST ALSO** send header `content-type: application/x-www-form-urlencoded`

```yaml
  - name: Authenticate a user
    request:
      path: /authenticate
      method: post
      headers:
        - name: content-type
          value: application/x-www-form-urlencoded
      payload:
        form:
          userName: john.doe
          password: john.doe.password
    response:
      status_code: 200
```

**See also:** [Example: URL Encoded Form Post](https://github.com/matmar10/rest-ez/blob/master/test/cli/src/suites/urlencodeformpost.suite.yml)

> :ToCPrevNext