const validatePaymentValue = (paymentValue) => {
  if (typeof(paymentValue) !== 'number') {
    return message = 'payment must be a number';
  }

  const numberToString = paymentValue.toString();
  const [reais, centavos] = numberToString.split('.');
  if(centavos.length > 2) return message = 'são aceitas apenas duas casas decimais nos centavos';

  return true;
}; 


module.exports = {
  validatePaymentValue,
};
