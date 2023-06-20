// map() function

function myMap(callbackfunc, ary){
    let newAry = [];
    for(let i = 0; i<ary.length; i++){
        newAry.push(callbackfunc(ary[i]));
    }
    return newAry;
    };
    
    function add1(num){
       return num*2;
    };
    
    let newArray = myMap(add1, Array);
    
    //console.log(newArray);
    