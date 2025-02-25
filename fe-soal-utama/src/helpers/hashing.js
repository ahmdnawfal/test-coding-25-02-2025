import CryptoJS from 'crypto-js';

export function hashing(input) {
  return CryptoJS.SHA256(input).toString(CryptoJS.enc.Hex);
}
