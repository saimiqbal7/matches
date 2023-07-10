const array1 = [1, 2, 3, 4, 5];
const array2 = [2, 3, 6, 7, 8, 9];

function findMatchingElements(arr1, arr2) {
  const matchingElements = [];

  for (const element of arr1) {
    if (arr2.includes(element)) {
      matchingElements.push(element);
    }
  }

  return matchingElements;
}

const matchingElements = findMatchingElements(array1, array2);

console.log("Matching elements:", matchingElements);
