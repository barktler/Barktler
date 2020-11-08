# Runtime Config

Barktler supports runtime config, which can be accessed by extended class APIs, Drivers and Mixins.

## Set Config

Consider the following code;

```ts
const api: GoogleSearchAPI = GoogleSearchAPI.create();
api.setConfig('Timeout', 100);
```

The config will be apply and only applied on the single instance.

## Read Config

Consider the following code:

```ts
const api: GoogleSearchAPI = GoogleSearchAPI.create();
api.setConfig('Timeout', 100);
```
