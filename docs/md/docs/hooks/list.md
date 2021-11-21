# Types of Hooks

Any hooks below can be written using the 3 supported ways of writing JS:

- [JS Inline Functions](/docs/hooks/types#js-inline-functions)
- [JS Async Inline Functions](/docs/hooks/types#js-async-inline-functions)
- [JS Modules](/docs/hooks/types#js-modules)

<br><br>

## Suite-Level Hooks

These hooks are specified at the suite-level.

<br><br>

### before_all

This runs **once**,  _before all_ of the specs will run.

This is a good place to set up test data or other data pre-requisites.

**`this` keyword provides access to:**

- `suite`

```yaml
before_all:

meta:
  name: Star Wars suite
configuration:
  scheme: https
  host: swapi.dev
  base_path: /api
/*!*/before_all:
/*!*/  run_type: module
/*!*/  module:
/*!*/    module_path: 'lib/faker.js'
/*!*/    method_name: generateRandomUser

specs:
  # ...
```

<br><br>

### after_all

This runs **once**, _after all_ of the specs have run.

**`this` keyword provides access to:**

- `suite`

```yaml
meta:
  name: Star Wars suite
configuration:
  scheme: https
  host: swapi.dev
  base_path: /api

/*!*/after_all:
/*!*/  run_type: module
/*!*/  module:
/*!*/    module_path: 'lib/faker.js'
/*!*/    method_name: generateRandomUser

specs:
  # ...
```

<br><br>

### before_each

This runs **{n} times**, _before each_ of the specs.

> 💡 You can save add previously saved authentication info to `this.test`, such as a bearer auth token or cookies for use in subsequent specs.

**`this` keyword provides access to:**

- `suite`
- `test`

```yaml
meta:
  name: Star Wars suite
configuration:
  scheme: https
  host: swapi.dev
  base_path: /api

/*!*/after_each:
/*!*/  run_type: inline
/*!*/  inline:
/*!*/    function: !!js/function >
/*!*/      function () {
/*!*/        this.test.headers = { 'Authorization': `Bearer ${this.suite.token}` };
/*!*/      }
specs:
  # ...
```

<br><br>

### after_each

This runs **{n} times**, _after each_ of the specs.

> 💡 You can save returned authentication info to `this.suite`, such as a bearer auth token or cookies for use in subsequent tests.

**`this` keyword provides access to:**

- `suite`
- `test`
- `response`

```yaml
meta:
  name: Star Wars suite
configuration:
  scheme: https
  host: swapi.dev
  base_path: /api

/*!*/after_each:
/*!*/  run_type: inline
/*!*/  inline:
/*!*/    function: !!js/function >
/*!*/      function () {
/*!*/        if (this.response.headers['Authorization']) {
/*!*/          this.suite.token = this.response.headers['Authorization'];
/*!*/        }
/*!*/      }
specs:
  # ...
```
<br><br>

## Spec-Level Hooks

<br><br>

### before_test

This runs **once**, _before_ the spec which it is specified.

**`this` keyword provides access to:**

- `suite`
- `test`

> 💡 You can modified any aspect of the spec via `this.test`.

<br>

```yaml
meta:
  name: Star Wars suite
configuration:
  scheme: https
  host: swapi.dev
  base_path: /api

specs:
  - name: Get some user
    request:
      path: /people/{userId}/  # <--- runs random {n} times with random ID between 1 to 100
      method: get
/*!*/    before_test:
/*!*/      run_type: inline
/*!*/      inline:
/*!*/        function: !!js/function >
/*!*/          function () {
/*!*/            this.path_params = { userId: 24 };
/*!*/          }
    response:
      status_code: 200
  # GET request to URL: https://swapi.dev/api/people/42/
```

<br>

> ⚠️ NOTE: the above format for headers, cookies, path_prams, & query_params using a simple:
>   `{key: 'value'}`
>
> This is unlike normal spec definition uses:
>   `[{ name: 'name', value: 'value'}]`
>
> This will be fixed in future versions for consistency.

<br><br>

### after_test

This runs **once**, _after_ the spec which it is specified.

**`this` keyword provides access to:**

- `suite`
- `test`
- `response`

> 💡 You can save any aspect of the spec response to `this.suite` to access in subsequent specs.

<br>

```yaml
meta:
  name: Star Wars suite
configuration:
  scheme: https
  host: swapi.dev
  base_path: /api

specs:
  - name: Get some user
    request:
      path: /people/1/  # <--- runs random {n} times with random ID between 1 to 100
      method: get
/*!*/    after_test:
/*!*/      run_type: inline
/*!*/      inline:
/*!*/        function: !!js/function >
/*!*/          function () {
/*!*/            this.suite.person = JSON.parse(this.response.body);
/*!*/          }
    response:
      status_code: 200
```

<br>

> ⚠️ NOTE: as above, specifying `this.test` for headers, cookies, path_prams, & query_params uses a plain key/value set as an object, and **DOES NOT** use the same [{ name: 'name', value: 'value'}] format used when specifying in yaml. This will be fixed in future versions for consistency.

<br><br>
