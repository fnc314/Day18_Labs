// create a namespace for our iterator functions
var Iterators = (function() {
  return {
    each: function (arr, action) {
      for(i=0; i<arr.length; i++) {
        action(arr[i]);
      };
      return arr;
    },
    
    map: function(arr, action) {
      // var new_arr = []
      // for(i=0; i<arr.length; i++) {
      //     new_arr.push(action(arr[i]));
      // };
      // return new_arr;
      var i=0
      var new_arr = []
      Iterators.each(arr, function (x) { new_arr[i] = action(x); i++;});
      return new_arr;
      // 
      // 
    },
    
    reduce: function(arr, base, action) {
      // var value = base
      // for(i=0; i<arr.length; i++) {
      //   value = action(value, arr[i]);
      // };
      // return value;     
      var value = base
      Iterators.each(arr, function (x) { 
        value = action(value, x); 
      });
      return value;
      
    }
  };
})();

// declare the array
var arr = [1,2,3];

// should output
// 1
// 2
// 3
console.log("results of applying Iterators.each to arr:");
var result = Iterators.each(arr, function (number) {
  console.log(number);});

console.log(result);
// should output
// => [1,2,3]
console.log("applying Iterators.each to arr should return the array:");
Iterators.each(arr, function (number) {});

// should output
// [2, 4, 6]
console.log("results of applying Iterators.map to arr:");
console.log(
  Iterators.map(arr, function (number) {
    return number * 2;
  })
);

// should output
// false to indicate that the array returned
// by map is a different object than the array
// that had been passed in
console.log("arr and the array returned by map are identical:");
console.log(
  arr === Iterators.map(arr, function (number) {
    return number * 2;
  })
);

// should output arr's contents to indicate that map did not 
// modify the original array's contents
console.log("arr's contents:");
console.log(arr);

// BONUS: should output the sum 6
console.log("result of applying Iterators.reduce to arr with a sum function:");
console.log(
  Iterators.reduce(arr, 0, function (a, b) {
    return a + b;
  })
);