const forms = document.querySelector('#searchForm');


forms.addEventListener('submit', async function (e) {
    e.preventDefault();

    const searchTerm = forms.elements.query.value;
    const res = await axios.get(`https://api.tvmaze.com/singlesearch/shows?q=${searchTerm}`)
    // console.log(res.data.image.medium);
    // const img = document.createElement('IMG');
    // img.src = res.data.image.medium;
    // document.body.append(img)
    makeImages(res.data);
})

const makeImages = (shows) => {
    for (let result of shows) {
        // console.log(result);
        const img = document.createElement('IMG');
        img.src = result.show.image.medium;
        document.body.append(img)
    }
}

