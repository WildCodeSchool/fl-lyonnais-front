/* eslint-disable */
// Generate an unique key :
export const generateKey = (data) => `${data}_${new Date().getTime()}`;

export function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export function validateNumber(num) {
  const re = /^[0-9]*$/;
  return re.test(Number(num));
}

export function isSiret(siret) {
  return !!(validateNumber(siret) && siret.toString().length === 14);
}

export function isPwMore8cha(pw) {
  return pw.toString().length >= 8;
}


export function onlyLetters(input) {
  return true;
  return input.match(/[A-Za-zÀ-ÿ]/);
}

export function isValidURL(str) {
  let  expression = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/
  return !! str.match(expression)
}



export function isFrenchMobile(mob) {
  var re = /^(?:(?:\+|00)33[\s.-]{0,3}(?:(0)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/
  return !! mob.match(re)
}