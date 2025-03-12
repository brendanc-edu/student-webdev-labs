const url = "https://anapioficeandfire.com/api/books/";

const app = $("#books");
app.css("padding-left", "0");
const loading = $("#loading");

const addBookToDOM = (item) => {
  console.log(item);
  let element = $("<div>").css({
    display: "flex",
    "flex-direction": "column",
    "align-items": "center",
    "margin-top": "20px",
  });

  let title = $("<h4>").text(item.name);
  let author = $("<p>").text(`by ${item.authors[0]}`);
  let published = $("<p>").text(`Published: ${item.released.substr(0, 4)}`);
  let pages = $("<p>").text(`${item.numberOfPages} pages`);

  element.append(title, author, published, pages);
  app.append(element);
};

const fetchData = (url) => {
  $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
  })
    .done((data) => {
      data.forEach((item) => addBookToDOM(item));
    })
    .fail((error) => {
      console.log(error);
      let li = $("<li>").text("An error occurred. Please try again.");
      app.append(li);
    })
    .always(() => {
      loading.remove();
    });
};

fetchData(url);
