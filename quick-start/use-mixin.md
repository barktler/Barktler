# Use Mixin

Barktler supports mixin; see [Barktler Mixin Modules](../modules/mixin.md) for an official supported mixin list.

## Usage

For Debug Logging, download the `@barktler/mixin-debug-log` from npm.

```sh
yarn add @barktler/mixin-debug-log
# Or
npm install @barktler/mixin-debug-log --save
```

Use it is very simple; consider the following API call.

```ts
import { createMixinDebugLog } from "@barktler/mixin-debug-log";

const api: GoogleSearchAPI = GoogleSearchAPI.create();
api.useMixin(createMixinDebugLog());
api.search("hello").then(() => /*Do Nothing*/); // The request and response will logged into console
```
