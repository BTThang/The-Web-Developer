// const btn = document.querySelector('#v2');

// btn.onClick = function () {
//     console.log("You Click Me!!");
//     console.log("I hope it worked!!");

// }

// function scream() {
//     console.log("AAAAAAAAhhh");
//     console.log("STOP TOCHING ME !!!")
// }

// btn.onmouseenter = scream;

// document.querySelector('h1').onClick = () => { alert('You clicked the button') }


// const btn3 = document.querySelector('#v3');
// btn3.addEventListener('dblclick', function () {
//     alert("Clicked!!")
// })

// function twist() {
//     console.log("Twist!")
// }
// function shout() {
//     console.log("Shout!")
// }

// const tasButton = document.querySelector('#tas');
// // tasButton.onClick = twist;
// // tasButton.onClick = shout;

// tasButton.addEventListener('click', twist, { once: true });
// tasButton.addEventListener('click', shout);

// =============Random color===========
// const button = document.querySelector('button');
// const h1 = document.querySelector('h1');
// button.addEventListener('click', function () {
//     // console.log("Click haha");
//     // document.body.style.backgroundColor = 'olive'

//     const newColor = randomColor();
//     document.body.style.backgroundColor = newColor;
//     h1.innerText = newColor;
// })

const randomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

const buttons = document.querySelectorAll('button');

for (let button of buttons) {
    button.addEventListener('click', colorize)
};


const h1s = document.querySelectorAll('h1');
for (let h1 of h1s) {
    h1.addEventListener('click', function () {
        console.log(this);

        this.style.backgroundColor = randomColor();
        this.style.color = randomColor();
    })
}

function colorize() {
    this.style.backgroundColor = randomColor();
    this.style.color = randomColor();

}