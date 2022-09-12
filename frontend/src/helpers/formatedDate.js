export default function formatedDate(date) {
  const [year, month, day] = date.split('-');
  return [day, month, year].join('/');
};
