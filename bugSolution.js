function foo(a, b) {
  if (a === null || a === undefined || b === null || b === undefined) {
    return 0; // Handle null or undefined values explicitly using strict equality
  }
  return a + b; // Normal addition
}

console.log(foo(null, 5)); // Output: 0
console.log(foo(2, 3));   // Output: 5
console.log(foo(undefined, 5)); // Output: 0
console.log(foo(2, null)); // Output: 0