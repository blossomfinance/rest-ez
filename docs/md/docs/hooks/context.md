# Context

All types of functions include appropriate context bound to `this`:

- [Ssuite](#suite)
- [spec](#spec)
- [response](#response)

## Suite

Provides the full context of the suite.

> 💡 Chain requests by assigning data to `this.suite` to utilize in subsequent specs

**Available in:**

- `before_all`
- `after_all`
- `before_each`
- `after_each`
- `before_test`
- `after_test`

```yaml | get-user-addresses.yml
  - name: get user
    request:
      path: /user
      method: get
    before_test:
      run_type: module
      module:
        function: !!js/function >
          function () {
/*!*/            this.suite.user = JSON.parse(this.response.body);
          }
  - name: get addresses
    request:
      path: /users/{userId}/addresses
      method: get
    after_test:
      run_type: module
      module:
        function: !!js/function >
          function () {
/*!*/            const { id } = this.suite.user;
/*!*/            this.suite.path_params = { userId: id };
          }
```

<br><br>

## Test

Provides the full context of the test (spec). Modify its properties on a `before_*` hook to change the spec request.

> 💡 Chain requests by utilizing data previously saved to `this.suite` to modify the spec.

**Available in:**

- `before_each`
- `after_each`
- `before_test`
- `after_test`

```yaml | get-user-addresses.yml
  - name: get user
    request:
      path: /user
      method: get
    before_test:
      run_type: module
      module:
        function: !!js/function >
          function () {
/*!*/            this.suite.user = JSON.parse(this.response.body);
          }
  - name: get addresses
    request:
      path: /users/{userId}/addresses
      method: get
    after_test:
      run_type: module
      module:
        function: !!js/function >
          function () {
/*!*/            const { id } = this.suite.user;
/*!*/            this.suite.path_params = { userId: id };
          }
```

<br><br>

## Response

Provides full information about the response of this spec.

**Available in:**

- `after_each`
- `after_test`

```yaml | get-user-addresses.yml
  - name: get user
    request:
      path: /user
      method: get
    before_test:
      run_type: module
      module:
        function: !!js/function >
          function () {
/*!*/            this.suite.user = JSON.parse(this.response.body);
          }
```

<br><br>