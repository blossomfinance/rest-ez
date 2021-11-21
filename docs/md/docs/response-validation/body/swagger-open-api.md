# Swagger & Open API

If you already have an Open API / swagger defined, you can use it to validate actual responses.

Both **JSON** and **YAML** files are supported.

> ⚠️ NOTE: All **$ref** are dynamically de-referenced automatically, those both local AND remote.

<br><br>

> :Tabs
> > :Tab title=REST-EZ Suite
> >
> > ```yaml | specs/example-spec.yml
> >   - name: get users
> >     request:
> >       path: /users
> >       method: get
> >     response:
> >       json_schema:
> >         type: file
> >         # note the use of %2F to escape the "application/json" part of the path
> >         $ref: 'docs/paths/register.yml#/post/responses/200/content/application%2Fjson/schema'
> > ```
>
> > :Tab title=JSON Schema (Yaml)
> > ```yaml | docs/paths/register.yml
> > post:
> >   responses:
> >     '200':
> >       content:
> >         application/json:
> >           schema:
> >             type: object
> >             properties:
> >               dob:
> >                 type: string
> >                 format: date-time
> >             required: [ dob ]
> > ```

<br>

> 💡 NOTE: paths containing a forward slash can be URL-encoded as %2F

<br><br>

**See also:**

- [Example: JSON Schema Body Validation](https://github.com/matmar10/rest-ez/blob/master/test/cli/src/suites/jsonschema.suite.yml))
- [Using Swagger / Open API](/docs/response-validation/body/swagger-open-api)
- [JSON Schema Spec](http://json-schema.org/)
- [JSON Pointer](https://rapidjson.org/md_doc_pointer.html)

<br><br>

> :ToCPrevNext