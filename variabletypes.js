//var
function exampleVarScope() {
    if (true) {
        var x = 10;
    }
    console.log(x); // Output: 10 (due to hoisting)
}
exampleVarScope();
//   console.log(x); // Error: x is not defined (outside the function scope)
var y = 5;
var y = 7; // No error, re-declaration allowed with var
console.log(y); // Output: 7
