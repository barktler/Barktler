# Timeout

Barktler supports request a timeout. Consider the following code:

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
            timeout: 8000,
        });
        return data;
    }
}
```

That's it! That how simple to use timeout within Barktler.

API creators need to use a self-implemented argument system if a personalized timeout is needed.
