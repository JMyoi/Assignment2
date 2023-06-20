function myIncludes(array, key, fromIndex = 0){
    for(let i = fromIndex; i<array.length; i++){
        if(array[i]===key){
            return true;
        }
    }
    return false;
}

let array = [1,2,5,3,232,4,7,3];
console.log(myIncludes(array, 4), " ", myIncludes(array, 99));