## Installation

Install with [npm](https://npmjs.org):

``` bash
npm install --save dev rest-ez
```

<br>

> ⚠️ Requires node >=7.10

<hr>

## Getting Started

Create a file `specs/starwars-service.yml`

``` yaml
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

Run it from the terminal:

```bash
./node_modules/.bin/rest-ez
```

You should see:

```text
   ✓ get Luke Skywalker info (1216ms)

  Done: specs/starwars-service.yml (Passed)

0 skipped, 0 failed, 1 passed (1 tests)
0 skipped, 0 failed, 1 passed (1 suites)
Duration: 1.3s
```

### Testing GraphQL APIs

Following example tests a GraphQL API that returns location for a given ip address.

Create a new test suite `specs/graphql-service.yml`

```yaml

meta:
  name: GraphQL location service
configuration:
  host: graphql.contentful.com
  scheme: https
  base_path: /content/v1
specs:
  - name: Get Location of a given ip address
    request:
      method: post
      path: /spaces/f8bqpb154z8p/environments/master
      query_params:
        - name: access_token
          value: 9d5de88248563ebc0d2ad688d0473f56fcd31c600e419d6c8962f6aed0150599
      headers:
        - name: content-type
          value: application/json
      payload:
        body:
          type: json
          content:
            query: >
              {
                lessonCollection(where: {OR: [{title_contains: "content"}, {title_contains: "SDK"}]}) {
                  items {
                    title
                    slug
                  }
                }
              }
            variables: null
            operationName: null
    response:
      status_code: 200
      json_data:
        - path: $.data.lessonCollection.items[0].title
          value: Content model
        - path: $.data.lessonCollection.items[0].slug
          value: content-model

```

### Chained Request Flow Using Hook

Need to test complex chained API flows? Run dependencies in hooks to fetch pre-requisite data
and pass it to actual test:

```yaml
meta:
  name: Starwars suite
configuration:
  scheme: https
  host: swapi.dev
  base_path: /api
specs:
  - name: get R2-D2 info
    request:
      path: /people/3/
      method: get
    response:
      status_code: 200
      json_data:
        - path: $.name
          value: R2-D2

  - name: search R2-D2 info
    before_test:
      run_type: inline
      inline:
        function: !js/asyncFunction >
          async function() {
            var response = await this.runSpec('get R2-D2 info');
            var jsonData = JSON.parse(response.body);
            this.test.query_params = { name:  jsonData.name };
          }
    request:
      path: /people
      method: get
    response:
      status_code: 200
      custom_validator:
        run_type: inline
        inline:
          function: !!js/function >
            function() {
              var jsonData = JSON.parse(this.response.body);
              var r2d2 = jsonData.results.find(result => result.name === 'R2-D2');

              if (!r2d2) throw new Error('R2-D2 not returned in search results');
            }
```

> ℹ️ You can also place custom [JS functions in a module](using-js#module)
