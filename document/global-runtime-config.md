# Global Runtime Config

When calling `instance.getConfig(key)`, the config will be read and override by the following order:

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

When only the global config of a specific key had been set, the global config can be read from the instance.

```ts
import { GoogleSearchAPI } from "some-where-else";

const api: GoogleSearchAPI = GoogleSearchAPI.create();
api.getConfig(key); // Global Config
```

When the instance config is also available, the instance config will override the global configuration.

```ts
import { GoogleSearchAPI } from "some-where-else";

const api: GoogleSearchAPI = GoogleSearchAPI.create();
api.setConfig(key, value);
api.getConfig(key); // Instance Config
```
