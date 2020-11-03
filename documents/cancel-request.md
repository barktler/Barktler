# Cancel Request

Requests can be cancel before the response has been received. Therefore, if the API implemented with Barktler wants to support request cancel, the calling method must use `super._requestForPendingRequest`.

Considering the following example:

```ts
import { Barktler } from "@barktler/core";

class GoogleSearchAPI extends Barktler {

    public static create(): GoogleSearchAPI {

        return new GoogleSearchAPI();
    }

    public async search(keyword: string): Promise<void> {

        const pendingRequest: PendingRequest = await this._requestForPendingRequest({

            url: `https://www.google.com/search?q=${keyword}`,
            method: 'GET',
        });

        // await pendingRequest.response; -> Wait for response data
        // pendingRequest.cancel(); -> cancel request
    }
}
```

You can implement some complex object structures to support data canceling.

Using the `super._requestForPendingRequest` requesting method, data validation, processing, and post-hook side effect will not execute.
