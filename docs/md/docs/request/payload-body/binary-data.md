# Binary Data

Send binary data by specifying a file path.

> ⚠️ Note: when using `type: binary` you **MUST** send an appropriate mime type header, such as `content-type: image/png`, `content-type: image/jpeg`, etc.

```yaml
  - name: post binary data (file) as body
    request:
      path: /profile-photo
      method: post
      headers:
        - name: content-type
          value: image/png
      payload:
        body:
          type: binary
          content: static/assets/image.png # <-- the image path
    response:
      status_code: 200
```

> ⚠️ Note: the image path should be relative to Node process's current working directory.
>
> 💡 To use a path relative to suite's path use the [locate_files_relative option](/docs/basics/meta#locate_files_relative) in the [suite meta section](/docs/basics/meta)

**See also:** [Example: Binary Data](https://github.com/blossomfinance/rest-ez/blob/3f7b2f4fe69e77b4faaeefcf20ec0aa98863af51/test/cli/src/suites/suite.relative.paths.suite.yml)

> :ToCPrevNext