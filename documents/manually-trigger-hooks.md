# Manually Trigger Hooks

For version `@barktler/core >=2.5.0`, manually hooks triggering function are supported.

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

The above example called `super._requestForPendingRequest(request)` for cancelling support. But the validation, processing and side effect execution are skipped due to the response uncertainty. In case of that, calling `super._triggerPostHook(responseData)` will ensure post hook executed manually.

Function `super._triggerPostHook(responseData)` return new `responseData` that got processed or `null`. Returning `null` indicates the validation failing.
