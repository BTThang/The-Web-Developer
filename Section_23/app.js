// function rollDie(num) {
//     if (num === undefined) {
//         num = 6
//     }

//     return Math.floor(Math.random() * num) + 1;
// }

function rollDie(num = 6) {
    return Math.floor(Math.random() * num) + 1;
}

function greet(person, msg = "Hey there") {
    console.log(`${msg}, ${person}! `)
}

const nums = [23, 435, 2543, 35, 43, 52, 4, 43, 534, 5345, 34, 534, 52, 3, 546, 2, 16, 765, 436, 567, 45];
Math.max(nums)
// NaN
Math.max(...nums)
// 5345

const feline = { legs: 4, family: 'Felidae' };
const canine = { isFurry: true, family: 'Caninae' };

const dataFromForm = {
    email: 'blueman@gmail.com',
    password: 'tobias123!',
    username: 'tfunke'
}

const newUser = { ...dataFromForm, id: 2345, isAdmin: false }

// Destructing
const scores = [9876, 45653, 4563, 76742, 856734, 8563, 8914, 9456];
const highScore = scores[0];
const secondHighSore = scores[1];

const [gold, silver, bronze, ...everyoneElse] = scores;


// Destructing obj
const user = {
    email: "harvey@gmail.com",
    password: "sfjkfjdsfjdsf",
    firstName: "Harvey",
    lastName: "Milk",
    born: 1930,
    died: 1978,
    city: "San Francisco",
    state: "Califirnia"
}

// const email = user.email;
// const 
const { email, firstName, lastName } = user;

const { city, state, died: deathYear = 'N/A' } = user;

function fullName(user) {
    const { firstName, lastName } = user;
    return `${user.firstName} ${user.lastName}`
}