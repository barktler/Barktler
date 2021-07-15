---
title: Create an API
layout: default
---

# Create an API

Create an API with Barktler is very simple. This document will help you get to know about creating a simple API with Barktler.

## Install

Make sure the Barktler package is installed.

For install, run the following command under your project folder to install the required dependencies.

{% include copyable-highlight.html
    language="shell"
    file="install-core.sh"
%}

{% include curl-link.html file="install-core.sh" %}

## First API

Let's write a simple API with allow us to get the webpage of Google search result.

Google provides a simple URL for searching. For example, the URL of the search keyword `hello` will be: `https://www.google.com/search?q=hello`.

The `TypeScript` code for the described API will look like this.

{% include copyable-highlight.html
    language="typescript"
    file="first-api.ts"
%}

And that's it, your API is ready, and the various features of that class is ready to ship!

## Timeout

Timeout is supported by Barktler, see [Timeout](../document/timeout) for more details.

## Config

API created by Barktler is multi-dimension configurable, see [Runtime Config](../document/runtime-config).

## Next

See [Execute API](./execute-api) for how to use your created API.
