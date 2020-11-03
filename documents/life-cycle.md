# Life Cycle

For a API class extends Barktler, the following request method can be used for requesting.

-   `super._requestForPendingRequest`
-   `super._requestForResponseConfig`
-   `super._requestForData`

These request method each will return the states of executing request.

-   Verify Request
-   _Await Pre Hook Verify_
    -   If invalid, execute PreVerifyFailing function
-   Process Request
-   _Await Pre Hook Process_
-   Execute Pre Hook Side Effects
-   _Await Pre Hook Side Effects_
-   Send Request
    -   where `super._requestForPendingRequest` return
-   _Await Response_
-   Verify Response
-   _Await Post Hook Verify_
    -   If invalid, execute PostVerifyFailing function
-   Process Response
-   _Await Post Hook Process_
-   Execute Post Hook Side Effects
-   _Await Post Hook Side Effects_
    -   where `super._requestForResponseConfig` return
-   Get response data
    -   where `super._requestForData` return

## Next

See [Cancel Request](./cancel-request.md) for the instruction of request cancelling as the first usage example of life cycle knowledge.
