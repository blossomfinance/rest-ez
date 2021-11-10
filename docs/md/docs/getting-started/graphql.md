# GraphQL Spec

## Creating a Spec

Create a new spec under the `specs/` folder:

```yaml | specs/graphql-service.yml
meta:
  name: GraphQL location service
configuration:
  host: graphql.contentful.com
  scheme: https
  base_path: /content/v1
specs:
  - name: Get list of Lesson collections
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

<br><br>

## Run the Spec

Run the spec from the terminal:

```bash
./node_modules/.bin/rest-ez
> {white Test Suite path/pattern/directory is not specified, Looking for suites in specs directory}
> {white Found suites:}
> {white     - specs/graphql-service.yml}
> 
> {white Launcher will run suites: specs/graphql-service.yml}
> 
> {greenBright      ✓ Get list of Lesson collections (649ms)}
> 
> {greenBright   Done: specs/graphql-service.yml (Passed)}
> 
> {cyanBright 0 skipped,} {redBright 0 failed,} {greenBright 1 passing} {white (1 tests)}
> {cyanBright 0 skipped,} {redBright 0 failed,} {greenBright 1 passing} {white (1 suites)}
> {white Duration: 667ms}
```

> :ToCPrevNext
