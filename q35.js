// 35. Write a functions which checks if all items are unique in the array.

function UniqItem(array) { 
    const checkSet = new Set(array); 
    return checkSet.size === array.length;   
} 

const input1 = [7, 8, 1, 5, 9]; 
console.log(UniqItem(input1)); 

const input2 = [7, 8, 1, 5, 5]; 
console.log(UniqItem(input2));
UniqItem();