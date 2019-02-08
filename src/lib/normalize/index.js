export const audioLength = (value) => value.replace(/[^\d]/g, '').slice(0, 10);

export const username = (value) => value && value.replace(/[^\w ]/g, '');

export const age = (value) => value.replace(/[^\d]/g, '').slice(0, 3);

export const captialize = (value) =>
  value && value.charAt(0).toUpperCase() + value.slice(1);
