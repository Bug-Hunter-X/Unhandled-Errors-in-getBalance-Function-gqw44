# Unhandled Errors in `getBalance` Function

This repository demonstrates a common error in DApps: improper error handling. The `getBalance` function initially lacks error handling, which can cause unexpected behavior or application crashes.  The corrected version uses a `try-catch` block to manage errors gracefully.

## Bug

The original `getBalance` function doesn't handle potential errors during balance retrieval.  If an error occurs (e.g., network issue, invalid address), the function returns an undefined value, leading to unpredictable results.

## Solution

The improved `getBalance` function includes a `try-catch` block.  If an error occurs, the `catch` block logs the error and returns `null`, preventing unexpected behavior and providing better debugging information.

## How to reproduce

1. Clone this repository.
2. Run the `getBalanceBug.js` file (it will likely fail silently or return undefined).
3. Run the `getBalanceSolution.js` file (it will handle the error properly).
