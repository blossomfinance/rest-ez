# Hooks & JS

## Basics

Write your own custom JS (including external JS files) to process & make assertions of any sort.

## Types

REST-EZ supports three ways of writing custom JS:

- [JS Inline Functions](/docs/hooks/types#js-synchronous-functions)
- [JS Inline Async Functions](/docs/hooks/types#js-async-functions)
- [JS From External Files](/docs/hooks/types#js-from-external-files)

## List of Hooks

The following [List of Hooks](/docs/hooks/list) are supported:

- [Suite-Level Hooks](/docs/hooks/list/#suite-level-hooks)
  - [before_all](/docs/hooks/list#before_all)
  - [after_all](/docs/hooks/list#after_all)
  - [before_each](/docs/hooks/list#before_each)
  - [after_each](/docs/hooks/list#after_each)
- [Spec-Level Hooks](/docs/hooks/list#spec-level-hooks)
  - [before_test](/docs/hooks/list#before_test)
  - [after_test](/docs/hooks/list#after_test)
- [custom_configuration](/docs/basics/config#custom_configuration)

## Context

JS functions have access to different [hook context](/docs/hooks/context) via `this` keyword.

- [Suite Context](/docs/hooks/context#suite)
- [Test Context](/docs/hooks/context#test)
- [Response Context](/docs/hooks/context#response)

<br><br>
