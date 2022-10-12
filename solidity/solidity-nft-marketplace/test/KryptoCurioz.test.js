const { assert } = require('chai')

const KryptoCurioz = artifacts.require('./KryptoCurioz')

// check for chai
require('chai')
    .use(require('chai-as-promised'))
    .should();

contract('KryptoCurioz', (accounts) => {
    let contract

    // testing container - describe

    describe('deployment', async () => {
        it('deploys successfuly', async() => {
            contract = await KryptoCurioz.deployed()
        })
    })
})