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
          }


     }
};
