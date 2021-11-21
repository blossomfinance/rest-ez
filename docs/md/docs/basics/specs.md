# Specs Section

Required section that provides a list of individual HTTP requests to run.

- Type: **array** _required_
- Example: (see below)

> ⚠️ Note: at least one spec is required for the suite to be valid.

```yaml | specs/star-wars-service.yml
meta:
  name: Star Wars suite
configuration:
  scheme: https
  host: swapi.dev
  base_path: /api
/*!*/specs:
/*!*/  - name: Fetch info about Luke Skywalker
/*!*/    request:
/*!*/      path: /people/1/
/*!*/      method: get
/*!*/      accept: application/json
/*!*/    response:
/*!*/      status_code: 200
/*!*/      headers:
/*!*/        - name: content-type
/*!*/          value: !!js/regexp application/json
/*!*/      json_data:
/*!*/        - path: $.name
/*!*/          value: Luke Skywalker
/*!*/    after_test:
/*!*/      run_type: inline
/*!*/      inline:
/*!*/        function: !!js/function >
/*!*/          function() {
/*!*/            this.suite.person = JSON.parse(this.response.body);
/*!*/          }
/*!*/  - name: Fetch each movie that Luke Skywalker is in
/*!*/    loop:
/*!*/      type: dynamic
/*!*/      dynamic:
/*!*/        run_type: inline
/*!*/        inline:
/*!*/          function: !!js/function  >
/*!*/            function() {
/*!*/              return this.suite.person.films;
/*!*/            }
/*!*/    before_test:
/*!*/      run_type: inline
/*!*/      inline:
/*!*/        function: !!js/function >
/*!*/          function() {
/*!*/            this.test.path_params = {
/*!*/              id : this.loopItem.match(/\/api\/films\/(\d+)\//)[1]
/*!*/            };
/*!*/          }
/*!*/    request:
/*!*/      path: /films/{id}/
/*!*/      method: get
/*!*/      accept: application/json
/*!*/    response:
/*!*/      status_code: 200
```

**See also:**

- [Using Hooks Overview](/docs/hooks/overview)
- [Looping](/docs/reusing-specs/looping)
- [Examples](https://github.com/blossomfinance/rest-ez/tree/master/test/cli/src/suites)
- [Specs Property JSON Schema](https://github.com/blossomfinance/rest-ez/blob/master/lib/schema/yaml/suite.json)

<br><br>

## Retry

Use the `retry` spec level property to automatically retry the spec. Example use case is polling a job until in completed state after a while.

### count

- Type: **integer** _required_
- Example: `2`

How many times to retry this spec.

### wait_before_each

- Type: **integer** _optional_
- Example: `10`
- Values: `http`, `https`

Number of milliseconds (ms) between retry attempts.

```yaml
  - request:
      path: /status
      method: get
    retry:
      count: 3
      wait_before_each: 10
    response:
      status_code: 200
```

> :ToCPrevNext