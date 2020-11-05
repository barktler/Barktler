# Search Driver

When a request call has been made, the Barktler instance will search the driver for the current call by the following method and order.

1.  Instance Driver
2.  Instance Default Driver
3.  Global Driver

## Set Driver

Set instance driver by calling `api.useDriver(driver)`.

Set instance default driver by config the following code.

```ts
class MyAPI extends Barktler {

    protected readonly defaultDriver: RequestDriver = driver;
}
```

Set global driver by calling `Barktler.useGlobalDefaultDriver(driver)`.
