// Generate an unique key :
export const generateKey = (data) => `${data}_${new Date().getTime()}`;

export function validateEmail (email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export function validateNumber (num) {
  const re = /^[0-9]*$/;
  return re.test(Number(num));
}

export function isSiret (siret) {
  return !!(validateNumber(siret) && siret.toString().length === 14);
}
