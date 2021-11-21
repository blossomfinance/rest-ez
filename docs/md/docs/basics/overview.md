# Spec Overview & Basic Concepts

REST-EZ's lets you test HTTP-based APIs without code (declarative, instead of procedural). It aims to make API testing easy, free, and fast for everyone.

## The High-level View

- **suite** - a `yaml` file that includes a list of one or more **specs**
- **spec** - block that defines a request & response dialog, with optional [assertions](/docs/response-validation/overview) and [lifecycle hooks](/docs/hooks/overview)

You can [write custom JS](/docs/hooks/overview/types) including [external JS files](/docs/hooks/types#js-from-external-files).

## Required Sections

A test suite has three required sections:

- [meta](/docs/basics/meta)
- [configuration](/docs/basics/config)
- [specs](/docs/basics/specs)

## Optional Sections

Optional sections are:

- [hooks](/docs/hooks/overview)
- [spec_dependencies](/docs/reusing-specs/run-spec-in-js#spec_dependencies)

> :ToCPrevNext
