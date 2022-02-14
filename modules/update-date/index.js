import setDate from './set-date.js';

const updateDate = () => {
  window.setInterval(setDate, 1000);
};

export default updateDate;
