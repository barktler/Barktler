# Execute API

This document will give a scenario to use API created by Barktler. Before get started, you can try to create an API with Barktler, see [Create an API](./create-an-api.md).

## Install Driver

A driver is required for actually sending a request. For starters, we recommend `@barktler/axios-driver`. You can see the full list of supported driver at [Driver Modules Status List](../modules/driver.md), you can also create your own driver if needed.

To install `@barktler/axios-driver`, run the following command under your project folder.

```sh
yarn add @barktler/axios-driver
# Or
npm install @barktler/axios-driver --save
```

## Execute

Run the following code with the `GoogleSearchAPI` created earlier.

```ts
import { axiosDriver } from "@barktler/driver-axios";

const api: GoogleSearchAPI = GoogleSearchAPI.create();
api.useDriver(axiosDriver);
api.search("hello").then(console.log);
```

Note again, use driver is required before you execute the action.

## Unit Test

We also provided the `@barktler/mock-driver` that allow user mock and execute request locally for testing proposes.
