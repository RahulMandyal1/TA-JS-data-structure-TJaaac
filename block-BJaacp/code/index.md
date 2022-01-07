1. What will be the output and explain the reason.

```js
let obj = { name: 'Arya' };
obj = { surname: 'Stark' };
let newObj = { name: 'Arya' };
let user = obj;
let arr = ['Hi'];
let arr2 = arr;
```

Answer the following with reason after going through the above code:

- `[10] === [10]` // false  because array is of object type  and we are trying to compare two different array at different memory location
//==  or ===operator  are  only used to see if both the array are same or not means both array have same memory address 
// for element comparision of array we have  to use loops to check each individual element 
- What is the value of obj? // answer
- `obj == newObj` // false  // obj  and new obj hold  different memory address 
- `obj === newObj`// false we  can,t compare  two different  object with differnet memory address .==  or ===operator  are  only used to //see if ///both the object are same or not means both object have same memory address 
- `user === newObj` // false we  can,t compare  two different  object with differnet memory address .==  or ===operator  are  only used to //see ////if both the object are same or not means both object have same memory address 
- `user == newObj` // false we  can,t compare  two different  object with differnet memory address .==  or ===operator  are  only used to //see if both the object are same or not means both object have same memory address 
- `user == obj` // true // both have same memory address that  hold the object
- `arr == arr2` // true // both have same memory address that  hold the array
- `arr === arr2`//true // both have same memory address that  hold the array

2. What's will be the value of `person1` and `person2` ? Explain with reason. Draw the memory representation diagram.

![name](./hello.jpg)

```js
function personDetails(person) {
  person.age = 25;
  person = { name: 'John', age: 50 };
  return person;
}
var person1 = { name: 'Alex', age: 30 };
var person2 = personDetails(person1);
console.log(person1); // {name: 'Alex', age: 25} 
// Reason -   When we have decalares person 2 and  assign it value  of personDetails(person1) here we have passed it  a parameter  person 1  memory address so  person1.age = 25 ; and then new object  gets created in a new location  so only person  one age got changed

console.log(person2);// {name: 'John', age: 50}
// When we have decalares person 2 and  assign it value  of personDetails(person1) here we have passed it  a parameter  person 1  memory address so  person1.age = 25 ; and then new object  gets created in a new location   it prints that new object 

3. What will be the output of the below code:

```js
var brothers = ['Bran', 'John'];
var user = {
  name: 'Sansa',
};
user.brothers = brothers;
brothers.push('Robb');
console.log(user.brothers === brothers); // true
console.log(user.brothers.length === brothers.length); // true
```
