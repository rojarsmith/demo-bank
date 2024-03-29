const { assert } = require('chai')

const KryptoCurioz = artifacts.require('./KryptoCurioz')

// check for chai
require('chai')
    .use(require('chai-as-promised'))
    .should();

contract('KryptoCurioz', (accounts) => {
    let contract

    before(async () => {
        contract = await KryptoCurioz.deployed()
    })

    // testing container - describe

    describe('deployment', async () => {
        it('deploys successfuly', async () => {

            const address = contract.address
            assert.notEqual(address, '')
            assert.notEqual(address, null)
            assert.notEqual(address, undefined)
            assert.notEqual(address, 0x0)
        })
        it('has a name and symbol', async () => {
            assert.equal(await contract.name(), 'KryptoCurioz')
            assert.equal(await contract.symbol(), 'KCURIOZ')
        })
    })

    describe('minting', async () => {
        it('creates a new token', async () => {
            const result = await contract.mint('https...1')
            const totalSupply = await contract.totalSupply()
            // Success
            assert.equal(totalSupply, 1)
            const event = result.logs[0].args
            assert.equal(event._from, '0x0000000000000000000000000000000000000000', 'from the contract')
            assert.equal(event._to, accounts[0], 'to is msg.sender')

            // Failure
            await contract.mint('https...1').should.be.rejected
        })
    })

    describe('indexing', async () => {
        it('lists KryptoCurioz', async () => {
            await contract.mint('https...2')
            await contract.mint('https...3')
            await contract.mint('https...4')
            const totalSupply = await contract.totalSupply()
            let result = []
            let KryptoCurio
            for (i = 0; i < totalSupply; i++) {
                KryptoCurio = await contract.kryptoCurioz(i)
                result.push(KryptoCurio)
            }

            let expected = ['https...1', 'https...2', 'https...3', 'https...4']
            assert.equal(result.join(','), expected.join(','))
        })
    })
})