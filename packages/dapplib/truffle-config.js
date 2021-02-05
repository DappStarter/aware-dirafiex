require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture roast frame ski stone cruise sister coast harvest cloth army gift'; 
let testAccounts = [
"0x5d4e413e5193128c5acdf6d28a4570d5f29c5ad7841de216e4e8d87b9f761a3c",
"0x4cce860d8d76877c2b08de3a3c64e5e9c900bd8ec87075d7d0b3d8a12ca65939",
"0x32ce7c61039e2b2dc31b567399aab1de30fc042ba1879da12fa500958ad46226",
"0x46bf75717bdb4373b789c244926daec9f198cb0db4852d2b3eefd196aa83b332",
"0x1ac57f8cc386304a1ddd6d484945032fe263dde75d3a6fee01e61f781dbda9e4",
"0xe63614d567d3275e890426c3e811c83ecd9e83088329c3cd6bb9ea2b5bc011ce",
"0xcfb54c78ed91fbb99d4fba1f6eacf1e2dd6c559895f61eacf4d4b67b84fc3500",
"0x5936a2c1ea5ac285fb8331d269d8cf5fbdcba49d4d940e55593a206323a6f0dd",
"0xd4e0a27442fd038ca524f56c692da8f1fbbd3f23b222f5c14f5cb16a65673278",
"0x8fb8f4468559a96b6971d390f2d04c3c93fe429456b2630fe68edca3cafaeaf9"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
