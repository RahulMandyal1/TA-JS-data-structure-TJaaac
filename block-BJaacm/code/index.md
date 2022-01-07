```js
let user = {
  name: 'Arya',
  sibling: ['Robb', 'Ryan', 'John'],
};
let allBrothers = ['Robb', 'Ryan', 'John'];
let brothersCopy = user.sibling;
let username = user.name;
let newUser = user;
```

1. Memory representation

- Create the memory representation of the above snippet on notebook.
- Take a photo/screenshot and add it to the folder `code`

<!-- To add this image here use ![name](./hello.jpg) -->

2. Answer the following with reason:

- `user == newUser;` // true // Both the variable hold the same   address of the memory block that has the object 
- `user === newUser;` // true  // Both the variable hold the same   address of same type  
- `user.name === newUser.name;` //true Both the variable hold the same  value of the  key named name and has same type
- `user.name == newUser.name;`//true  Both the variable hold the same  value of the  key named name
- `user.sibling == newUser.sibling;` // true Both the variable hold the same  value of the  key named sibling
- `user.sibling === newUser.sibling;` // true Both the variable hold the same  value of the  key named sibling that has same type
- `user.sibling == allBrothers;`  // false user is a object where allBorthers  is a array
- `user.sibling === allBrothers;` // false   user is a object where allBorthers  is a array
- `brothersCopy === allBrothers;`  // false brotherCopy is a object whereas allBorthers  is a array
- `brothersCopy == allBrothers;` // false    brotherCopy is a object whereas allBorthers is a array
- `brothersCopy == user.sibling;` //  // true  because brotherCopy is  also object and hold same value . 
- `brothersCopy === user.sibling;`//  true  because brotherCopy is  also object and hold same value . 
- `brothersCopy[0] === user.sibling[0];` // true  because both  hold the same  value
- `brothersCopy[1] === user.sibling[1];` // true Because both hold the  same value
- `user.sibling[1] === newUser.sibling[1];` // true Both obejct hold same value

