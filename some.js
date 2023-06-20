
//some()
function mySome(callbackfunc, ary){
    for(let i = 0; i<ary.length; i++){
        if(callbackfunc(ary[i])){
            return true;
        }
    }
    return false;
}

function isEven(num){
    if(num%2 == 0){
        return true;
    }
    else{
        return false;
    }
}

let testAry = [1,3,5,7,9];
//console.log(mySome(isEven, testAry))
