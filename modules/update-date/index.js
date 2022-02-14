import setDate from './set-date.js';

export default function updateDate() {
  window.setInterval(setDate, 1000);
}
