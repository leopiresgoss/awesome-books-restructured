import { BookShelf, displayBooks } from './modules/render-books/index.js';
import { setListeners } from './modules/set-listeners/index.js';

// display all books
const gBookShelf = new BookShelf();
displayBooks(gBookShelf);
setListeners(gBookShelf);