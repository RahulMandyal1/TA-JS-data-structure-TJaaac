// 1. Create an array named numbers and store 5 number values in it
let  numbers = [
    1,
    3,
    9,
    15,
    2
];
// 2. Calculate the sum of array items and print it to the console using console.log()
const calculateSumOfArray=() =>{
    let addition = 0;
    for (let sum of numbers ){
    addition = addition+sum;
   }
   console.log(`The sum of array is ${addition}`);
}
calculateSumOfArray();
// 3. Calculate the average of array items and print it to the console using console.log()
const getAverageOfArray = () =>{
    let average  = 0;
    for (let avg of numbers ){
    average+= avg;
  }
  console.log(`Average of the array  is ${average/numbers.length}`);
}
getAverageOfArray();
// 4. Find the highest number in the array and print it to the console using console.log()
// for(let i =0 ; i<=numbers.length ; i++){
//     let largest = 0;
   
// }

const getLargestNumber = () =>{
    let maxElement = numbers[0];
    for (let i = 0; i<=numbers.length ; i++){
        if(numbers[i]> maxElement ){
            maxElement  = numbers[i];
        }
    }
    console.log(`The largest Element of the number array is  ${maxElement}`);
}
// 5. Find the lowest number in the array and print it to the console using console.log()

const getLowestNumber = () =>{
    let lowestElement = numbers[0];
    for (let i = 0; i<=numbers.length ; i++){
        if(numbers[i]< lowestElement ){
            getLowestNumber = numbers[i];
        }
    }
    console.log(`The smallest  Element of the number array is  ${lowestElement}`);
}
// 6. Find the even numbers in the array and print them to the console using console.log()

for (let even of numbers ){
    if(even %2==0){
        console.log(`Even Numbers in the whole array is : ${even}`);
    }
}
// 7. Find the odd numbers in the array and print them to the console using console.log()
for (let odd of numbers ){
    if(odd %3==0){
        console.log(`Odd numbers in the array is : ${odd}`);
    }
}
// 8. Find the numbers in the array that is divisible by 5 and print them to the console using console.log()
for (let odd5 of numbers ){
    if(odd5 %5==0){
        console.log(`Numbers divisible  by the five is ${odd5}`);
    }
}
// 9. Log all the element of the array one by one

for(let allElements of numbers){
    console.log(allElements);
}
// 10. Find all the number in the array that is divisible by 3
for (let div3 of numbers ){
    if(div3 %3==0){
        console.log(`Numbers divisible  by 3 is ${div3}`);
    }
}