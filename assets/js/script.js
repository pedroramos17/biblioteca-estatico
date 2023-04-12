import data from "../data/data.json" assert { type: "json" };

let books = [];
const searchInput = document.getElementById("searchInput");

books = data.map((book) => {
  return {
    title: book.title,
    image: book.image,
  };
});

searchInput.addEventListener("input", (e) => {
  const inputValue = e.target.value;
  const filteredBooks = books
    .filter((book) => {
      return book.title.toLowerCase().includes(inputValue.toLowerCase());
    })
    .map((book) => {
      const searchContainer = document.getElementById("searchContainer");

      return (searchContainer.innerHTML = `<div class="book-search">
      <img src="${book.image}" alt="${book.title}" />
      <p>${book.title}</p>`);
    });
  if (inputValue === "") {
    displayMain();
  } else {
    displaySearchedBooks();
  }
  console.log(filteredBooks);
});

function displayMain() {
  const searchContainer = document.getElementById("searchContainer");
  searchContainer.className = " none";

  const mainContainer = document.getElementById("main");
  mainContainer.className = " main-container";
}

function displaySearchedBooks() {
  const searchContainer = document.getElementById("searchContainer");
  searchContainer.className = " searchBooksContainer";

  const mainContainer = document.getElementById("main");
  mainContainer.className = " none";
}

function listItem(books) {
  books.map((book) => {
    const bookList = document.getElementById("bookList");
    const HTMLElementBook = (bookList.innerHTML += ` 
  <div class="book-container">
  <img src="${book.image}" alt="${book.title}" />
  <p>${book.title}</p>
</div>`);
    return HTMLElementBook;
  });
}

if (bookList == document.getElementById("bookList")) {
  listItem(books);
}
