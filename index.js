import { BookShelf, displayBooks } from './modules/render-books/index.js';
import { setListeners } from './modules/set-listeners/index.js';
import { updateDate } from './modules/update-date/index.js';

// display all books
const gBookShelf = new BookShelf();
displayBooks(gBookShelf);
setListeners(gBookShelf);

// update user's datetime
updateDate();
