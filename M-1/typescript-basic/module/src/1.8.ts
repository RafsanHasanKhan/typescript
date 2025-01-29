// destructuring


// Object destructuring
const user = {
  id: 345,
  name: {
    firstName: 'rafsan',
    middleName: 'hasan',
    lastName: 'khan',
  },
  contactNo: '01700245552',
  address: 'uganda'
};

const { contactNo, name: { middleName } } = user;

// Array destructuring

const myFriends = ['rafsan', 'hasan', 'khan', 'rifat']

const [,, c, ...rest] = myFriends;