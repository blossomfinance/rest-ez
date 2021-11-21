# CLI Reference

Invoke `rest-ez` from command-line:

```bash
./node_modules/.bin/rest-ez
> {white Test Suite path/pattern/directory is not specified, Looking for suites in specs directory}
> {white No test suites found}
```

By default REST-EZ looks for specs in the `specs/` folder

## Options

```bash
./node_modules/bin/rest-ez --help
>
> {white Usage: just-api <options> <files>}
>
>
> {white Options:}
>
> {white -V, --version                          output the version number}
> {white --parallel <integer>                   specify the number of suites to be run in parallel}
> {white --reporter <reporternames>             specify the reporters to use, comma separated list e.g json,html}
> {white --reporter-options <k=v,k2=v2,...>     reporter-specific options}
> {white --grep <pattern>                       only run tests matching <pattern>}
> {white --recursive                            include sub directories when searching for suites}
> {white --reporters                            display available reporters}
> {white -h, --help                             output usage information}
>
```
