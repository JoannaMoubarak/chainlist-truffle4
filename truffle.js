const HDWalletProvider = require("truffle-hdwallet-provider");
require('dotenv').config();

module.exports = {
     // See <http://truffleframework.com/docs/advanced/configuration>
     // to customize your Truffle configuration!
     networks: {
          ganache: {
               host: "localhost",
               port: 7545,
               network_id: "*" // Match any network id
          },

         chainskills: {
               host: "localhost",
               port: 8545,
               network_id: "4224",
               //gas: 4700000,
               //from: '0x8e860611e1b4ec3359d0f72f1092480da04e889e'
          },

          rinkeby: {
                host: "localhost",
                port: 8545,
                network_id: "4", // rinkeby testnet
                //"gas":    4700000  ,
              //  gasPrice: 20000000000,
                //"gasPrice": 100000000000,
                from: '0x44c4e3a3e8a4b5fc2b9b64ef0a63b7fed192cf97'

           },

           ropsten: {
            provider: function () {
                return new HDWalletProvider(process.env.MNEMONIC, "https://ropsten.infura.io/v3/" + process.env.INFURA_API_KEY);
            },
            network_id: 3,
            gas: 4500000,
            gasPrice: 10000000000
        }

     }
};
