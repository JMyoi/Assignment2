function reverseArray(array) {
    const reversedArray = [];
  
    for (let i = array.length - 1; i >= 0; i--) {
      reversedArray.push(array[i]);
    }
  
    return reversedArray;
  }

function reverseArrayInPlace(array) {
    const length = array.length;
    const halfLength = Math.floor(length / 2);
  
    for (let i = 0; i < halfLength; i++) {
      const temp = array[i];
      array[i] = array[length - 1 - i];
      array[length - 1 - i] = temp;
    }
  
}

const numbers = [1, 2, 3, 4, 5];
const reversedNumbers = reverseArray(numbers);
console.log(reversedNumbers);

reverseArrayInPlace(numbers);
console.log(numbers); 