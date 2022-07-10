// applySpec(): Given a specification object that
// recursively maps properties to functions,
// applySpec takes in this specification object and
// returns a function that when called with some arguments
// produces an object of the same structure.

// For Eg:

const getMetrics = applySpec({
    sum: (a, b) => a + b, // sum is called with (2, 4)
    nested: {
      mul: (a, b) => a * b // mul is called with (2, 4)
    }
  });
  function applySpec(specObj) {}
  
  console.log(getMetrics(2, 4)) // => { sum: 6, nested: { mul: 8 } }
  console.log(getMetrics(3, 6)) // => { sum: 9, nested: { mul: 18 } }
  