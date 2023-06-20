function myReduce(array, callbackfunc, initialValue = 0){
    let accumulator = initialValue;
    let i;
    if(initialValue!=0){
        i=1;
    }else{i=0}

  for (; i < array.length; i++) {
    accumulator = callbackfunc(accumulator, array[i]);
  }

  return accumulator;

}
const numbers = [1, 2, 3, 4, 5];

const sum = myReduce(numbers, function(accumulator, currentValue) {
  return accumulator + currentValue;
},0);

console.log(sum);