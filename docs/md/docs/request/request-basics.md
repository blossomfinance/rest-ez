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