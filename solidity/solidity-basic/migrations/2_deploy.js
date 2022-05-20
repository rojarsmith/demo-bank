const Inbox = artifacts.require("Inbox");
const Lottery = artifacts.require("Lottery");

module.exports = function (deployer) {
  deployer.deploy(Lottery);
  deployer.deploy(Inbox, 'Hi Rojar');
};
