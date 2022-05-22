const Lottery = artifacts.require("Lottery");
const Web = require
contract("Lottery", function (accounts) {
    let instance;

    before(async () => {
        instance = await Lottery.new({ from: accounts[0], gas: 1000000 });
    })

    beforeEach(async () => {
        console.log('beforeEach');
    });

    it(`deploys a contract`, () => {
        assert.ok(instance.contract.options.address);
    });

    it(`allows one account to enter`, async () => {
        await instance.contract.methods.enter().send({
            from: accounts[0],
            value: web3.utils.toWei('0.1', 'ether')
        })

        let players = await instance.contract.methods.getPlayers().call({
            from: accounts[0]
        });

        assert.equal(accounts[0], players[0]);
        assert.equal(1, players.length);

        await instance.contract.methods.pickWinner().send({
            from: accounts[0]
        });

        let man = await instance.contract.methods.manager().call();
        console.log('Manager=' + man);
        players = await instance.contract.methods.getPlayers().call({
            from: accounts[0]
        });
        console.log('players=' + players);
    });

    it(`allows multiple accounta to enter`, async () => {
        await instance.contract.methods.enter().send({
            from: accounts[0],
            value: web3.utils.toWei('0.1', 'ether')
        })
        await instance.contract.methods.enter().send({
            from: accounts[1],
            value: web3.utils.toWei('0.2', 'ether')
        })
        await instance.contract.methods.enter().send({
            from: accounts[2],
            value: web3.utils.toWei('0.3', 'ether')
        })

        const players = await instance.contract.methods.getPlayers().call({
            from: accounts[0]
        });

        console.log(accounts);
        console.log(players);

        assert.equal(accounts[0], players[0]);
        assert.equal(accounts[1], players[1]);
        assert.equal(accounts[2], players[2]);
        assert.equal(3, players.length);

        let contractAddress = await instance.address;
        let contractBalance = await web3.eth.getBalance(contractAddress);
        console.log(web3.utils.fromWei(contractBalance, 'ether') + ' ether');
        assert.equal(600000000000000000, contractBalance);

        await instance.contract.methods.pickWinner().send({
            from: accounts[0]
        });
    });

    it(`requires a minimum amount of ether to enter`, async () => {
        try {
            await instance.contract.methods.enter().send({
                from: accounts[0],
                value: 0
            });
        } catch (err) {
            assert(err);
            return;
        }
        assert(false, 'value pass');
    });

    it(`only manager can call pickWinner`, async () => {
        try {
            await instance.contract.methods.pickWinner().send({
                from: accounts[1]
            });
        } catch (err) {
            assert(err);
            return;
        }
        assert(false, 'access pickWinner()');
    });

    it(`sends money to the winner and resets the players array`, async () => {
        await instance.contract.methods.enter().send({
            from: accounts[0],
            value: web3.utils.toWei('2', 'ether')
        });

        let initialBalance = await web3.eth.getBalance(accounts[0]);

        await instance.contract.methods.pickWinner().send({
            from: accounts[0]
        });

        let finalBalance = await web3.eth.getBalance(accounts[0]);

        const difference = finalBalance - initialBalance;
        console.log(difference);
        assert(difference > web3.utils.toWei('1.8', 'ether'));
    })
});