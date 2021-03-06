---
title: Data Verify
layout: default
---

# Data Verify

Data verification for API created with Barktler can be implemented easily. 

The data pattern is provided by `@sudoo/pattern` see it's document at [Sudoo Pattern Documents](https://pattern.sudo.dog).

## Declare Pattern

For data verification, declare data should be done first. Both request data and response data verify are supported. 

For example, continue from the `GoogleSearchAPI` Barktler API class. The following `TypeScript` code shows you the steps to declare a response data pattern.

```ts
import { Barktler } from "@barktler/core";

class GoogleSearchAPI extends Barktler {

    private constructor() {

        super();
        super._declareResponseDataPattern({
            type: 'map',
            map: {
                hello: {
                    type: 'string',
                },
            },
        });
    }
}
```

The above code declares the response data should be a JavaScript Object, a property named `hello`, with some value typed with `string`.

## Verify Data

To verify the data, you can attach a hook onto the Barktler instance.

```ts
import { Barktler } from "@barktler/core";

class GoogleSearchAPI extends Barktler {

    private constructor() {

        super();
        super.postHook.verifier.add((data: IResponseConfig) => {
            return validate(data.responseDataPattern, data.data));
        });
    }
}
```

In a Barktler instance above, the data validate function will be executed every time the class is instantiated, the request is sent, and when the data is received.

> A mixin: `@barktler/mixin-verify` can do this automatically, see [Use Mixin](./use-mixin) for detailed instruction.

## Dynamic

All declare and hook action sure can be made differently after is instantiated like the following code.

```ts
const api: GoogleSearchAPI = GoogleSearchAPI.create();
api._declareResponseDataPattern({
    type: 'map',
    map: {
        hello: {
            type: 'string',
        },
    },
});
api.postHook.verifier.add((data: IResponseConfig) => {
    return validate(data.responseDataPattern, data.data));
});
```

## Next

See [Life Cycle](./life-cycle) for the life cycle of Barktler Request.
