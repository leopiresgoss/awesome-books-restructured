export default class BookShelf {
  constructor() {
    this.#loadDataFromStorage();
  }

  #loadDataFromStorage() {
    this.bookList = JSON.parse(window.localStorage.getItem('bookshelf'));
    if (!this.bookList) this.bookList = [];
  }

  saveData() {
    window.localStorage.setItem('bookshelf', JSON.stringify(this.bookList));
  }

  addBook(title, author) {
    let index = 0;
    if (this.bookList.length !== 0) {
      index = this.bookList[this.bookList.length - 1].id + 1;
    }
    this.bookList.push({
      id: index,
      title,
      author,
    });
  }

  removeBook(id) {
    this.bookList = this.bookList.filter((book) => book.id !== Number(id));
  }
}