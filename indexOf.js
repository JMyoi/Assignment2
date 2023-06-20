function indexOf(array, key, fromIndex = 0){
    for(let i = fromIndex; i<array.length; i++){
        if(array[i] === key){
            return i;
        }
    }
    return -1;
}

let array = [1,2,6,3,8,4,3,2,32];
console.log(indexOf(array, 5), " ", indexOf(array, 3));