# Life Cycle

For a API class extends Barktler, the following request method can be used for requesting.

-   `super._requestForPendingRequest`
-   `super._requestForResponseConfig`
-   `super._requestForData`

These request method each will return the states of executing request.

-   Verify Request
    -   If invalid, execute PreVerifyFailing function
-   Process Request
-   Execute Pre Hook Side Effects
-   Send Request
    -   return `super._requestForPendingRequest`
