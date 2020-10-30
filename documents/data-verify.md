# Data Verify

Data verify for API created with Barktler can me implemented easily. 

The data pattern is provided by `@sudoo/pattern` see it's document at [Sudoo Pattern Documents](//pattern.sudo.dog).

## Declare Pattern

For data verify, declare data should be done first. Both request data and response data verify are supported. 

For example, continue from the `GoogleSearchAPI` Barktler API class. The following `TypeScript` code show you the steps to declare response data pattern.

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

The above code declares the response data should be a JavaScript Object, which should has a property named `hello`, with some value typed with `string`.

## Verify Data
