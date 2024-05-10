// 28. Use for loop to iterate from 0 to 100 and print only prime numbers
let c = 0;
let j;
for (let i = 1; i <= 100; i++) {
    for (j = 2; j < i; j++) {
        if (i % j == 0) {
            c++;
        }
        if (c == 2) {
            console.log("prime no: " + j);
            c = 0;
        }

    }
 

}