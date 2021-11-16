# Spec Config Section

Controls basics about where the endpoint lives (e.g. server, port).

These settings apply to all specs in an entire suite file.

```yaml
configuration:
  host: api.mycompany.com
  scheme: http
  port: 1337
  base_path: /api/v3
# http://api.mycompany.com:1337/api/v3
```

## scheme

- Type: **string** _required_
- Example: `https`
- Values: `http`, `https`

What protocol (scheme) to use. Generally, http or https

## host

- Type: **string** _required_
- Example: `localhost`

What server to use.

## port

- Type: **number** _optional_
- Example: `8080`

A custom port to use. Note that it must be a number.

## base_path

- Type: **string** _optional_
- Example: `/api`

An optional base path to prepend to each URL.

## custom_configuration

- Type: **JS Inline Function** | **JS Inline Async Function** | **JS Module** _optional_
- Example: (see below)

Dynamically set any of the configuration using either an inline or external JS function.

### JS Inline Function

**See also:**

- [Overview of Using JS Inline Functions](/docs/hooks/overview#js-inline-functions)
- [Example: Inline Sync Valid Suite Config](https://github.com/blossomfinance/rest-ez/blob/master/test/cli/src/suites/suiteconfig/inline.sync.valid.suite.yml)

```yaml
configuration:
  scheme: https
  port: 443
  base_path: /api
  custom_configuration:
    run_type: inline
    inline:
      function: !!js/function >
        function() {
          if (process.env.NODE_ENV === 'dev') {
            this.scheme = 'http';
            this.port = 1337;
            this.host = 'localhost;
            return;
          }
          this.host = `${process.env.NODE_ENV || 'www'}.yourcompany.com`;
        }
# NODE_ENV=dev --> http://localhost:1337/api
# NODE_ENV=qa --> https://qa.yourcompany.com/api
# NODE_ENV="" --> https://www.yourcompany.com/api
```

### JS Inline Async function

**See also:**

- [Overview of Using JS Inline Functions](/docs/hooks/overview#js-inline-functions)
- [Example: Inline Async Valid Suite Config](https://github.com/blossomfinance/rest-ez/blob/master/test/cli/src/suites/suiteconfig/inline.async.valid.suite.yml)

```yaml
configuration:
  host: yourcompany.com
  scheme: https
  port: 443
  base_path: /api
  custom_configuration:
    run_type: inline
    inline:
      function: !js/asyncFunction >
        async function() {
          this.scheme = 'http';
          this.port = 3027;
        }
# https//yourcompany.com:3027/api
```

### JS Module

**See also:**

- [Overview of Using JS Modules](/docs/hooks/overview#js-modules)
- [Example: Suite Relative Path Config](test/cli/src/suites/suite.relative.paths.suite.yml)

```yaml
configuration:
  host: yourcompany.com
  scheme: https
  port: 443
  base_path: /api
  custom_configuration:
    run_type: module
    module:
      module_path: config/test.js
      function_name: configureForEnv  # --> 'this'bound to suite object, e.g. this.host, this.port, etc.
```

> :ToCPrevNext