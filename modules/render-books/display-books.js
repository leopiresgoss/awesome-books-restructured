export const displayBooks = (gBookShelf) => {
  const { bookList } = gBookShelf;
  gBookShelf.saveData(bookList);
  const booksContainer = document.querySelector('.books-container');
  const booksTemplate = document.getElementById('books-template');
  booksContainer.innerHTML = '';
  bookList.forEach((book) => {
    const bookCard = booksTemplate.content.cloneNode(true).children[0];
    bookCard.querySelector('.title').textContent = book.title;
    bookCard.querySelector('.author').textContent = book.author;
    bookCard.querySelector('.remove-book').setAttribute('data-id', book.id);
    booksContainer.appendChild(bookCard);
  });
}