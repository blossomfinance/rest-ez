# Request Headers

Optionally specify a list of headers to be added to the request.

- Type: **array** _optional_

**See also:** [Example: Suite Using Headers](https://github.com/blossomfinance/rest-ez/blob/3f7b2f4fe69e77b4faaeefcf20ec0aa98863af51/test/cli/src/suites/headers.suite.yaml)

## Basic Example

```yaml
configuration:
  host: swapi.dev
  scheme: https
  base_path: /api
specs:
  - request:
      method: get
      path: /films/1/
      headers:
        - name: Accept
          value: application/json
        - name: X-CustomHeader
          value: some-value
    response:
      status_code: 200
```

## Dynamically Set Headers

Dynamic headers can be added by setting `headers` as an object to the `this.test` context:

- Type: **object** _optional_

```yaml
configuration:
  scheme: http
  host: 127.0.0.1
  port: 3027
specs:
  - before_test:
      run_type: inline
      inline:
        function: !!js/function >
          function() {
            this.test.headers = { header2: 'header2-value' };
          }
    request:
      path: /echoHeaders
      method: get
      headers:
        - name: header1
          value: header1-value
    response:
      json_data:
        - path: "$.header2"
          value: "header2-value"
        - path: "$.header1"
          value: "header1-value"
```

**See also:** [Overview of Hooks](/docs/hooks/overview)

> :ToCPrevNext