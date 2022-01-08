
// 1. Write the output with reason


const person = {
  firstName: 'John',
  lastName: 'Doe',
};

let person2 = person; // we have copied the memory address  of person  object  Example 123 into person 2 now person 2 also  have 123 memory address 

person.firstName = 'Arya'; 

// Assume person hold a memory address of where the  object is stored in the memory 

 // we  have  updated 123 of  firstName = "Arya"; and person 2 has also same  address 123  .
console.log(person2.firstName); // Arya  //  123 firstname =  Arya 
console.log(person.firstName); // Arya // 123  firstname = Arya
console.log(person.lastName); //  Doe  // 123 firstname = Doe
console.log(person == person2); //  true = 123 == 123
console.log(person === person2); // true 123=== 123
console.log(person.lastName === person2.lastName); //  true  123.lastName === 123.lastName


// 2. Write the output with reason:


let person = {
  firstName: 'John',
  lastName: 'Doe',
  address: {
    street: 'North 1st',
    city: 'San Jose',
    state: 'CA',
    country: 'USA',
  },
};

let personTwo = { ...person }; //  cloned all the values of  person into person two with the  help of spread operator 
// a new object is created with a new memory location  but all the values are cloned  from  the  person


// suppose  person   variable hold  a  memory address of  101   
person.firstName = 'Arya'; //  101.firstName  = 'Arya'; updated the firstname value
person.city = 'Navada'; // 101 of city does not exits in 101  so it creates  a new property city with a value of 'Navada' . City exits inside  a another object  but only outside  as  a property of 101    


// suppose personTwo now  has a momory address 103
console.log(personTwo.firstName);// john  //103.firstName  : has a value of john
console.log(person.firstName); // Arya // becuase  we have updated the previos value of 101.firstName to Arya
console.log(personTwo.lastName); // Doe  // 103.lastName  has  value of Doe of lastname
console.log(person.firstName === personTwo.firstName); // false // comparing two different object at differnet location // 101  and 103
console.log(person == personTwo); // false // comparing two different object at differnet location // 101  and 103
console.log(person === personTwo); // false   // comparing two different object at differnet location // 101  and 103
console.log(person.address === personTwo.address); // false //  comparing two different object at differnet location // 101  and 103
console.log(person.address == personTwo.address);// false // comparing two different object at differnet location // 101  and 103
console.log(personTwo.address.city); // San jose // 103.address.city  has  a value of San jose
console.log(person.address.city); // San jose // 101.address.city  has  a value of San jose
console.log(person.address.city == personTwo.address.city); // false //// comparing two different object at differnet location // 101  and 103





// 3. Write the output with reason:

let person = {
  firstName: 'John',
  lastName: 'Doe',
  address: {
    street: 'North 1st',
    city: 'San Jose',
    state: 'CA',
    country: 'USA',
  },
};


// Suppose perosn has  a mmemory address 101  and   person 2 has a memory address 102
let personTwo = { ...person, address: { ...person.address } }; // Deep  cloning   javascript  only does shallow cloning but itself but  so for deep clone we have also cloned  address object also

person.firstName = 'Arya'; // 101 of  firstName get updated ot Arya
person.city = 'Navada'; //101 of city does not exits in 101  so it creates  a new property city with a value of 'Navada' . City exits inside  a another object  but only outside  as  a property of 101    



console.log(personTwo.firstName); // John // 102.firstName prints john because 102.firstName has  a memory address  of 102
console.log(person.firstName); // Arya // 101 of  firstName get updated ot Arya so output is Arya
console.log(personTwo.lastName); // output
console.log(person.firstName === personTwo.firstName); //  false //  101  is not equal to 102
console.log(person == personTwo); //  false //  101  is not equal to 102
console.log(person === personTwo); //  false //  101  is not equal to 102
console.log(person.address === personTwo.address); //  false //  101  is not equal to 102
console.log(person.address == personTwo.address); //  false //  101  is not equal to 102
console.log(personTwo.address.city); // San jose // 101.adderss.city  has  a value of San jose
console.log(person.address.city); // San jose // / 102.adderss.city  has  a value of San jose
console.log(person.address.city == personTwo.address.city); // false how showing true how it can be possible 
// because  101 of address has a different memory address and 102 of address  has also  a differnet memory address .





// 4. Clone the `blogs` variable into a new variable named `clonedBlogs`



let blogs = [
  {
    id: 1,
    title: 'Post #1',
    body: 'My first blog post',
  },
  {
    id: 2,
    title: 'Post #2',
    body: 'My second blog post',
  },
  {
    id: 3,
    title: 'Post #3',
    body: 'My third blog post',
  },
];

let clonedBlogs = {...blogs} ; // cloned all the values of  blogs into clonedBlogs with the  help of spread operator 





// 5. Clone the `question` variable into a new variable named `questionClone`


var questions = [
  {
    prompt: 'Why is the sky blue?',
    responses: [
      'Because the color blue was on sale at Wallmart',
      'Because blue is the prettiest color',
      'Because the air molecules difract blue light more than any other color',
    ],
  },
  {
    prompt: 'Why are leaves usually green?',
    responses: [
      'So green caterpillars can hide better.',
      'Because leaves can more easily make energy with green light',
      "Because leaves absorb red and blue light so it's green that is reflected",
    ],
  },
];

let questionClone = { ...questions, responses: { ...questions.responses }}; // Deep cloned the question into  a  new variable called questionClone


// 6. Clone the `allBlogs` variable into a new variable named `allBlogsClone`


var allBlogs = {
  id: 1,
  title: 'Alamofire JSON Serialization',
  body: 'All about serialization in Alamofire...',
  author: {
    id: 1,
    fullName: 'Jeff Potter',
    username: 'jpotts18',
  },
  comments: [
    {
      id: 1,
      body: 'Thanks for the help Jeff, this saved me hours',
    },
    {
      id: 2,
      body: 'Your welcome. I am happy to help!',
    },
  ],
};

let allBlogsClone = { ...allBlogs ,author:{ ...allBlogs.author}, comments:{ ...allBlogs.comments} }; // deep cloned


7. Clone the `person` variable into a new variable named `clonedPerson`
let person = [
  {
    input: { name: 'Ryan' },
    output: { name: 'Ryan' },
  },
  {
    input: { name: { first: 'Ryan', last: 'Haskell-Glatz' } },
    output: { firstName: 'Ryan', lastName: 'Haskell-Glatz' },
  },
  {
    input: { name: 'Ryan', age: 24 },
    output: { name: 'Ryan', age: 24 },
  },
  {
    input: {
      name: { first: 'Ryan', last: 'Haskell-Glatz' },
      birthday: { year: 1993, month: 'Nov' },
    },
    output: {
      firstName: 'Ryan',
      lastName: 'Haskell-Glatz',
      birthdayYear: 1993,
      birthdayMonth: 'Nov',
    },
  },
];

let clonedPerson = {...person };



// 8. Write a function named `cloneObject` that accepts an object and returns the clone of the object


function cloneObject(user) {
  let clone  = {... user };
  return  clone ;

}

// Run the test below to check your function

let user = {
  name: 'John',
  house: 'Stark',
  sisters: ['Arya', 'Sansa'],
};
let cloned = cloneObject(user);

let person = {
  firstName: 'John',
  lastName: 'Doe',
  address: {
    street: 'North 1st',
    city: 'San Jose',
    state: 'CA',
    country: 'USA',
  },
};

let clonedPerson = cloneObject(user);

console.log(
  `The user object is ${
    user == cloned ? `not clone` : `cloned successfully 😁👑` //  not equal both have different address so  clone successfully because after cloning the memory address got changed
  }`
);
console.log(
  `The person object is ${
    person == clonedPerson ? `not clone` : `cloned successfully 😁👑` // not equal both have different address so  clone successfully because after cloning the memory address got changed
  }`
);

