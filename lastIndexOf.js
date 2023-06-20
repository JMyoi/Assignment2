function mylastindexOf(array, key){
    for(let i = array.length-1; i>=0; i--){
        if(array[i] === key){
            return i;
        }
    }
    return -1;
}

let array = [1,2,6,3,8,4,3,2,32];
console.log(mylastindexOf(array, 32), " ", mylastindexOf(array, 99));