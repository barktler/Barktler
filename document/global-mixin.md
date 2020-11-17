# Global Mixin

Barktler supports global mixin.

Due to the data type and structure difference, only use global mixin when needed and fitted.

## Use Global Mixin

Some simple code for global mixin:

```ts
import { Barktler } from "@barktler/core";
Barktler.useGlobalMixin(yourMixin);
```

## Adopt Global Mixin

When declaring the global mixin usage under static class, the new instance will **NOT** automatically adopt the mixins declared within global namespace.

To use global mixin within an instance, run the following code:

```ts
import { YourAPI } from "some-where-else";

const api: YourAPI = YourAPI.create();
api.adoptGlobalMixinStack();
```

## Clear Global Mixins

```ts
import { Barktler } from "@barktler/core";
Barktler.clearAllGlobalMixin();
```
