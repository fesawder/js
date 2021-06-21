function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line
  let srcKeys = Object.keys(source);
  arr = collection.reduce((accum, curent) => {
    return srcKeys.map((el, i) => {
      return source[srcKeys[i]] !== el[srcKeys[i]] ? accum : accum.concat(curent);
    });
    for (let i = 0; i < srcKeys.length; i++) {
      if (source[srcKeys[i]] !== curent[srcKeys[i]]) {
        return accum;
      }
    }
    return accum.concat(curent);
  }, []);
  // Only change code above this line
  return arr;
}

console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }));