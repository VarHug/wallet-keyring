import * as bip39 from 'bip39';

/**
 * 根据助记词生成种子 Buffer
 * @param {String} words 助记词
 * @returns {Buffer} 种子 Buffer
 */
export const mnemonicToSeedSync = (words: string): Buffer => {
  return bip39.mnemonicToSeedSync(words);
};

/**
 * 根据助记词生成种子 16进制
 * @param {String} words
 * @returns {String}
 */
export const mnemonicToSeedHexSync = (words: string): string => {
  return mnemonicToSeedSync(words).toString('hex');
};
