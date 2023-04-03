document.querySelector('button').addEventListener('click', function (evt) {

    console.log(evt);

})

const input = document.querySelector('input');

// input.addEventListener('keydown', function () {
//     console.log("Key down");
// })


// input.addEventListener('keyup', function () {
//     console.log("KEY UP");
// })

// input.addEventListener('keydown', function (e) {
//     console.log(e.key)
//     console.log(e.code)
// })

window.addEventListener('keydown', function (e) {
    console.log(e.code);
    switch (e.code) {
        case 'ArrowUp':
            console.log("UP!")
    }
})