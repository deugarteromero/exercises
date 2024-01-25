let numArr = [0,0,1,1,1,2,2,3,3,4];

let removeDuplicates = function(numArr){
    let i = 1;
    let j = 1;
    while(i < numArr.length){
        if(numArr[i] !== numArr[i-1]){
            numArr[j] = numArr[i];
            j++;
        };
        i++;
    };

    return `${j}, nums = [${numArr}]`;
};

//TEST(S)
console.log(removeDuplicates(numArr)); //Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]