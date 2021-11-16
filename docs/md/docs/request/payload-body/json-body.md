# JSON Body

Send JSON by specifying `type: json` and the `content` property.

> ⚠️ Note: when using `type: json` you **MUST** send the header `content-type: application/json`

```yaml
  - name: create a new user
    request:
      path: /users
      method: post
      headers:
        - name: content-type
          value: application/json
      payload:
        body:
          type: json
          content:
            firstName: john
            lastName: doe
    response:
      status_code: 201
```

**See also:**

- [Example: Suite with JSON Body](https://github.com/blossomfinance/rest-ez/blob/3f7b2f4fe69e77b4faaeefcf20ec0aa98863af51/test/cli/src/suites/jsondata.suite.yml)
- [File Uploads](/docs/request/file-uploads)

<br><br>

> :ToCPrevNext