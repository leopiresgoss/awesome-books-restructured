import { setDate } from './set-date.js';

export const updateDate = () => {
  window.setInterval(setDate, 1000);
}
