
// const req = new XMLHttpRequest();

// req.onload = function () {
//     console.log("IT LOADED!!!");
//     console.log(this.responseText);
//     const data = JSON.parse(this.responseText);
//     console.log(data);

// };

// req.onerror = function () {
//     console.log("ERROR!!!");
//     console.log(this);
// };


// req.open("GET", "https://swapi.dev/api/people/1/");
// req.send();

// fetch("https://swapi.dev/api/people/1/")
//     .then(res => {
//         console.log("RESOLVED", res);
//         return res.json();
//         // .then(data => console.log("JSON DONE", data));
//     })
//     .then(data => {
//         console.log(data);
//         return fetch("https://swapi.dev/api/people/2/")
//     })
//     .then(res => {
//         console.log("SECOND REQUEST RESOLVED!!!")
//         return res.json;
//         // return fetch("https://swapi.dev/api/people/2/");
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((e) => {
//         console.log("ERROR!", e);
//     })

const loadStarWarsPeople = async () => {
    const res = await fetch("https://swapi.dev/api/people/1/");
    const data = await res.json();
    console.log(data);
};

loadStarWarsPeople();