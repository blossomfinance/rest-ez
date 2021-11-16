# Spec Meta Section

Optional section providing info related to the entire suite

> ⚠️ Note: applies to every file path in the suite

```yaml | example-spec.yml
meta:
  name: Make sure Google loads
  locate_files_relative: true
configuration:
  host: www.google.com
  scheme: https
specs:
  - name: Fetch Google homepage
    request:
      method: get
      path: /
    response:
      status_code: 200
```

<br><br>

## name

- Type: **string** _required_
- Default: `null`

Give a name that describes the suite (e.g: "New User registration")

## enabled

- Type: **boolean** __optional__
- Default: `true`
- Values: `true`, `false`

Enable/disable whether this suite should be run.

**See also:** [Example: Disabled Suite](https://github.com/blossomfinance/rest-ez/blob/master/test/cli/src/suites/disabledsuite.suite.yml)

## locate_files_relative

- Type: **boolean** _optional_
- Default: `false`
- Values: `true`, `false`

Locate specified files relative to this suite file's path.

If `false`, locates files relative to Node process's current working directory.

If `true`, locates files relative to the suite's path.

**See also:** [Example: Relative Intersuite Dependencies](https://github.com/blossomfinance/rest-ez/blob/3f7b2f4fe69e77b4faaeefcf20ec0aa98863af51/test/cli/src/suites/suitedependencies/relative.intersuite.dep.suite.yml)

> :ToCPrevNext