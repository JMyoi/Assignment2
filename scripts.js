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

myEach(print,Array);



// map() function



