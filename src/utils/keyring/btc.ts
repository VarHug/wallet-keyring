import * as bitcoin from 'bitcoinjs-lib';
import { BIP32Interface } from 'bitcoinjs-lib/types';
import { mnemonicToSeedSync } from './seed';

/**
 * 生成根私钥
 * @param {Buffer} seed 种子 Buffer
 * @returns {BIP32Interface}
 */
export const generateRoot = (seed: Buffer): BIP32Interface => {
  return bitcoin.bip32.fromSeed(seed);
};

/**
 * 根据 HDPath 生成私钥节点
 * @param {BIP32Interface}
 * @param {String} path HDPath
 * @returns {BIP32Interface}
 */
export const generateNode = (
  root: BIP32Interface,
  path: string
): BIP32Interface => {
  return root.derivePath(path);
};

/**
 * 根据 私钥节点 和 网络 获取地址
 * @param {BIP32Interface}
 * @param {String} network
 * @returns {String}
 */
export const getAddress = (node: BIP32Interface): string => {
  return bitcoin.payments.p2pkh({ pubkey: node.publicKey }).address!;
};

/**
 * 根据 助记词 和 HDPath 获取指定节点的地址
 * @param {String} words
 * @param {String} path
 * @returns {String}
 */
export const getAccount = (words: string, path: string): string => {
  const seed = mnemonicToSeedSync(words);
  const root = generateRoot(seed);
  const node = generateNode(root, path);
  const address = getAddress(node);
  return address;
};
