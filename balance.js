/*
 Examples: https://github.com/ethereum/web3.js/tree/master/example
 Ethereum Web3 API: https://github.com/ethereum/wiki/wiki/JavaScript-API
*/
const Web3 = require('web3'),
    web3 = new Web3(
        new Web3.providers.HttpProvider('http://localhost:8545')
    ),
    eth = web3.eth;

console.log('Available accounts', eth.accounts);

primary = eth.accounts[0];
console.log('Primary account', primary);

balance = web3.fromWei(eth.getBalance(primary), "ether");
console.log('Primary account balance', balance.toNumber());