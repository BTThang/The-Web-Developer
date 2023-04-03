const container = document.querySelector('#container');
// const newImg = document.createElement('img');
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
// container.appendChild(newImg);


for (let i = 1; i < 150; i++) {
    const pokemon = document.createElement('div');
    pokemon.classList.add('pokemon');
    const label = document.createElement('span');
    label.innerText = `#${i}`;
    const newImg = document.createElement('img');
    newImg.src = `${baseURL}${i}.png`
    container.appendChild(newImg)
    container.appendChild(label);
    container.appendChild(pokemon);
}

// {/* <div>

//     <img>
//         <span>2</span>
//     </img>
// </div> */}