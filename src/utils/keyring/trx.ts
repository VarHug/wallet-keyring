import * as ethWallet from 'ethereumjs-wallet';
import * as ethUtil from 'ethereumjs-util';
import * as decredjsUtil from 'decredjs-lib';
import { mnemonicToSeedSync } from './seed';
import { uint8ArrayToHex } from '../utilities';

/**
 * 生成根私钥
 * @param {Buffer} seed 种子 Buffer
 * @returns {Object} EthereumHDKey 实例对象
 */
export const generateRoot = (seed: Buffer): ethWallet.hdkey => {
  return ethWallet.hdkey.fromMasterSeed(seed);
};

/**
 * 根据 HDPath 生成私钥节点
 * @param {Object} EthereumHDKey 实例对象
 * @param {String} path HDPath
 * @returns {Object} EthereumHDKey 实例对象
 */
export const generateNode = (
  root: ethWallet.hdkey,
  path: string
): ethWallet.hdkey => {
  return root.derivePath(path);
};

/**
 * 根据 私钥节点 获取地址
 * @param {Object} node EthereumHDKey 实例对象
 * @returns {String}
 */
export const getAddress = (node: ethWallet.hdkey): string => {
  return node.getWallet().getAddress().toString('hex');
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
  let address = getAddress(node);
  address = '41' + address;
  const addressInBuffer = decredjsUtil.util.buffer.hexToBuffer(address);
  const firstHash = ethUtil.sha256(addressInBuffer);
  const secondHash = ethUtil.sha256(firstHash);
  const finalHash = decredjsUtil.util.buffer.hexToBuffer(
    address + uint8ArrayToHex(secondHash.slice(0, 4))
  );
  address = decredjsUtil.encoding.Base58.encode(finalHash);
  return address;
};
