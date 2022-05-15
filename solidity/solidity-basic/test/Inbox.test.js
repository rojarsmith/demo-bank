const Inbox = artifacts.require("Inbox");

contract("Inbox", function (accounts) {
    console.log('accounts[0]=' + accounts[0]);
    const str1 = 'Hi Rojar';

    it(`name should:${str1}`, async function () {
        let instance = await Inbox.deployed();
        let message = await instance.message.call();
        return assert.equal(message, "Hi Rojar", "message error");
    });
});