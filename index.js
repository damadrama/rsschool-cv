function filteredArray(numbers, value) {
  const filteredNumbers = [];
  numbers.forEach(function (element) {
    if (element > value) {
      filteredNumbers.push(element);
    }
  });
  return filteredNumbers;
}
console.log(filteredArray([1, 5, 3, 14, 5], 5)),
console.log(filteredArray([1, 2, 6, 8, 5], 3));
console.log(filteredArray([11, 12, 3, 4, 5], 13));
console.log(filteredArray([9, 22, 7, 4, 15], 10));

// *
// !
// ?
// TODO