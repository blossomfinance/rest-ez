# Spec Meta Section

## name

- Type: **string** _required_
- Default: `null`

Give a name that describes the suite (e.g: "New User registration")

## locate_files_relative

- Type: **boolean** _optional_
- Default: `false`

Locate specified files relative to this suite file's path. 

If `false`, locates files relative to Node process's current working directory.

If `true`, locates files relative to the suite's path.


> ⚠️ Note: applies to every file path in the suite

Note: 

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


> :ToCPrevNext