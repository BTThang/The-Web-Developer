function singSong() {
    console.log("DO");
    console.log("RE");
    console.log("MI");
}

function greet(firstName) {
    console.log(`firstName is: ${firstName}`);
    console.log("HI!");
}

// rollDie(6)
function rant(message) {
    let p = message.toUpperCase();
    for (let i = 0; i <= 3; i++) {
        console.log(`${p}`);
    }
}

rant("Xin chao");

function isSnakeEyes(in1, in2) {
    if (parseInt(in1) === parseInt(in2) && parseInt(in1) === 1) {
        console.log("Snake Eyes!");
        // console.log(`"Snake Eyes!"(${in1},${in2})`);
    } else {
        console.log("Not Snake Eyes!");
    }

}

isSnakeEyes("2", "2");
function multiply(in1, in2) {
    return parseInt(in1 * in2);
}