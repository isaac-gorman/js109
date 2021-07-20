let getTypeOf = (dataType) => console.log(typeof dataType);

// Primitive Values
getTypeOf(23); // => number
getTypeOf("foo"); // => string
getTypeOf(null); // => null
getTypeOf(undefined); // => undefined
getTypeOf(false); // => boolean

// Object Values
getTypeOf({}); // => object
getTypeOf([]); // => object
getTypeOf(function () {}); // => function (which inherits from object)
