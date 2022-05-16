const Inbox = artifacts.require("Inbox");

contract("Inbox", function (accounts) {
    console.log('accounts=' + accounts);
    console.log('accounts[0]=' + accounts[0]);

    const str1 = 'Hi Smith';
    const str2 = 'Hi Rojar';

    let instance;

    beforeEach(async () => {
        instance = await Inbox.new(str1, { from: accounts[0], gas: 1000000 });
        // console.log(instance);
    });

    it(`message should:${str1}`, async function () {
        // let instance = await Inbox.new(str1, {from: accounts[0], gas:1000000});
        // let instance = await Inbox.deployed();
        let message = await instance.message.call();
        return assert.equal(message, "Hi Smith", "message error");
    });

    it(`message should:${str1}`, async () => {
        let message = await instance.contract.methods.message().call();
        return assert.equal(message, "Hi Smith", "message error");
    });

    it(`Inbox`, () => {
        console.log('instance.contract.options.address=' + instance.contract.options.address);
        assert.ok(instance.contract.options.address);
    });

    it(`change message`, async () => {
        await instance.contract.methods.setMessage(str2).send({ from: accounts[0], gas: 1000000 });
        let message = await instance.contract.methods.message().call();
        return assert.equal(message, "Hi Rojar", "message error");
    });
});