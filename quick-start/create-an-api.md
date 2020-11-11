# Create an API

Create an API with Barktler is very simple. This document will help you get to know about creating a simple API with Barktler.

## Install

Run the following command under your project folder to install the required dependencies.

```sh
yarn add @barktler/core
# Or
npm install @barktler/core --save
```

## First API

Let's write a simple API with allow us to get the webpage of Google search result.

Google provides a simple URL for searching. For example, the URL of the search keyword `hello` will be: `https://www.google.com/search?q=hello`.

The `TypeScript` code for the described API will look like this.

```ts
import { Barktler } from "@barktler/core";

class GoogleSearchAPI extends Barktler {

    public static create(): GoogleSearchAPI {

        return new GoogleSearchAPI();
    }

    public async search(keyword: string): Promise<string> {

        const data: string = await this._requestForData({

            url: `https://www.google.com/search?q=${keyword}`,
            method: 'GET',
        });
        return data;
    }
}
```

And that's it, your API is ready, and the various features of that class is ready to ship!

## Timeout

Timeout is supported by Barktler, see [Timeout](../document/timeout.md) for more details.

## Config

API created by Barktler is multi-dimension configurable, see [Runtime Config](../document/runtime-config.md).

## Next

See [Execute API](./execute-api.md) for how to use your created API.
