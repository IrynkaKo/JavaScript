 
 const numbers = [860, 140, 53, 74, 867, 100, 11, 20, 699, 921];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  if (typeof numbers[i] === 'number') {
    sum += numbers[i];
  }
}
console.log(sum);


    const numbers1 = [  860, 140, 53, 74, 867 ,100 ,11 ,20,699,921];
    const minmax = (numbers1) => {
       let min = Infinity;
       let max = -Infinity;
       for (let num of numbers1) {
       if (typeof num === 'number') {
       if (num < min) {
           min = num;
        }
         if (num > max) {
          max = num;
         }
       }
     }
  
     return { min, max };
   };
  
   const { min, max } = minmax(numbers);
   console.log(min);
   console.log(max);
  


   for (let i = 1; i <= 5; i++) {
    let str = '';
    for (let h = 1; h <= i; h++) {
      str += '#';
    }
    console.log(str);
  }
  