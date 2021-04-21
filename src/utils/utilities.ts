export const uint8ArrayToHex = (a: Buffer): string => {
  let s = '';
  for (let i = 0; i < a.length; i++) {
    let h = a[i].toString(16);
    while (h.length < 2) {
      h = '0' + h;
    }
    s = s + h;
  }
  return s;
};
