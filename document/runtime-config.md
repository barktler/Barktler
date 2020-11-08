# Runtime Config

Barktler supports runtime config, which can be accessed by extended class APIs, Drivers, and Mixins.

## Set Config

Consider the following code;

```ts
import { GoogleSearchAPI } from "some-where-else";

const api: GoogleSearchAPI = GoogleSearchAPI.create();
api.setConfig('padLeft', 100);
```

The config will be applied and only applied to a single instance.

## Read Config

Consider the following code:

```ts
import { Barktler } from "@barktler/core";

class GoogleSearchAPI extends Barktler {

    public static create(): GoogleSearchAPI {

        return new GoogleSearchAPI();
    }

    public async search(keyword: string): Promise<string> {

        if(this.getConfig('padLeft')) {
            
            const data: string = await this._requestForData({

                url: `https://www.google.com/search?q=${padLeft(keyword, this.getConfig(padLeft))}`,
                method: 'GET',
            });
            return data;
        }

        const data: string = await this._requestForData({

            url: `https://www.google.com/search?q=${keyword}`,
            method: 'GET',
        });
        return data;
    }
}
```
