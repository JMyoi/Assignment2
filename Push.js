function push(array, item){
   let size =  array.length+1;
   array[size] = item;
   return size;
}

let array = [1,2,6,3,8,4,3,2,32];
let ret = array.push(3);
console.log(ret, " ", array);
