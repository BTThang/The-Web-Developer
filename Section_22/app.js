// Syntax: forEach
// Array.forEach(function (currentValue, index, arr), thisValue)
// - currentValue: gia tri cua phan tu hien tai 
// - index: chi so cua phan tu hien tai.
// - arr: mang ma phan tu hien tai thuoc ve. 
// - thisValue: tham so khong bat buoc

let ranks = ['A', 'B', 'C'];
ranks.forEach(function (e) {
    console.log(e);
})
// ==========================================
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];


function print(element) {
    console.log(element)
}

number.forEach(print);

number.forEach(function (e) {
    if (e % 2 === 0) {
        console.log(e);
    }
})

// ===========================================
const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand By Me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 95
    }
]

movies.forEach(function (e) {
    console.log(`${e.title} - ${e.score}/100`);
})

movies.forEach((e) => {
    console.log(`${e.title} - ${e.score}/100`);
})

// Hàm map() sẽ lặp qua từng phần tử của mảng, 
// tham số truyền vào là một anonymous function.
// Hàm anonymous sẽ có một tham số truyền vào và đó chính là phần tử của mỗi vòng lặp, 
// bên trong thân hàm anonymouse sẽ có lệnh return về một giá trị 
// // và giá trị này sẽ thay thế cho phần tử đó.


// Syntax: 
// Array.map(function(item){
//     // item chinh la phan tu dang lap;
//     return item;
//     // Gia tri tra ve se thay the cho gia tri ban dau cua phan tu
// })

// ==============================
var domain = [
    "freetuts.net",
    "techtuts.net",
    "simpletutorials.org"
];

domain.map(function (item) {
    console.log(item);
});

const titles = movies.map(function (movie) {
    return movie.title;
})

// const newMovies = movies.map(function (movie){
//     return '${movie.title} - ${movie.score/10}'
// })



const fullNames = [{ first: 'Albus', last: 'Dumbledore' }, { first: 'Harry', last: 'Potter' }, { first: 'Hermione', last: 'Granger' }, { first: 'Ron', last: 'Weasley' }, { first: 'Rubeus', last: 'Hagrid' }, { first: 'Minerva', last: 'McGonagall' }, { first: 'Severus', last: 'Snape' }];

// Write your code here
const firstNames = fullNames.map(function (n) {
    return n.first;

})

const add = (x, y) => {
    return x + y;
}

const greet = (x) => {
    return `Hey ${x}!`;
};

// Neu su dung dau ngoac don thay cho dau ngoac nhon
// No se tu return ngam dinh ma khong can goi ham return
const newMovies = movies.map(movie => ('${movie.title} - ${movie.score/10}'));


// ======================
console.log("Hello")
setTimeout(() => {
    console.log("Are you still there?")
}, 3000);

// setInterval(() => {
//     console.log(Math.random())
// }, 2000)

// ===========
// Filter Method
// Syntax: 
// objectArray.filter(function(value){
//     return true/false;
// })

const odd = number.filter(n => {
    return n % 5 === 0;
});

const goodMovies = movies.filter(m => m.score > 95);

// function validUserNames(arr) {
//     return arr.filter(name => name.length < 10);
// }

const validUserNames = usernames => usernames.filter(usr => usr.length < 10);

// ===============every==========
const exams = [80, 90, 80, 30, 40, 50, 49, 58, 30, 67, 78]

exams.every(score => score >= 70);

const events = function allEvens(num) {
    return num.every(even => even % 2 === 0);
}

// =============Reduce=============

// Ham reduce se duyet qua tung thanh phan cuar mang, sau do tra ve gia tri cuoi cung
// Syntax:
// array.reduce((total, currentValue, currentIndex, arr) => {...}, initialValue);
// total - giá trị trả lại trước đó của function, chính là giá trị của lệnh return cho mỗi lần lặp.
// - currentValue - giá trị của phần tử hiện tại.
// - currentIndex- chỉ số của phần tử hiện tại.
// - arr - mảng mà phần tử hiện tại thuộc về.
// - initialValue - tham số không bắt buộc. Nếu được truyền vào thì initialValue sẽ được sử dụng làm giá trị ban đầu, còn không thì nó sẽ lấy giá trị của phần tử đầu tiên. Nếu mảng 
// cần reduce rỗng thì bạn phải truyền giá trị này, nếu không sẽ bị báo lỗi.


const prices = [9.99, 1.5, 234, 34, 33.5, 34.5, 32, 43, 31.5]

const totals = prices.reduce((total, prices) => {
    return total + prices;
})

const minPrice = prices.reduce((min, prices) => {
    if (prices < min) {
        return prices;
    }
    return min;
})


// =======================
const person = {
    firstName: "Viggo",
    lastName: "Mortensen",
    fullName: () => {
        '${this.firstName} ${this.lastName}'
    },

    shoutName: function () {
        setTimeout(() => {
            console.log(this);
            console.log(this.fullName());
        }, 3000)
    }
}