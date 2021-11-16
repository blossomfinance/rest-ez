# Request Path Parameters

Modify the URL by specifying parameters to plug into the path, either hard-coded or dynamically.

- Type: **array** _required_

## Basic Example

```yaml
configuration:
  host: api.mycompany.com
  scheme: https
  base_path: /api
specs:
  - request:
      path: /users/{userId}/addresses/{addressId}
      method: get
      path_params:
      - name: userId
        value: 4
      - name: addressId
        value: 1
    response:
      status_code: 200
# GET https://api.mycompany.com/users/4/addresses/1
```

**See also:** [Example: Suite Using Query Params](https://github.com/blossomfinance/rest-ez/blob/3f7b2f4fe69e77b4faaeefcf20ec0aa98863af51/test/cli/src/suites/params.suite.yml)

<br><br>

## Dynamically Set Query Parameters

Dynamic query params can be added by setting `path_params` as an object to the `this.test` context:

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
            this.test.path_params = {
              userId: 4,
              addressId: 1
            };
          }
    request:
      path: /users/{userId}/addresses/{addressId}
      method: get
    response:
      status_code: 200
# GET https://api.mycompany.com/users/4/addresses/1
```

**See also:** [Overview of Hooks](/docs/hooks/overview)

<br><br>

> :ToCPrevNext