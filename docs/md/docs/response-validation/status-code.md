## Status Code Validation

- Type: **integer** _optional_

Ensure the HTTP status code matches what is expected.

Test will fail when actual response's status code does not match with specified value.

```yaml
  - name: get users
    request:
      path: /users
      method: get
    response:
      status_code: 400
```

<br><br>