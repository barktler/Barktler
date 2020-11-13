# Error Handling

Barktler support error handling and interceptors.

## Example

Consider the following code:

```ts
import { GoogleSearchAPI } from "some-where-else";

const api: GoogleSearchAPI = GoogleSearchAPI.create();
await api.search("<Something>");
```

## Handle with try catch

When error occurs during request stage, you can catch the error by replace the above example with following code:

```ts
import { GoogleSearchAPI } from "some-where-else";

const api: GoogleSearchAPI = GoogleSearchAPI.create();
try {
    await api.search("<Something>");
} catch (reason) {
    // Do something with reason
}
```

## Handle with promise chain methods

The search response come with a promise, you can also do:

```ts
import { GoogleSearchAPI } from "some-where-else";

const api: GoogleSearchAPI = GoogleSearchAPI.create();
api.search("<Something>").catch((reason: any) => {
    // Do something with reason
})；
```

## Error Hooks

Consider the following code:

```ts
import { Barktler } from "@barktler/core";

class GoogleSearchAPI extends Barktler {

    public static create(): GoogleSearchAPI {

        return new GoogleSearchAPI();
    }

    private constructor() {

        super();
        super.errorHook.sideEffect.add((reason: any) => {
            reportReason();
        });
    }

    public async search(keyword: string): Promise<string> {

        const data: string = await this._requestForData({

            url: `https://www.google.com/search?q=${padLeft(keyword, this.getConfig(padLeft))}`,
            method: 'GET',
        });
        return data;
    }
}
```
