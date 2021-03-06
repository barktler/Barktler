---
title: Cancel Request
layout: default
---

# Cancel Request

Requests can be cancel before the response has been received. Therefore, if the API implemented with Barktler wants to support request cancel, the calling method must use `super._requestForPendingRequest`.

## With `super._requestForPendingRequest` Method

Considering the following example:

```ts
import { Barktler } from "@barktler/core";
import { PendingRequest } from "@barktler/driver";

class GoogleSearchAPI extends Barktler {

    public static create(): GoogleSearchAPI {

        return new GoogleSearchAPI();
    }

    public async search(keyword: string): Promise<void> {

        const pendingRequest: PendingRequest = await this._requestForPendingRequest({

            url: `https://www.google.com/search?q=${keyword}`,
            method: 'GET',
        });

        await pendingRequest.response; -> Wait for response data
        pendingRequest.cancel(); -> cancel request
    }
}
```

You can implement some complex object structures to support data canceling.

Using the `super._requestForPendingRequest` requesting method, data validation, processing, and post-hook side effect will not execute.  
For version `@barktler/core >=2.5.0`, execute `super._triggerPostHook(responseData)`, could makeup the validation, processing and side effects. See [Manually Trigger Hooks](../document/manually-trigger-hooks) for more details of hook execution.

## With `super._requestForHookedPendingRequest` Method

Only available with `@barktler/core >=2.9.0`.

Considering the following example:

```ts
import { Barktler, HookedPendingRequest } from "@barktler/core";

class GoogleSearchAPI extends Barktler {

    public static create(): GoogleSearchAPI {

        return new GoogleSearchAPI();
    }

    public async search(keyword: string): Promise<void> {

        const pendingRequest: HookedPendingRequest = await this._requestForHookedPendingRequest({

            url: `https://www.google.com/search?q=${keyword}`,
            method: 'GET',
        });

        await pendingRequest.response; -> Wait for response data
        pendingRequest.cancel(); -> cancel request
    }
}
```

You can implement some complex object structures to support data canceling.

## Next

See [Use Mixin](./use-mixin) for how to use a mixin to enhance your API call.
