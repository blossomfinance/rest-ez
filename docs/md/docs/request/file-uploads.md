# File Uploads

File uploads are supported using the `form_data` property.

 > ⚠️ Note: when using the `form_data` property with URL encoded data, you **MUST ALSO** send header `content-type: multipart/form-data`

```yaml
  - name: post multipart form data - single file & two text fields
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

> ⚠️ Note: the file path should be relative to Node process's current working directory.
>
> 💡 To use a path relative to suite's path use the [locate_files_relative option](/docs/basics/meta#locate_files_relative) in the [suite meta section](/docs/basics/meta)

**See also:**

- [File Uploads](/docs/request/file-uploads)
- [Example: Multipart Form Data](https://github.com/matmar10/rest-ez/blob/master/test/cli/src/suites/multipartformpost.suite.yml)

<br><br>

> :ToCPrevNext