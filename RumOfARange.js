function Range(start, end){
    const result = [];

    for (let i = start; i <= end; i++) {
      result.push(i);
    }
  
    return result;
}
function sum(numbers) {
    let total = 0;
  
    for (let i = 0; i < numbers.length; i++) {
      total += numbers[i];
    }
  
    return total;
  }
  console.log(sum(Range(1,10)));