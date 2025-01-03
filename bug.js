function foo(a, b) {
  if (a === null || b === null) {
    return null; //This will not return null if both a and b are null
  } else {
    return a + b;
  }