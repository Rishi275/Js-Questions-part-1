// 27. The following is an array of 10 students ages:
//     => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     - Sort the array and find the min and max age
//     - Find the median age(one middle item or two middle items divided by two)
//     - Find the average age(all items divided by number of items)
//     - Find the range of the ages(max minus min)
//     - Compare the value of (min - average) and (max - average), use abs() method

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
let sortedAge =  ages.sort();
let Sum = 0;
for (let i = 0; i < sortedAge.length; i++) {
    const element = sortedAge[i];
   Sum +=sortedAge[i];
}
let average = Sum/ages.length;
console.log("avaerage age of student: "+ average);
let medianAge = (ages.length/2 + ages.length/2 + 1 )/2;
console.log("index of median age:"+ medianAge);