# Multi-Part Form Data

To send multi-part form data, use the `form_data` property. This is also how to [send file uploads](/docs/request/-file-uploads)

> ⚠️ Note: when using the `form_data` property with URL encoded data, you **MUST ALSO** send header `content-type: multipart/form-data`

```yaml
  - name: post multipart form data - single file and field
    request:
      path: /register
      method: post
      headers:
        - name: content-type
          value: multipart/form-data
      payload:
        form_data:
          - name: dob
            type: text
            content: '1980-01-04'
          - name: email
            type: text
            content: person@company.com
          - name: photo-id-file
            type: file
            content: static/assets/example-id-card.png
    response:
      status_code: 200
```

**See also:**

- [File Uploads](/docs/request/file-uploads)
- [Example: Multipart Form Data](https://github.com/matmar10/rest-ez/blob/master/test/cli/src/suites/multipartformpost.suite.yml)

> :ToCPrevNext