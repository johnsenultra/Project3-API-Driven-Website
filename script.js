const api = "https://api.quotable.io/random";

let quote = document.querySelector('#quote');
let author = document.querySelector('#author');
let btn = document.querySelector('#generateBtn');

try {
  let getQuote = () => {
    fetch(api)
    .then(response => response.json())
    .then(item => {
      quote.textContent = item.content;
      author.textContent = item.author;
    });
  };
  btn.addEventListener('click', getQuote);
} catch (error) {
  alert("There was an error", error)
}
