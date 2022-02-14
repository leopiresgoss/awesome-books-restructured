import { BookShelf } from './book-shelf.js';
import { displayBooks } from './display-books.js';

export const renderBooks = () => {
  const gBookShelf = new BookShelf();
  displayBooks(gBookShelf);
  return gBookShelf;
} 
