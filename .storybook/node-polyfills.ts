import * as nodeCrypto from 'node:crypto';

type HashEncoding = 'hex' | 'base64' | 'base64url';

type LegacyHash = (algorithm: string, data: string, encoding: HashEncoding) => string;

const cryptoWithHash = nodeCrypto as typeof nodeCrypto & {
  hash?: LegacyHash;
};

if (typeof cryptoWithHash.hash !== 'function') {
  cryptoWithHash.hash = ((algorithm, data, encoding) => {
    return nodeCrypto.createHash(algorithm).update(data).digest(encoding);
  }) satisfies LegacyHash;
}
