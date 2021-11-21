# Command Line Interface (CLI)

Basic usage:

```bash
rest-ez [options] <path(s)>
```

Invoke `rest-ez` from command-line:

```bash
./node_modules/.bin/rest-ez
> {white Test Suite path/pattern/directory is not specified, Looking for suites in specs directory}
> {white No test suites found}
```

By default REST-EZ looks for specs in the `specs/` folder

<br><br>

- [Debugging](#debugging)
- [Running Suites in Parallel](#running-suites-in-parallel)
- [Options](/docs/cli/options)
- [Reporters](/docs/cli/reporters)

## Debugging

You can optionally log all info about failed requests using `--reporter-options logRequests`.

Log all failed requests in an **HTML** report:

```bash
./node_modules/.bin/rest-ez --reporter html --reporter-options logRequests
```

Log all failed requests in a **JSON** report:

```bash
./node_modules/.bin/rest-ez --reporter json --reporter-options logRequests
```

> ⚠️ Currently, use of `logRequests` option only works with a `reporter` specified, as the example above.

<br><br>

## Running Suites in Parallel

When you have lots of test suites, it might take a while to execute all of them serially.

To reduce the test execution time, REST-EZ is built with parallelism. You can invoke rest-ez with `--parallel` option to trigger parallel execution mode.
All reporters respect parallel mode and generate correct reports with properly mapped errors if any.

This is how you can execute suites in parallel with rest-ez

```bash
./node_modules/.bin/rest-ez --parallel 8
```

Above command will start test execution in parallel mode with 8 suites at a time.

> ⚠️ NOTE: maximum number of suites supported in parallel is 24

<br><br>
