# vitest-happy-dom-detect-async-leaks

Example project for detecting async leaks in vitest with happy-dom

# How to test?

```bash
npm install
npm run test:detect-async-leaks
```

# What is tested?

npm run test:detect-async-leaks will run two tests and try to detect async leaks in both of them. It's expected that only the default timeout tests leaks.

### happy-dom-timeouts.test.ts

This test uses the `setTimeout` and `clearTimeout` functions of happy-dom. It will wait for the built in `close()` function from happy-dom.

### default-timeouts.test.ts

This test uses the default Vitest `setTimeout` and `clearTimeout` functions.

Vitest will wait for the happy-dom function `abort()` and then call window.close() (doesn't return a promise) during teardown. This will not wait for the environment to fully close. `abort()` should be sufficient for this use case, but for some reason it's not.
