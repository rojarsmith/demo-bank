const HDWalletProvider = require("@truffle/hdwallet-provider");
const keys = require("./keys.json")

module.exports = {
  contracts_build_directory: "./public/contracts",
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
    },
    alchemy: {
      provider: () => new HDWalletProvider({
        mnemonic: {
          phrase: keys.MNEMONIC
        },
        providerOrUrl: `https://eth-goerli.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
        addressIndex: 0
      }),
      network_id: "*",   // This network is yours, in the cloud.
    },
    // expired
    ropsten: {
      provider: () =>
        new HDWalletProvider({
          mnemonic: {
            phrase: keys.MNEMONIC
          },
          providerOrUrl: `https://ropsten.infura.io/v3/${keys.INFURA_API_KEY}`,
          addressIndex: 0
        }),
      network_id: 3,
      gas: 5500000, // Gas Limit, How much gas we are willing to spent
      gasPrice: 20000000000, // how much we are willing to spent for unit of gas
      confirmations: 2, // number of blocks to wait between deployment
      timeoutBlocks: 200 // number of blocks before deployment times out
    }
  },
  compilers: {
    solc: {
      version: "0.8.16",
    }
  }
};

// Deploying 'CourseMarketplace'
// transaction hash:    0xcfec4a8e60545eba3b42d3dea94b083d66a369ce5507a032268734b92e662e0b
// contract address:    0x59E1e462af19bAE2356d161D74721f4795B6Bf77
