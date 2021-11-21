# Request Additional Options

## followRedirect

- Type: **boolean** _optional_
- Values: `true`, `false`
- Default: `true`

If enabled, follow HTTP 3xx responses as redirects.

```yaml
  - request:
      path: /home
      method: get
      additional_options:
        followRedirect: false
    response:
      status_code: 200
```

<br><br>

## followAllRedirects

- Type: **boolean** _optional_
- Values: `true`, `false`
- Default: `false`

If enabled, follow non-GET HTTP 3xx responses as redirects.

```yaml
  - request:
      path: /home
      method: get
      additional_options:
        followRedirect: true
        followAllRedirects: true
    response:
      status_code: 200
```

<br><br>

## followOriginalHttpMethod

- Type: **boolean** _optional_
- Values: `true`, `false`
- Default: `false`

If enabled, redirect to the original HTTP method.

If disabled (by default), redirects to the original HTTP method.

```yaml
  - request:
      path: /home
      method: get
      additional_options:
        followRedirect: true
        followOriginalHttpMethod: true
    response:
      status_code: 200
```

<br><br>

## encoding

- Type: **string** _optional_
- Examples: `utf8`, `null`
- Default: `utf8`

Encoding to be used on setEncoding of response data.

If `null`, the body is returned as a raw Buffer.

If specified, passed as encoding parameter of `Buffer.toString()`.

> ⚠️ Note: if expecting binary data, use `encoding: null` to get the raw Buffer

```yaml
  - request:
      path: /files/some-file.png
      method: get
      additional_options:
        encoding: null
    response:
      status_code: 200
```

<br><br>

## gzip

- Type: **boolean** _optional_
- Values: `true`, `false`

If enabled, adds an `Accept-Encoding` header to request compressed content encodings from the server (if not already present).

**Also decodes supported content encodings in the response.**

```yaml
  - request:
      path: /home
      method: get
      additional_options:
        gzip: true
    response:
      status_code: 200
```

<br><br>

> :ToCPrevNext