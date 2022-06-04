const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

const buildPath = path.resolve(__dirname, 'build');
console.log(buildPath);
fs.removeSync(buildPath);

const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');
const source = fs.readFileSync(campaignPath, 'utf8');

// AssertionError [ERR_ASSERTION]: Invalid callback specified.
let input = {
    language: 'Solidity',
    sources: {
        'Campaign.sol': {
            content: source
        }
    },
    settings: {
        outputSelection: {
            '*': {
                '*': ['*']
            }
        }
    }
};

const output = JSON.parse(solc.compile(JSON.stringify(input)));
console.log(output);
console.log(output["contracts"]);
// 1 is 1 count of contract
// const output = solc.compile(source, 1).contracts;

fs.ensureDirSync(buildPath);

for (let file in output["contracts"]) {
    for (let contract in output["contracts"][file]) {
        console.log(contract);
        fs.outputJSONSync(
            path.resolve(buildPath, contract + '.json'),
            output["contracts"][file][contract]
        );
    }
}

// `output` here contains the JSON output as specified in the documentation
// for (var contractName in output.contracts['Campaign.sol']) {
//     console.log(
//         contractName +
//         ': ' +
//         output.contracts['Campaign.sol'][contractName].evm.bytecode.object
//     );
// }
