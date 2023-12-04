const secp = require('ethereum-cryptography/secp256k1');
const { toHex, utf8ToBytes } = require('ethereum-cryptography/utils')
const { keccak256 } = require('ethereum-cryptography/keccak')

// PRIVATE KEY GEN
const pk = secp.secp256k1.utils.randomPrivateKey();
console.log("private Key:", toHex(pk));

// PUBLIC KEY GEN FROM PRIVATE KEY
const pub_key = secp.secp256k1.getPublicKey(pk);
console.log("public Key:", toHex(pub_key));
toHex(pub_key);


// ETHEREUM ADDRESS
console.log("Address:", toHex(keccak256(pub_key.slice(1)).slice(-20)));


// Message
const msg = "Hello World";
// Convert Msg to bytes
const msgBytes = utf8ToBytes(msg);
// Hash the bytesArray
const msgHash = keccak256(msgBytes);
console.log("msg Hash:", toHex(msgHash));


// Signing a Msg with private Key
const signature = secp.secp256k1.sign(msgHash, pk)
console.log(signature);
const recPKey = toHex(signature.recoverPublicKey(msgHash).toRawBytes());

console.log("Recovered-Public-Key;", recPKey);


