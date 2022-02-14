import { displayBooks } from '../render-books/index.js';
import { navToSection } from './nav-to-section.js';

export const setListeners = (gBookShelf) => {
  document.addEventListener('click', (e) => {
    if (e.target.matches('.remove-book')) {
      gBookShelf.removeBook(e.target.dataset.id);
      displayBooks(gBookShelf);
    }
    if (e.target.matches('.add-btn')) {
      const title = document.getElementById('title');
      const author = document.getElementById('author');
      if (!title.checkValidity()) {
        title.reportValidity();
        return;
      }
      if (!author.checkValidity()) {
        author.reportValidity();
        return;
      }
      gBookShelf.addBook(title.value, author.value, gBookShelf.bookList);
      title.value = '';
      author.value = '';
      displayBooks(gBookShelf);
    }
    if (e.target.matches('.navlinks li a')) {
      const { href } = e.target;
      const index = href.indexOf('#');
      const section = href.substring(index);
      navToSection(e.target, section);
    }
  });
}