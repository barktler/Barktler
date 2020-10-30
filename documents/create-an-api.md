# Create an API

Create an API with Barktler is very simple. This document will help you get to know about create a simple API with Barktler.

## Install

Run the following command under your project folder to install required dependencies.

```sh
yarn add @barktler/core
# Or
npm install @barktler/core --save
```

## First API

Let's write a simple API with allow us get the webpage of google search result.

Google provide a simple url for searching, for example, the url of search keyword `hello` will be: `https://www.google.com/search?q=hello`.

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

And that's it, your api is ready, and the variety features of that class is ready to ship!
