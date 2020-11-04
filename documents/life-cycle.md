# Life Cycle

For an API class extends Barktler, the following request method can be used for requesting.

-   `super._requestForPendingRequest`
-   `super._requestForResponseConfig`
-   `super._requestForData`

These request methods each will return the states of executing a request.

-   **Verify Request**
-   _<span style="color:gray">Await Pre Hook Verify<span>_
    -   If invalid, execute the PreVerifyFailing function
-   **Process Request**
-   _<span style="color:gray">Await Pre Hook Process<span>_
-   **Execute Pre Hook Side Effects**
-   _<span style="color:gray">Await Pre Hook Side Effects<span>_
-   **Send Request**
    -   where `super._requestForPendingRequest` return
-   _<span style="color:gray">Await Response<span>_
-   **Verify Response**
-   _<span style="color:gray">Await Post Hook Verify<span>_
    -   If invalid, execute the PostVerifyFailing function
-   **Process Response**
-   _<span style="color:gray">Await Post Hook Process<span>_
-   **Execute Post Hook Side Effects**
-   _<span style="color:gray">Await Post Hook Side Effects<span>_
    -   where `super._requestForResponseConfig` return
-   **Get response data**
    -   where `super._requestForData` return

## Next

See [Cancel Request](./cancel-request.md) for the instruction of request canceling as the first usage example of life cycle knowledge.
