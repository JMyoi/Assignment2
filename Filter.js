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
//console.log(newArray)
