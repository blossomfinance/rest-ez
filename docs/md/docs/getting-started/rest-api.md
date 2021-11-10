# REST API Spec

Specs consistent of three basic sections:

- [Meta](/docs/spec-sections/meta) - Metadata about the spec
- [Configuration](/docs/spec-sections/config) - Basics of where the request should point. Note that config can be [dynamic using functions](/docs/using-js-functions/config)
- [Specs](/docs/spec-sections/specs) - An array of requests to run & resonse validations to perform against those requests

<br><br>

## Creating a Spec

Create a new spec under the `specs/` folder:

```yaml | specs/graphql-service.yml
meta:
  name: Star Wars suite
configuration:
  scheme: https
  host: swapi.dev
  base_path: /api
specs:
  - name: Fetch info about Luke Skywalker
    request:
      path: /people/1/
      method: get
      accept: application/json
    response:
      status_code: 200
      headers:
        - name: content-type
          value: !!js/regexp application/json
      json_data:
        - path: $.name
          value: Luke Skywalker
```

<br><br>

## Running the Spec

Run the spec from the terminal:

```bash
./node_modules/.bin/rest-ez
> {white Test Suite path/pattern/directory is not specified, Looking for suites in specs directory}
> {white Found suites:}
> {white     - specs/graphql-service.yml}
> 
> {white Launcher will run suites: specs/graphql-service.yml}
> 
> {greenBright      ✓ Fetch info about Luke Skywalker (649ms)}
> 
> {greenBright   Done: specs/graphql-service.yml (Passed)}
> 
> {cyanBright 0 skipped,} {redBright 0 failed,} {greenBright 1 passing} {white (1 tests)}
> {cyanBright 0 skipped,} {redBright 0 failed,} {greenBright 1 passing} {white (1 suites)}
> {white Duration: 667ms}
```

> :ToCPrevNext
