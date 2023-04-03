const form = document.querySelector("#shelterForm");
const input = document.querySelector("#catName");
const list = document.querySelector('#cats')

form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("Submitted!!!");
    // console.log(input.value);
    const catName = input.value;
    const newLI = document.createElement("LI");
    newLI.innerText = catName;
    // console.log(newLI);
    list.append(newLI);
    input.value = ""
});

const tweetForm = document.querySelector('#tweet')
const tweetsContainer = document.querySelector('#tweets')
tweetForm.addEventListener('submit', function (e) {
    e.preventDefault();
    // const usernameInput = document.querySelectorAll('input')[1];
    // const tweetInput = document.querySelectorAll('input')[2];
    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;

    addTweet(usernameInput.value, tweetInput.value);
    usernameInput.value = "";
    tweetInput.value = "";



    // newTweet.append(`-${tweet}`);
    // console.log(newTweet);
    // // console.log(usernameInput.value, tweetInput.value);
    // console.log("Subnmit!!")

    // tweersContainer.append(newTweet)
});

const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    newTweet.append(username);
    newTweet.append(bTag);
    newTweet.append(`-${tweet}`);
    tweetsContainer.append(newTweet)

}

// 


// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form1 = document.querySelector('form');
const ul = document.querySelector('#list');

form1.addEventListener('submit', function (e) {
    e.preventDefault();

    const productInput = form1.elements.product;
    const qualityInput = form1.elements.qty;

    addProduct(productInput.value, qualityInput.value)
    productInput.value = "";
    qualityInput.value = "";

})

const addProduct = (product, quantity) => {
    const li = document.createElement('li');
    li.innerText = `${quantity} ${product}`;
    list.appendChild(li);

}
