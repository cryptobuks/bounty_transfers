/*
 Examples: https://github.com/ethereum/web3.js/tree/master/example
 Ethereum Web3 API: https://github.com/ethereum/wiki/wiki/JavaScript-API
*/
const Web3 = require('web3'),
    FastCSV = require('fast-csv'),
    web3 = new Web3(
        new Web3.providers.HttpProvider('http://localhost:8545')
    ),
    eth = web3.eth,
    csvPath = 'data/transfers.csv';


console.log("CVS reading", csvPath);
FastCSV
    .fromPath(csvPath, {
        headers: true,
        delimiter: ';'
    })
    .on('data', function(row){
        console.log('CSV row', row);
    })
    .on('end', function(){
        console.log('CVS processing finished', csvPath);
    });