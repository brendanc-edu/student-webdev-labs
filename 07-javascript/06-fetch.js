const url = "https://anapioficeandfire.com/api/books/";

const app = document.querySelector("#books");

const fetchData = async (url) => {
  // Fetch all books from the API of Ice and Fire and append them to the DOM
  // Create an element for each book that contains title, author, publication year, and number of pages
  // Update the styles in JavaScript to center all the books in the container given
  const loadingIndicator = document.getElementById("loading");
  const response = await fetch(url);
  const books = await response.json();

  loadingIndicator.style.display = "none";

  books.forEach((book) => {
    const bookElement = document.createElement("div");
    bookElement.innerHTML = `
          <h4>${book.name}</h4>
          <p>Author: ${book.authors.join(", ")}</p>
          <p>Published: ${book.released.split("T")[0]}</p>
          <p>Pages: ${book.numberOfPages}</p>
      `;
    app.appendChild(bookElement);
  });

  app.style.textAlign = "center";
};

fetchData(url);
