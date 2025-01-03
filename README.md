# Incorrect Null Handling in JavaScript Function

This repository demonstrates a common error in JavaScript related to null value handling. The `foo` function is intended to add two numbers but doesn't correctly handle the case where both input values are `null`.

## Bug Description
The provided `foo` function does not return `null` when both input parameters `a` and `b` are `null`. It should return `null` in such cases to prevent unexpected errors or behavior.

## How to Reproduce
1. Clone this repository.
2. Run the `bug.js` file using a JavaScript runtime environment (e.g., Node.js).
3. Call the `foo` function with both arguments as `null` (`foo(null, null)`).
4. Observe that the returned value is not `null` as expected.

## Solution
The solution is provided in `bugSolution.js`. It addresses the bug by explicitly checking if both `a` and `b` are `null`, before performing the addition operation. If both are `null`, it returns `null`; otherwise, it proceeds with the addition.