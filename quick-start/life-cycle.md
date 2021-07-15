---
title: Life Cycle
layout: default
---

# Life Cycle

For an API class extends Barktler, the following request method can be used for requesting.

-   `super._requestForPendingRequest`
-   `super._requestForHookedPendingRequest`
-   `super._requestForResponseConfig`
-   `super._requestForData`

These request methods each will return the states of executing a request.

-   **Find Driver**
-   **Verify Request**
-   <span style="color:gray;font-style:italic">Await Pre Hook Verify<span>
    -   If invalid, execute the PreVerifyFailing function
-   **Process Request**
-   <span style="color:gray;font-style:italic">Await Pre Hook Process<span>
-   **Execute Pre Hook Side Effects**
-   <span style="color:gray;font-style:italic">Await Pre Hook Side Effects<span>
-   **Send Request**
    -   where `super._requestForPendingRequest` return
-   <span style="color:gray;font-style:italic">Await Response<span>
-   **Verify Response**
-   <span style="color:gray;font-style:italic">Await Post Hook Verify<span>
    -   If invalid, execute the PostVerifyFailing function
-   **Process Response**
-   <span style="color:gray;font-style:italic">Await Post Hook Process<span>
-   **Execute Post Hook Side Effects**
-   <span style="color:gray;font-style:italic">Await Post Hook Side Effects<span>
    -   where `super._requestForHookedPendingRequest` return with abort feature
    -   where `super._requestForResponseConfig` return
-   **Get response data**
    -   where `super._requestForData` return

When error occurs within request stage, an error will be thrown, see [Error Handling](../document/error-handling) for details. 

## Next

See [Cancel Request](./cancel-request) for the instruction of request canceling as the first usage example of life cycle knowledge.
