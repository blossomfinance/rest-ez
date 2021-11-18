# Yaml Anchors & Pointers

Yaml itself has powerful features built-in to allow re-use of defined data.

The `&` defines a named anchor and `*` references it.

**See also:** [Yaml Anchors Explained](https://dev.to/efrat19/the-billion-laughs-attack-yaml-anchors-explained-3767)

```yaml
meta:
  name: star wars api using yaml anchors
configuration:
  scheme: http
  host: swapi.dev
specs:
  - name: fetch person 1
    request: &starwars_person_request
      path: /api/people/{personId}/
      method: get
    response: &starwars_person_response
      status_code: 200
      json_schema:
        type: inline
        $ref: >
          {
            "type": "object",
            "properties": {
              "films": {
                "type": "array",
                "items": {
                  "type": "string"
                }
              }
            },
            "required": ["films"]
          }
    before_test:
      run_type: inline
      inline:
        function: !!js/function >
          function() {
            this.test.path_params = { personId: 1};
          }
    after_test: &log_body
      run_type: inline
      inline:
        function: !!js/function >
          function() {
            console.log(this.response.body);
          }

  - name: fetch person 2
    request: *starwars_person_request
    response: *starwars_person_response
    before_test:
      run_type: inline
      inline:
        function: !!js/function >
          function() {
            this.test.path_params = { personId: 2};
          }
    after_test: *log_body

```

> :ToCPrevNext
