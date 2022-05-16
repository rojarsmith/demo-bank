const Inbox = artifacts.require("Inbox");

contract("Inbox", function (accounts) {
    console.log('accounts=' + accounts);
    console.log('accounts[0]=' + accounts[0]);

    const str1 = 'Hi Smith';

    let instance;

    beforeEach(async () => {
        instance = await Inbox.new(str1, { from: accounts[0], gas: 1000000 });
        // console.log(instance);
    });

    it(`name should:${str1}`, async function () {
        // let instance = await Inbox.new(str1, {from: accounts[0], gas:1000000});
        // let instance = await Inbox.deployed();
        let message = await instance.message.call();
        return assert.equal(message, "Hi Smith", "message error");
    });

    it(`Inbox`, () => {
        console.log('instance.contract.options.address=' + instance.contract.options.address);
        assert.ok(instance.contract.options.address);
    });
});