# Request Query Parameters

Update (or override) request query params.

- Type: **array** _required_

**See also:** [Example: Suite Using Query Params](https://github.com/blossomfinance/rest-ez/blob/3f7b2f4fe69e77b4faaeefcf20ec0aa98863af51/test/cli/src/suites/params.suite.yml)

## Basic Example

```yaml
configuration:
  host: api.mycompany.com
  scheme: https
  base_path: /api
specs:
  - request:
      path: /users
      method: get
      query_params:
      - name: firstName
        value: Matthew
    response:
      status_code: 200
# GET https://api.mycompany.com/users?firstName=Matthew
```

## Dynamically Set Query Parameters

Dynamic query params can be added by setting `query_params` as an object to the `this.test` context:

```yaml
configuration:
  host: api.mycompany.com
  scheme: https
  base_path: /api
specs:
  - before_test:
      run_type: inline
      inline:
        function: !!js/function >
          function () {
            this.test.query_params = {
              firstName: 'Matthew',
            };
          }
    request:
      path: /users
      method: get
    response:
      status_code: 200
# GET https://api.mycompany.com/users?firstName=Matthew
```

**See also:** [Overview of Hooks](/docs/hooks/overview)

> :ToCPrevNext