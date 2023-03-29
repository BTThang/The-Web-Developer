// for (let i = 1; i <= 1; i++) {
//     console.log(i);
// }

// const animal = [
//     "Carp – /kɑrp/: Cá chép",
//     "Cod -/kɑd/: Cá tuyết",
//     "Crab – /kræb/: Cua",
//     "Eel – /il/: Lươn",
//     "Goldfish -/’ɡoʊld,fɪʃ/: Cá vàng",
//     "Jellyfish – /dʒɛli,fɪʃ/: Sứa",
//     "Lobster – /lɑbstər/: Tôm hùm",
//     "Perch – /pɜrʧ/: Cá rô",
//     "Plaice – /pleɪs/: Cá bơn",
//     "Ray – /reɪ/: Cá đuối",
//     "Salmon – /sæmən/: Cá hồi",
//     "Sawfish – /sɑfɪʃ/: Cá cưa",
//     "Scallop – /skɑləp/: Sò điệp",
//     "Shark – /ʃɑrk/: Cá mập",
//     "Shrimp – /ʃrɪmp/: Tôm",
//     "Trout – /traʊt/: Cá hương",
//     "Octopus – /’ɔktəpəs/: Bạch tuộc"
// ];

// for (let ani = 0; ani <= animal.length - 1; ani++) {
//     console.log(ani, animal[ani]);
// }

// for (let i = 1; i <= 10; i++) {
//     console.log(`i is: ${i}`)
//     for (let j = 1; j < 4; j++) {
//         console.log(`          j is: ${j}`);
//     }
// }

// const seatingChart = [
//     ['Luffy', 'Zoro', 'Nami'],
//     ['Robin', 'Ussop', 'Brook', 'Jinbe'],
//     ['Sanj', 'Chooper', 'Shank', 'BigMom']
// ]

// for (let i = 0; i < seatingChart.length; i++) {
//     const row = seatingChart[i];
//     console.log(`Row: ${i + 1}`);
//     for (let j = 0; j < row.length; j++) {
//         console.log(row[j]);
//     }
// }

// let count = 0;
// while (count < 10) {
//     console.log(count);
//     count++;
// }

// let maximum = parseInt(prompt("Enter the maximum number!"));

// while (!maximum) {
//     maximum = parseInt(prompt("Enter a valid number!"));
// }

// const targetNum = Math.floor(Math.random() * maximum) + 1;
// console.log(targetNum);

// let guess = prompt("Enter your first guess!");
// let attempts = 1;

// while (guess !== targetNum) {
//     attempts++;
//     if (guess > targetNum) {
//         guess = parseInt(prompt("Too high! Enter a new guess:"));
//     } else {
//         guess = parseInt(prompt("Too low! Enter a new guess:"));
//     }
// }
// console.log(`You got it!!!! It took you ${attempts} guess`);


// const subreddits = ['cringe', 'book', 'chicken', 'funny', 'pics', 'soccer']

// for (let i = 0; i < subreddits.length; i++) {
//     console.log(`Visit reddit.com/r/${subreddits}`)
// }

// for (let sub of subreddits) {
//     console.log(sub);
// }


const testScore = {
    Luffy: 7,
    Zoro: 9,
    Nami: 10,
    Robin: 10,
    Ussop: 9,
    Brook: 8
}

for (let person in testScore) {
    console.log(`${person} scored ${testScore[person]}`);

}

let total = 0;
for(let score of Object.values(testScore)){
    total +=score;
}