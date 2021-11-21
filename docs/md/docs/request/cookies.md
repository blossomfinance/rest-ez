# Request Cookies

Optionally specify a list of cookies to be sent with the request. These will be sent as distinct Cookie headers (as per the HTTP spec).

- Type: **array** _optional_

## Basic Example

```yaml
configuration:
  host: api.mycompany.com
  scheme: https
  base_path: /api
specs:
  - request:
      method: get
      path: /account
      headers:
        - name: Accept
          value: application/json
      cookies:
        - name: XSRF-Token
          value: 399do284kds32odh28
    response:
      status_code: 200
```

**See also:** [Example: Suite Using Cookies](https://github.com/blossomfinance/rest-ez/blob/3f7b2f4fe69e77b4faaeefcf20ec0aa98863af51/test/cli/src/suites/cookies.suite.yml)

<br><br>

## Dynamically Set Cookies

Dynamic cookies can be added by setting `cookies` as an object to the `this.test` context:

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
                 this.test.cookies = {cookie1: 'cookie1-value'}
            }
    request:
      path: /echoCookies
      method: get
    response:
      status_code: 200
      json_data:
        - path: $.cookie1
          value: cookie1-value
```

**See also:** [Example: Suite Using Cookies](https://github.com/blossomfinance/rest-ez/blob/3f7b2f4fe69e77b4faaeefcf20ec0aa98863af51/test/cli/src/suites/cookies.suite.yml)

<br><br>

> :ToCPrevNext