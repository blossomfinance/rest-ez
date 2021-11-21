# Reporters

REST-EZ has several built-in reporters, `json`, `specs`, `html` etc.

When you need a HTML report, you can invoke rest-ez with the `--reporter` option

**Basic example:**

```bash
./node_modules/.bin/rest-ez --reporter html
```

**Advanced example:**

```bash
./node_modules/.bin/rest-ez --reporter html,json --reporter-options jsonReportDir=reports,jsonReportName=json-report,htmlReportDir=reports,htmlReportName=html-report,logRequests
```

<br><br>

## Multiple Formats

REST-EZ can generate reports in multiple formats.

When you need a HTML report and a JSON report too, you could do something like this

```bash
./node_modules/.bin/rest-ez --reporter html,json
```

This way you can generate reports in multiple formats for the same run.

<br><br>

## Reporter Options

REST-EZ accepts an additonal command line option `--reporter-options` that you can use to customize how and where reports are generated and saved.

You must pass a comma separated list of key and value pairs to this option as `k=v,k2=v2,...`

- [jsonReportDir](#jsonReportDir)
- [jsonReportName](#jsonReportName)
- [htmlReportDir](#htmlReportDir)
- [htmlReportName](#htmlReportName)
- [logRequests](#logRequests)

<br><br>

### jsonReportDir

- Type: **string** _optional_
- Example: `test-reports`
- Default: `[cwd]`

Provide an existing directory path that is relative to REST-EZ node process's cwd. JSON report will be saved to this directory.

```bash
./node_modules/.bin/rest-ez --reporter json --reporter-options jsonReportDir=test-reports
> # Outputs to: test-reports/report.json
```

<br><br>

### jsonReportName

- Type: **string** _optional_
- Example: `test-report.json`
- Default: `report.json`

Provide a name for the JSON report file. JSON report will be saved with this name.

```bash
./node_modules/.bin/rest-ez --reporter json --reporter-options jsonReportName=test-report.json
> # Outputs to: test-report.json
```

<br><br>

### htmlReportDir

- Type: **string** _optional_
- Example: `test-reports/`
- Default: `[cwd]`

Provide an existing directory path that is relative to REST-EZ node process's cwd. HTML report will be saved to this directory.

```bash
./node_modules/.bin/rest-ez --reporter json --reporter-options htmlReportDir=reports,htmlReportName=test-report.json
> # Outputs to: reports/test-report.json
```

<br><br>

### htmlReportName

- Type: **string** _optional_
- Example: `test-report.html`
- Default: `report.html`

Provide a name for the HTML report file. HTML report will be saved with this name.

```bash
./node_modules/.bin/rest-ez --reporter json --reporter-options htmlReportDir=html-reports,htmlReportName=latest-report.json
> # Outputs to: html-reports/latest-report.json
```

<br><br>

### logRequests

- Type: **boolean** _optional_
- Example: `true`
- Default: `false` (if not provided)

Tells REST-EZ to log HTTP request & response details in reports for failed tests. Omit this if you don't want to log details.

Log all failed requests in an **HTML** report:

```bash
./node_modules/.bin/rest-ez --reporter html --reporter-options logRequests
```

Log all failed requests in a **JSON** report:

```bash
./node_modules/.bin/rest-ez --reporter json --reporter-options logRequests
```

<br><br>

## Custom Reporters

You can write your own custom reporter.

**See also:** [REST-EZ Built-In JSON Reporter](https://github.com/blossomfinance/rest-ez/blob/master/lib/reporters/json.js)

Reporters are JS constructors. When instantiated, a reporter receives the test launcher object along with program options.

### Running Custom Reporter

**Using a node module by name:**

```bash
./node_modules/.bin/rest-ez --reporter html,custom-reporter-module-name
```

**Using a path to a file:**

```bash
./node_modules/.bin/rest-ez --reporter html,/absolute/path/to/js/file
```


### Events

REST-EZ emits events on launcher object and suite object, So a custom reporter should listen to these events and implement  reporting.

- **Launcher**
  - **start** Triggered **once** when the test run **begins**
  - **end** Triggered **once** when the test run **ends**
  - **new suite** Trigger **{n} times** at the **start** of each new suite
- **Suite**
  - **test fail** Triggered **{n} times** (once for each), **after** _failing_ spec within a suite
  - **test skip** Triggered **{n} times** (once for each), **after** _skipped_ spec within a suite
  - **end** Triggered **{n} times** (**once** per suite), **after** suite finishes

### Interface

```javascript
class Reporter {

  constructor(launcher, opts = {}) {

  }

  addSuite(suite) {

  }

  getSuite(location) {

  }
}
```

<br><br>