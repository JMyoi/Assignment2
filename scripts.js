// myEach Function
function myEach(callBackFunc, ary){
for(let i = 0; i<ary.length; i++){
    callBackFunc(ary[i]);
}
return undefined;
};

let Array = [1,2,3,4];

function print(num){
    console.log(num);
}

//myEach(print,Array);



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


//filter() function
function filter(callbackfunc, ary){
    let newAry = []
    for(let i = 0; i<ary.length; i++){
        if(callbackfunc(ary[i])){
            newAry.push(ary[i]);
        }
    }
    return newAry;
}

function has3letters(string){
    return string.length===3;
}
let stringAry = ['Jacob', "bob", "sam", "johnathan"];

newArray = filter(has3letters, stringAry);
console.log(newArray)





