---
title: Use Mixin
layout: default
---

# Use Mixin

Barktler supports mixin; see [Barktler Mixin Modules](../modules/mixin) for an official supported mixin list.

## Usage

For Debug Logging, add the `@barktler/mixin-debug-log` package from npm.

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

For Verify, add the `@barktler/mixin-verify` package from npm.

```sh
yarn add @barktler/mixin-verify
# Or
npm install @barktler/mixin-verify --save
```

Use it is also very simple; consider the following API call.

```ts
import { createStringedVerifyMixin } from "@barktler/mixin-verify";

const api: GoogleSearchAPI = GoogleSearchAPI.create();
api.useMixin(createStringedVerifyMixin());
api.search("hello"); // Will Verify request body and response data
```

## Global Mixin

For global mixin usage, see [Global Mixin](../document/global-mixin).

## Next

Enjoy Barktler!
