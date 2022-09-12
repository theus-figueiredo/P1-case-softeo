const moment = require('moment');

const stringToMomentDate = (stringDate) => {
  return moment(stringDate, 'DD/MM/YYYY');
}

const installmentDates = (inicialDate, installments) => {
  const allInstallmentDates = [];
  
  for (let i = 0; i < installments; i += 1) {
    const nextInstallment = stringToMomentDate(inicialDate).add(i, 'month');
    allInstallmentDates[i] = nextInstallment
  };

  return allInstallmentDates;
};

const stringDateToObject = (stringDate) => {
  const objDate = moment(stringDate, 'DD/MM/YYYY');
  return objDate;
};

module.exports = {
  installmentDates,
  stringDateToObject,
};
