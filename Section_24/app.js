// getElementById Practice
// Let's get some practice using getElementById. I've provided a little bit of markup for you (please don't change it!)  Your goal is to write code in app.js to select the following elements using getElementById:

// Select the image element by its id and save it to a variable called image

// Select the h1 by its id and save it to a variable called heading

// Note: You may need to reset the code before attempting this exercise

// Write your code in here:
const image = document.getElementById('unicorn');

const heading = document.getElementById("mainheading");

// getElementById
// Phương thức getElementById() sẽ trả về phần tử có thuộc tính ID được cung cấp. 
// Phương thức này là một trong số những phương thức phổ biến nhất của HTML DOM, 
// nó được sử dụng rất thường xuyên để thao tác hoặc lấy thông tin của form hoặc một phần tử bất kỳ.

// Phương thức sẽ trả về Null nếu không có phần tử nào có thuộc tính ID được cung cấp.
// Một ID chỉ nên được sử dụng cho một phần tử, tuy nhiên nếu có nhiều phần tử cùng sử dụng một ID, \
// Phương thức sẽ trả về phần tử đầu tiên xuất hiện trên trang.


// getElementByTagName
// Phương thức getElementsByTagName() sẽ trả về tập hợp các 
// phần tử trong trang có tên thẻ được cung cấp khi gọi phương thức. 
// Kết quả sẽ được trả về dưới dạng một đối tượng NodeList object.

// Đối tượng NodeList object sẽ đại diện cho một danh sách các node, 
// người dùng có thể truy cập các node bằng chỉ số, các chỉ số sẽ được bắt đầu từ 0.
{/* <script>
            function myFunction(){
                var NodeObject = document.getElementsByTagName("h3");
                NodeObject[0].style.color = "red";
                NodeObject[1].style.color = "blue";
                NodeObject[2].style.color = "yellow";
            }
        </script> */}

// document.getElementsByTagName('p');

// const squareImages = document.getElementsByClassName('square');

// for(let img of squareImages){
//     img.src=''
// }

// getElementByClassName
// Phương thức getElementsByClassName() sẽ trả về tập hợp các phần tử trong trang có thuộc tính class 
// được cung cấp khi gọi phương thức. Kết quả sẽ được trả về dưới dạng một đối tượng NodeList object.

// Đối tượng NodeList object sẽ đại diện cho một danh sách các node, 
// người dùng có thể truy cập các node bằng chỉ số, các chỉ số sẽ được bắt đầu từ 0.
{/* <ul class="freetut">
<h3>Khóa học 1</h3>
<h3 class="demo"> Name: PHP</h3>
<h3 class="demo">Time: 48 Videos</h3>
<h3 class="demo">Author: Nguyễn Văn A</h3>
</ul>
<p id="result"></p>
<button onclick="myFunction()">Xem kết quả</button>
<script>
function myFunction(){
    var NodeObject = document.getElementsByClassName("demo");
    NodeObject[0].style.color = "red";
    NodeObject[1].style.color = "blue";
    NodeObject[2].style.color = "yellow";
}
</script> */}

// querySelector
// querySelectorAll

// Select class: .
// Select id: #

// Phương thức querySelector() sẽ trả về phần tử đầu tiên trong tập hợp 
// các kết quả được tìm thấy bởi CSS selector được cung cấp khi gọi phương thức.

// Lưu ý rằng sẽ chỉ có phần tử đầu tiên trong các kết quả được trả về. 
// Nếu bạn muốn trả về tất cả các phần tử được tìm thấy, sử dụng phương thức querySelectorAll().

// Nếu selector được cung cấp tìm theo id và id đó được sử dụng nhiều hơn một lần trong trang, 
// phương thức cũng sẽ chỉ trả về phần tử đầu tiên được tìm thấy

// Cú pháp: document.querySelector(CSS selectors)

// Css selectors là một chuỗi xác định một hoặc một số selector
//  để tìm kiếm các phần tử HTML dựa vào id, classes, types, attributes, values of attributes ... của chúng.


const allImages = document.getElementsByTagName('img');

for (let img of allImages) {
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg'
}


const squareImages = document.getElementsByClassName('square');

for (let img of squareImages) {
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
}

const links = document.querySelectorAll('p a');

for (let link of links) {
    console.log(link.href)
}

// ================================
const allLinks = document.querySelectorAll('a');
// Thay the tat ca link bang I am a Link
// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!!!'
// }

// document.querySelector('h1').innerText = 'ererew'
// document.querySelector('p').innerHTML = '<b>rerewrew</b>'

// Attribute

// document.querySelector('#banner').id = 'whoop';
document.querySelector('a').title

const firstLink = document.querySelector('a')
firstLink.href
firstLink.getAttribute('href')
firstLink.getAttribute('id')
firstLink.getAttribute('class')
firstLink.getAttribute('title')
firstLink.setAttribute('href', 'http://www.google.com')

document.querySelectorAll('input')[1]
// {/* <input type=​"text">​ */}


// Change Style

const h1 = document.querySelector('h1');
// undefined
h1.style.color
// 'magenta'
h1.style.color = 'green'
// 'green'
h1.style.fontSize = '3em'
// '3em'
h1.style.border = '2px solid pink'
// '2px solid pink'

const allLink = document.querySelectorAll('a');

for (let link of allLink) {
    link.style.color = 'rgb(0, 108, 134)'
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy';
    link.style.borderRadius
}

const h2 = document.querySelector('#container');
h2.style.textAlign = 'center';
const image = document.querySelector('img')
image.style.width = '150px'
image.style.borderRadius = '50%'

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

//YOU CODE GOES HERE:

const change = document.querySelectorAll('span');

for (let i = 0; i < change.length; i++) { change[i].style.color = colors[i] }

// ClassList======
// const h2 = document.querySelector('h2');
// undefined
// h2.getAttribute('class');
// null
// h2.setAttribute('class', 'border');
// undefined
// h2.setAttribute('class', 'purple');
// undefined

const h2 = document.querySelector('h2')
undefined
h2.classList
DOMTokenList[value: '']length: 0value: ""[[Prototype]]: DOMTokenList
h2.classList.add('purple')
undefined
h2.classList.add('border')