# Overview & Basic Concepts

## The High-level View

REST-EZ's lets you test HTTP-based APIs without code. It aims to make API testing easy, free, and fast for everyone.

Write your API test specs in YAML. We call each YAML file a test **suite**.

You also have the option to [write Javascript](/docs/hooks/overview) optionally [using external files and `npm` modules](/docs/hooks/js-modules) if needed to implement custom logic.

## Required Sections

A test suite has three required sections:

- [meta](/docs/basics/meta)
- [configuration](/docs/basics/config)
- [specs](/docs/basics/specs)

## Optional Sections

Optional sections are:

- [hooks](/docs/hooks/overview)
- [spec_dependencies](/docs/reusing-specs/intersuite-spec-deps)

> :ToCPrevNext
