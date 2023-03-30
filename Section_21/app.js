const square = function (a) {
    return a * a;
}

const sq = function (num) {
    return Math.pow(num, 2);
}


function callTiwce(func) {

    func();
    func();
}
function rollDie() {

    const roll = Math.floor(Math.random() * 6) + 1
    console.log(roll)

}

// callTiwce(rollDie);

function makeMyFunc() {
    const rand = Math.random();

    if (rand > 0.5) {
        return function () {
            console.log("Congrats, I am a good function!!")
        }
    } else {
        return function () {
            alert("You have been infected by a computer virus");
            alert("Stop trying to close this window!!");

        }
    }

}

const myMath = {
    PI: 3.14159,
    squa: function (num) {
        return num * num;
    },
    cube: function (nu) {
        return nu ** 3;
    }
}

const squareeeee = {

    area: function (num) {
        return num * num;
    },
    perimeter: function (num) {
        return num * 4;
    }

}

const cat = {
    name: "Blue Steele",
    color: "gray",
    breed: 'scottish fold',
    meow() {
        console.log(`${this.name} says Meowwww`);
    }
}

// Define an object called hen.  It should have three properties:

// name should be set to 'Helen'

// eggCount should be set to 0

// layAnEgg should be a method which increments the value of eggCount by 1 and returns the string "EGG".  You'll need to use this.

// hen.name // "Helen"
// hen.eggCount // 0
// hen.layAnEgg() // "EGG"
// hen.layAnEgg() // "EGG"
// hen.eggCount // 2

const hen = {

    name: "Helen",
    eggCount: 0,
    layAnEgg() {
        // console.log("EGG");
        this.eggCount += 1;
        return 'EGG';
    }
};

