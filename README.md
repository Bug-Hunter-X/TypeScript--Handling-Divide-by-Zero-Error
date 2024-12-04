# TypeScript: Handling Divide by Zero Error

This repository demonstrates a common error in TypeScript: attempting to divide by zero.  The original code lacks error handling, resulting in a runtime exception. The solution implements robust error handling to gracefully manage this scenario.

## Bug
The `divide` function in `bug.ts` does not handle the case where the divisor is zero. This leads to an unhandled exception when the function is called with a zero divisor.

## Solution
The `bugSolution.ts` file demonstrates the solution.  A conditional statement checks for a zero divisor before performing the division. If the divisor is zero, an `Error` is thrown, providing informative feedback to the caller.