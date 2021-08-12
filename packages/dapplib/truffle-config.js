require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey close off success strategy crawl pulse public hard light army gather'; 
let testAccounts = [
"0x79b80457f14dad73fb06250df3ad5fabae2b509901ef376e05d50c54e25f9417",
"0x4c0126143d74a9f4eb4e8cab2dcb1adaca0ccc39e6313a50452705d2b27bab1f",
"0x38e363a5ee60e7418af06e80dae6b8c4eced5e393474b2268e86db520816cc0d",
"0xf10e5dfa7b0db47d8530e53074d13fae4c9da9696be7259c2d883db94cc2a43c",
"0x2fba1200a6652a60c9464d4eb124aee702b69f2237043f431f4c6b1dc9029f75",
"0xfef9d207640570ebc0fa37ff668c251132b8ea835ca99695be54e85a8e4c7dcf",
"0xb68fdb597c1758ff9660178fcd90f9a25a3da850d65614aadb4f6f882a12d026",
"0x61504a8ce1a9b140b7b7698f21cd331bf1463a06c344b922e945aba86cc2cc94",
"0x58269d188bef07e91bee78a3d4ec50922f361999d2e55e6702ff812992d30752",
"0xec6f28c5919ad9435561cc1ef37d51beb1418bd6c239c5f334eead4b24409f5c"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

