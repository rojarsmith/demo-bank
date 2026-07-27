const ebnf = require('ebnf');
const fs = require('fs')
const path = require('path');
const { mainModule } = require('process');

const absolutePath = path.join(__dirname, 'bnf')
console.log(absolutePath)
bnfData = null

function getData() {
    return new Promise((resolve, reject) => {
        fs.readFile(absolutePath, 'utf-8', async function (err, data) {
            if (err) {
                await reject(err)
            } else {
                await resolve(data);
            }
        })
    })
}

const main = async () => {
    bnfData = await getData()
    console.log(bnfData)

    let bnfParser = await new ebnf.Grammars.BNF.Parser(bnfData);
}

main()