import { ordinalDay } from './ordinal-day.js';

export const setDate = () => {
  let date = luxon.DateTime.now();
  const {
    day,
    year
  } = date;

  const month = date.toLocaleString({ locale: 'en-gb', month: 'long' });
  const time = date.toLocaleString({ locale: 'en-gb', hour: 'numeric', minute: 'numeric', second: 'numeric' });
  const updatedDay = ordinalDay(day);
  
  const fullDate = `${month} ${updatedDay} ${year}, ${time}`;
  document.querySelector('.datetime p').textContent = fullDate;
}
