# Request Basics

Each spec must define a `request` that defines the HTTP request to be made

**Required properties:**

- [method](#method)
- [path](#path)

**Optional properties:**

- [headers](/docs/request/headers)
- [cookies](/docs/request/cookies)
- [path_params](/docs/request/path_params)
- [query_params](/docs/request/query_params)
- [payload](/docs/request/payload-body)
    - [JSON Body](/docs/request/payload-body/json-body)
    - [Binary Data](/docs/request/payload-body/binary-data)
    - [URL Encoded Form Data](/docs/request/payload-body/url-encoded-form-data)
    - [Multi-Part Form Data](/docs/request/payload-body/multi-part-form-data)
- [additional_options](/docs/request/additional-options)
    - [followRedirect](/docs/request/additional-options#followRedirect)
    - [followAllRedirects](/docs/request/additional-options#followAllRedirects)
    - [followOriginalHttpMethod](/docs/request/additional-options#followOriginalHttpMethod)
    - [encoding](/docs/request/additional-options#encoding)
    - [gzip](/docs/request/additional-options#gzip)

> ℹ️  NOTE: headers, cookies, path_params, query_params all use an array of objects with `name` and `value`

```yaml
- name: some-name-1
  value: Some Value
- name: other-name-2
  value: Other Value
```

## method

- Type: **string** _required_
- Values: `get`, `post`, `put`, `patch`, `delete`, `head`, `options`

## path:

- Type: **string** _required_

```yaml
configuration:
  host: swapi.dev
  scheme: https
  base_path: /api
specs:
  - request:
      method: get
      path: /films/1/
    response:
      status_code: 200
```

> :ToCPrevNext