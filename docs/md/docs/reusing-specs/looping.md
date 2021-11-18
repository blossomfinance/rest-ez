# Looping

You can use the loop construct to loop through a list of items, each item generating a test.

When the `loop` property is specified, that spec will be run once for each item provided with the `this.loopItem` available in the lifecycle hooks (`before_test` and `after_test`).

The list of items can be specified in spec beforehand or you can specify a custom JS function which returns a list of items.

## Static Loop

Here's how a static loop is specified, `type` is static and loop list is mapped to `static` field as list of items.

```yaml | specs/star-wars-static-loop.yml
meta:
  name: Star Wars static loop
configuration:
  scheme: https
  host: swapi.dev
specs:
  - name: fetch each character
    loop:
      type: static
      static:
        - 1 # Luke Skywalker
        - 4 # Darth Vader
    before_test:
      run_type: inline
      inline:
        function: !!js/function >
          function() {
            this.test.path_params = { userId : this.loopItem };
          }
    request:
      path: /api/people/{userId}/  # <--- runs twice: once as "/api/people/1/" and once as "/api/people/4"
      method: get
    response:
      status_code: 200
      json_data:
        - path: $.gender
          value: male
```

**See also:** [Example: Suite Using Loops](https://github.com/blossomfinance/rest-ez/blob/3f7b2f4fe69e77b4faaeefcf20ec0aa98863af51/test/cli/src/suites/loop.suite.yml)

<br><br>

## Dynamic Loop Using JS

Here's how a static loop is specified, `type` is static and loop list is mapped to `static` field as list of items.

```yaml | specs/star-wars-dynamic-loop.yml
meta:
  name: Star Wars dynamic loop
configuration:
  scheme: https
  host: swapi.dev
specs:
  - name: fetch each character
    loop:
      type: dynamic
      dynamic:
        run_type: inline
        inline:
          function: !!js/function  >
            function() {
              var generatePositiveInt = (max) => {
                return Math.floor(Math.random() * max) + 1;
              };
              var runTimes = generatePositiveInt(10);
              var items = [];
              while (items.length < runTimes) {
                items.push(generatePositiveInt());
              }
              return runTimes;
            }
    before_test:
      run_type: inline
      inline:
        function: !!js/function >
          function() {
            this.test.path_params = { userId : this.loopItem };
          }
    request:
      path: /api/people/{userId}/  # <--- runs random {n} times with random ID between 1 to 100
      method: get
    response:
      status_code: 200
```

**See also:** [Example: Suite Using Loops](https://github.com/blossomfinance/rest-ez/blob/3f7b2f4fe69e77b4faaeefcf20ec0aa98863af51/test/cli/src/suites/loop.suite.yml)

<br><br>

## Accessing Suite

Your dynamic loop can also utilize existing data saved on the `this.suite` context:

```yaml | star-wars-suite-w-previous-data.yml
meta:
  name: Star Wars dynamic suite with previous data
configuration:
  scheme: https
  host: swapi.dev
specs:
  - name: fetch a movie
    request:
      path: /api/films/1/
      method: get
    after_test:
      run_type: inline
      inline:
        function: !!js/function >
          function () {
            const film = JSON.parse(this.response.body);
            this.suite.characters = film.characters;
          }
    response:
      status_code: 200
  - name: fetch each character for the first film
    loop:
      type: dynamic
      dynamic:
        run_type: inline
        inline:
          # transform the list of URLs into a list of IDs
          function: !!js/function  >
            function() {
              return this.suite.characters.map((url) => {
                var matches = url.match(/\/api\/people\/(\d+)\//);
                return matches[1];
              });
            }
    before_test:
      run_type: inline
      inline:
        function: !!js/function >
          function() {
            this.test.path_params = { userId : this.loopItem };
          }
    request:
      path: /api/people/{userId}/
      method: get
    response:
      status_code: 200
    after_test:
      run_type: inline
      inline:
        function: !!js/function >
          function() {
            var character = JSON.parse(this.response.body);
            console.log(character);
          }
```

<br><br>


> :ToCPrevNext