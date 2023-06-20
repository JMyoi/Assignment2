
//every() function

function myEvery(callbackfunc, ary){
    for(let i = 0; i<ary.length; i++){
        if(!callbackfunc(ary[i])){
            return false;
        }
    }
    return true;
}

function isOdd(num){
    if(num%2==0){
        return false;
    }
    else{
        return true;
    }
}