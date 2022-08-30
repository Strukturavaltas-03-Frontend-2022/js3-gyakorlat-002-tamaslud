const setCookie = (token = '') => {
  const expired = new Date(Date.now() + 15 * 60 * 1000).toUTCString();
  document.cookie = `token=${token}; expires=${expired};`;
};

export default setCookie;
/*
1. Írj egy `setCookie` nevű függvényt, ami a paraméterként kapott stringet eltárolja
egy `token` nevű sütiben, ami 15 perc után lejár!

A  setCookie-ban csak a Date konstruktor függvényt,
a now() és a toUTCString() metódusokat használjátok.

*/
