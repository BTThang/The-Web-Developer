
const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');
// button.addEventListener('click', addNewJoke)


const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    console.log(jokeText);
    const newLI = document.createElement('LI');
    newLI.append(jokeText);
    jokes.append(newLI);
}

const getDadJoke = async () => {
    try {
        const config = { header: { Accept: 'application/json' } }
        const res = await axios.get('https://icanhazdadjoke.com/', config);
        console.log(res.data.joke)
        return res.data.joke;

    } catch (e) {
        return "NO JOKES AVAILABLE!"
    }

}

button.addEventListener('click', addNewJoke);