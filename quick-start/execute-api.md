---
title: Execute API
layout: default
---

# Execute API

This document will give a scenario to use API created by Barktler. Before getting started, you can try to create an API with Barktler. See [Create an API](./create-an-api).

## Install Driver

A driver is required for actually sending a request. For starters, we recommend `@barktler/axios-driver`. You can see the supported driver's full list at [Driver Modules Status List](../modules/driver). You can also create your own driver if needed.

To install `@barktler/driver-axios`, run the following command under your project folder.

```sh
yarn add @barktler/driver-axios
# Or
npm install @barktler/driver-axios --save
```

Barktler instance has different ways to find a driver to use; see [Search Driver](../document/search-driver) for more details.

## Execute

Run the following code with the `GoogleSearchAPI` created earlier.

```ts
import { createAxiosDriver } from "@barktler/driver-axios";

const api: GoogleSearchAPI = GoogleSearchAPI.create();
api.useDriver(createAxiosDriver());
api.search("hello").then(console.log);
```

Note again that `useDriver` is required before you execute the action.

## Unit Test

We also provided the `@barktler/mock-driver` that allow user mock and execute request locally for testing proposes.

## Next

See [Data Verify](./data-verify) for how to verify request and response data with your API.
