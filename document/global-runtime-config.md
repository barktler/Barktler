# Global Runtime Config

When calling `instance.getConfig(key)`, config will be read and override by the following order:

-   Global Config
-   Instance Config

## Set Config

Use the following code to set global config:

```ts
import { Barktler } from "@barktler/core";
Barktler.setGlobalConfig(key, value);
```

You can also call the following method to delete and clear configs.

```ts
import { Barktler } from "@barktler/core";
Barktler.deleteGlobalConfig(key);
Barktler.clearGlobalConfigs(key);
```

## Read Config

When only global config of a specific key had been set, global config can be read from instance.

```ts
import { GoogleSearchAPI } from "some-where-else";

const api: GoogleSearchAPI = GoogleSearchAPI.create();
api.getConfig(key); // Global Config
```

When instance config is also available, instance config will override the global configuration.

```ts
import { GoogleSearchAPI } from "some-where-else";

const api: GoogleSearchAPI = GoogleSearchAPI.create();
api.setConfig(key, value);
api.getConfig(key); // Instance Config
```
